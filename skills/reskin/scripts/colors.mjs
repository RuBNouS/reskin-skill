#!/usr/bin/env node
// Measures the colours in a screenshot, and checks contrast between two colours. No dependencies.
//   node colors.mjs shot.png [more.webp]
//   node colors.mjs contrast "#f4f4f5" "#101114"
// PNG is read directly. Other formats go through whatever the system already has to convert images.
// Exit code 2: the image could not be read, so its colours have to be estimated by eye.

import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { inflateSync } from 'node:zlib';

const PNG_SIGNATURE = '89504e470d0a1a0a';
const CHANNELS = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 };

// Colours closer than this are one colour: it absorbs anti-aliasing and gradients' small steps
const MERGE_DISTANCE = 12;
// Enough for any flat UI. Photos have far more, but past this point they are noise
const MAX_EXACT_COLOURS = 20000;
const MIN_DOMINANT_PCT = 0.5;
const MIN_ACCENT_PCT = 0.02;
const MAX_ACCENT_PCT = 15;
// Below this a colour reads as grey, however pale the palette is
const MIN_ACCENT_CHROMA = 24;
// Above this a colour is clearly an accent, however vivid a few stray pixels elsewhere in the image are
const SURE_ACCENT_CHROMA = 60;

// Windows Imaging Component ships with Windows and also reads JPEG, WebP, BMP, GIF and TIFF
const WINDOWS_TO_PNG = `
Add-Type -AssemblyName PresentationCore
$decoder = [Windows.Media.Imaging.BitmapDecoder]::Create([Uri]$env:IMAGE_IN, 'None', 'OnLoad')
$encoder = [Windows.Media.Imaging.PngBitmapEncoder]::new()
$encoder.Frames.Add($decoder.Frames[0])
$stream = [IO.File]::Create($env:IMAGE_OUT)
$encoder.Save($stream)
$stream.Dispose()
`;

function paeth(a, b, c) {
	const p = a + b - c;
	const pa = Math.abs(p - a);
	const pb = Math.abs(p - b);
	const pc = Math.abs(p - c);
	if (pa <= pb && pa <= pc) return a;
	return pb <= pc ? b : c;
}

export function decodePng(buffer) {
	if (buffer.subarray(0, 8).toString('hex') !== PNG_SIGNATURE) throw new Error('not a PNG file');

	let width, height, depth, colourType, interlace, palette;
	const compressed = [];
	for (let at = 8; at < buffer.length;) {
		const length = buffer.readUInt32BE(at);
		const type = buffer.toString('latin1', at + 4, at + 8);
		const data = buffer.subarray(at + 8, at + 8 + length);
		if (type === 'IHDR') {
			width = data.readUInt32BE(0);
			height = data.readUInt32BE(4);
			[depth, colourType] = [data[8], data[9]];
			interlace = data[12];
		} else if (type === 'PLTE') {
			palette = data;
		} else if (type === 'IDAT') {
			compressed.push(data);
		}
		at += 12 + length;
	}

	const channels = CHANNELS[colourType];
	if (!channels || (depth !== 8 && depth !== 16) || interlace) {
		throw new Error(`unsupported PNG (type ${colourType}, ${depth}-bit, interlace ${interlace})`);
	}

	const raw = inflateSync(Buffer.concat(compressed));
	const pixelBytes = channels * (depth / 8);
	const rowBytes = width * pixelBytes;
	const pixels = new Uint32Array(width * height);
	let previous = Buffer.alloc(rowBytes);

	for (let y = 0; y < height; y++) {
		const start = y * (rowBytes + 1);
		const filter = raw[start];
		const row = Buffer.from(raw.subarray(start + 1, start + 1 + rowBytes));

		for (let i = 0; i < rowBytes; i++) {
			const left = i >= pixelBytes ? row[i - pixelBytes] : 0;
			const up = previous[i];
			const upLeft = i >= pixelBytes ? previous[i - pixelBytes] : 0;
			if (filter === 1) row[i] += left;
			else if (filter === 2) row[i] += up;
			else if (filter === 3) row[i] += (left + up) >> 1;
			else if (filter === 4) row[i] += paeth(left, up, upLeft);
		}

		for (let x = 0; x < width; x++) {
			// With 16-bit samples, the first byte of each is the one that matters
			const sample = (channel) => row[x * pixelBytes + channel * (depth / 8)];
			let r, g, b, a = 255;
			if (colourType === 3) {
				const entry = sample(0) * 3;
				[r, g, b] = [palette[entry], palette[entry + 1], palette[entry + 2]];
			} else if (colourType === 0 || colourType === 4) {
				r = g = b = sample(0);
				if (colourType === 4) a = sample(1);
			} else {
				[r, g, b] = [sample(0), sample(1), sample(2)];
				if (colourType === 6) a = sample(3);
			}
			// Transparent pixels are not part of the look, so they are marked to be skipped
			pixels[y * width + x] = a < 128 ? 0xffffffff : ((r << 16) | (g << 8) | b);
		}
		previous = row;
	}
	return { width, height, pixels };
}

