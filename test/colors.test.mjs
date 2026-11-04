import test from 'node:test';
import assert from 'node:assert';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { deflateSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { contrast, decodePng, measureColours } from '../skills/reskin/scripts/colors.mjs';

const SCRIPT = fileURLToPath(new URL('../skills/reskin/scripts/colors.mjs', import.meta.url));

function chunk(type, data = Buffer.alloc(0)) {
	const length = Buffer.alloc(4);
	length.writeUInt32BE(data.length);
	// The decoder does not check the CRC, so zeros are enough here
	return Buffer.concat([length, Buffer.from(type, 'latin1'), data, Buffer.alloc(4)]);
}

function paeth(a, b, c) {
	const p = a + b - c;
	const [pa, pb, pc] = [Math.abs(p - a), Math.abs(p - b), Math.abs(p - c)];
	if (pa <= pb && pa <= pc) return a;
	return pb <= pc ? b : c;
}

// rows: arrays of already encoded samples. Each row uses the next filter, so all five get exercised.
function png(width, rows, { colourType = 2, depth = 8, pixelBytes = 3, palette } = {}) {
	const header = Buffer.alloc(13);
	header.writeUInt32BE(width, 0);
	header.writeUInt32BE(rows.length, 4);
	[header[8], header[9]] = [depth, colourType];

	let previous = new Array(rows[0].length).fill(0);
	const encoded = rows.map((row, y) => {
		const filter = y % 5;
		const out = row.map((value, i) => {
			const left = i >= pixelBytes ? row[i - pixelBytes] : 0;
			const up = previous[i];
			const upLeft = i >= pixelBytes ? previous[i - pixelBytes] : 0;
			const prediction = [0, left, up, (left + up) >> 1, paeth(left, up, upLeft)][filter];
			return (value - prediction) & 255;
		});
		previous = row;
		return Buffer.from([filter, ...out]);
	});

	return Buffer.concat([
		Buffer.from('89504e470d0a1a0a', 'hex'),
		chunk('IHDR', header),
		...(palette ? [chunk('PLTE', Buffer.from(palette))] : []),
		chunk('IDAT', deflateSync(Buffer.concat(encoded))),
		chunk('IEND')
	]);
}

function solidRows(width, height, sample) {
	return Array.from({ length: height }, (_, y) => Array.from({ length: width }, (_, x) => sample(x, y)).flat());
}

const hexAt = ({ width, pixels }, x, y) => `#${pixels[y * width + x].toString(16).padStart(6, '0')}`;

test('decodes truecolour rows through all five PNG filters', () => {
	const rows = solidRows(4, 10, (x, y) => [x * 40 + 10, y * 20 + 5, (x + y) * 10 + 1]);
	const image = decodePng(png(4, rows));
	assert.strictEqual(hexAt(image, 0, 0), '#0a0501');
	assert.strictEqual(hexAt(image, 3, 9), '#82b979');
	assert.strictEqual(hexAt(image, 2, 4), '#5a553d');
});

test('decodes palette, greyscale, alpha and 16-bit images', () => {
	const palette = decodePng(png(2, [[0, 1]], { colourType: 3, pixelBytes: 1, palette: [255, 0, 0, 0, 0, 255] }));
	assert.strictEqual(hexAt(palette, 1, 0), '#0000ff');

	const grey = decodePng(png(1, [[128]], { colourType: 0, pixelBytes: 1 }));
	assert.strictEqual(hexAt(grey, 0, 0), '#808080');

	const greyAlpha = decodePng(png(1, [[200, 255]], { colourType: 4, pixelBytes: 2 }));
	assert.strictEqual(hexAt(greyAlpha, 0, 0), '#c8c8c8');

	const deep = decodePng(png(1, [[0x12, 0xff, 0x34, 0xff, 0x56, 0xff]], { depth: 16, pixelBytes: 6 }));
	assert.strictEqual(hexAt(deep, 0, 0), '#123456');
});

test('skips transparent pixels when measuring', () => {
	const rows = solidRows(10, 10, (x) => (x < 5 ? [255, 0, 0, 0] : [10, 20, 30, 255]));
	const { dominant } = measureColours(decodePng(png(10, rows, { colourType: 6, pixelBytes: 4 })));
	assert.deepStrictEqual(dominant, [{ hex: '#0a141e', pct: 100 }]);
});

test('finds surfaces by area and a small brand colour as an accent', () => {
	// 100x100: 80% background, 19.9% panel with anti-aliased edges, 0.1% brand colour
	const rows = solidRows(100, 100, (x, y) => {
		if (x === 0 && y < 10) return [94, 106, 210];
		if (x >= 80) return x === 80 ? [20, 21, 23] : [15, 16, 17];
		return [1, 1, 2];
	});
	const result = measureColours(decodePng(png(100, rows)));
	assert.strictEqual(result.dominant[0].hex, '#010102');
	assert.strictEqual(result.dominant[1].hex, '#0f1011', 'keeps the exact colour, not an average');
	assert.strictEqual(result.dominant[1].pct, 20, 'the near colour joins the panel');
	assert.deepStrictEqual(result.accents, [{ hex: '#5e6ad2', pct: 0.1 }]);
});

test('contrast matches known WCAG values', () => {
	assert.strictEqual(contrast('#000000', '#ffffff'), 21);
	assert.strictEqual(contrast('#ffffff', '#000000'), 21);
	assert.strictEqual(contrast('#777777', '#ffffff'), 4.48);
});

test('the command line reports what cannot be read with exit code 2', () => {
	const folder = mkdtempSync(join(tmpdir(), 'reskin-'));
	try {
		const jpeg = join(folder, 'photo.jpg');
		writeFileSync(jpeg, Buffer.from('ffd8ffe0', 'hex'));
		const run = (...args) => spawnSync(process.execPath, [SCRIPT, ...args], { encoding: 'utf8' });

		const failed = run(jpeg);
		assert.strictEqual(failed.status, 2);
		assert.match(failed.stdout, /not a PNG/);
		assert.strictEqual(run(join(folder, 'missing.png')).status, 2);

		const good = join(folder, 'ok.png');
		writeFileSync(good, png(1, [[1, 2, 3]]));
		const passed = run(good);
		assert.strictEqual(passed.status, 0);
		assert.strictEqual(JSON.parse(passed.stdout).dominant[0].hex, '#010203');

		assert.strictEqual(run('contrast', '#000000', '#ffffff').stdout.trim(), '21');
		assert.strictEqual(run('contrast', 'black', '#ffffff').status, 1);
		assert.strictEqual(run().status, 1);
	} finally {
		rmSync(folder, { recursive: true, force: true });
	}
});