const toHex = (colour) => `#${colour.toString(16).padStart(6, '0')}`;
const channels = (colour) => [(colour >> 16) & 255, (colour >> 8) & 255, colour & 255];

function isNear(a, b) {
	const [ar, ag, ab] = channels(a);
	const [br, bg, bb] = channels(b);
	return Math.max(Math.abs(ar - br), Math.abs(ag - bg), Math.abs(ab - bb)) <= MERGE_DISTANCE;
}

function chroma(colour) {
	const [r, g, b] = channels(colour);
	return Math.max(r, g, b) - Math.min(r, g, b);
}

export function measureColours({ width, height, pixels }) {
	const counts = new Map();
	let visible = 0;
	for (const pixel of pixels) {
		if (pixel === 0xffffffff) continue;
		visible++;
		counts.set(pixel, (counts.get(pixel) || 0) + 1);
	}

	// Each group is named after its most common exact colour, so flat UI colours keep their true hex
	const groups = [];
	const exact = [...counts].sort((a, b) => b[1] - a[1]).slice(0, MAX_EXACT_COLOURS);
	for (const [colour, count] of exact) {
		const group = groups.find((g) => isNear(g.colour, colour));
		if (group) group.count += count;
		else groups.push({ colour, count });
	}

	const pct = (count) => Math.round((count / visible) * 10000) / 100;
	const summary = groups.map((g) => ({ colour: g.colour, hex: toHex(g.colour), pct: pct(g.count) })).sort((a, b) => b.pct - a.pct);
	const describe = ({ hex, pct: share }) => ({ hex, pct: share });

	const dominant = summary.filter((g) => g.pct >= MIN_DOMINANT_PCT).slice(0, 12);
	// How colourful counts as an accent depends on the image: in a pastel design the brand colour is itself pale
	const strongest = Math.max(0, ...summary.map((g) => chroma(g.colour)));
	const threshold = Math.min(SURE_ACCENT_CHROMA, Math.max(MIN_ACCENT_CHROMA, strongest / 2));
	const accents = summary.filter((g) => chroma(g.colour) >= threshold && g.pct >= MIN_ACCENT_PCT && g.pct <= MAX_ACCENT_PCT).slice(0, 6);
	return { width, height, dominant: dominant.map(describe), accents: accents.map(describe) };
}

function luminance(hex) {
	const value = Number.parseInt(hex.replace('#', ''), 16);
	const [r, g, b] = channels(value).map((channel) => {
		const c = channel / 255;
		return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
	});
	return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrast(a, b) {
	const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
	return Math.round(((light + 0.05) / (dark + 0.05)) * 100) / 100;
}

function convertToPng(file) {
	const folder = mkdtempSync(join(tmpdir(), 'reskin-'));
	const output = join(folder, 'converted.png');
	const input = resolve(file);
	const attempts = {
		win32: [['powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', WINDOWS_TO_PNG]]],
		darwin: [['sips', ['-s', 'format', 'png', input, '--out', output]]]
	}[process.platform] || [['magick', [input, output]], ['convert', [input, output]], ['ffmpeg', ['-y', '-loglevel', 'error', '-i', input, output]]];

	try {
		for (const [command, args] of attempts) {
			const run = spawnSync(command, args, { env: { ...process.env, IMAGE_IN: input, IMAGE_OUT: output }, windowsHide: true, timeout: 60000 });
			if (run.status === 0) return readFileSync(output);
		}
		return null;
	} catch {
		return null;
	} finally {
		rmSync(folder, { recursive: true, force: true });
	}
}

// Formats and PNG variants that the decoder here does not read still work if the system can convert them
function measureFile(file) {
	const buffer = readFileSync(file);
	try {
		return measureColours(decodePng(buffer));
	} catch (error) {
		const converted = convertToPng(file);
		if (!converted) throw error;
		return { ...measureColours(decodePng(converted)), converted: true };
	}
}

function main(args) {
	if (args[0] === 'contrast' && args.length === 3) {
		if (!args.slice(1).every((c) => /^#[0-9a-f]{6}$/i.test(c))) {
			console.error('Colours must look like #rrggbb.');
			return 1;
		}
		console.log(contrast(args[1], args[2]));
		return 0;
	}
	if (args.length === 0) {
		console.error('Usage: colors.mjs <image> [more images] | colors.mjs contrast <#rrggbb> <#rrggbb>');
		return 1;
	}

	let failed = false;
	for (const file of args) {
		try {
			console.log(JSON.stringify({ file, ...measureFile(file) }, null, 1));
		} catch (error) {
			console.log(JSON.stringify({ file, error: error.message }));
			failed = true;
		}
	}
	return failed ? 2 : 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
	process.exitCode = main(process.argv.slice(2));
}
