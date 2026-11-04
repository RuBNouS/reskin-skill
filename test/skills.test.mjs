import test from 'node:test';
import assert from 'node:assert';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = (path) => fileURLToPath(new URL(`../${path}`, import.meta.url));
const read = (path) => readFileSync(root(path), 'utf8');
const NAMES = ['reskin', 'reskin-style', 'reskin-full'];

// The skills are the product, so a broken cross-reference is a bug even though nothing "runs"
test('each skill has complete frontmatter named after its folder', () => {
	for (const name of NAMES) {
		const text = read(`skills/${name}/SKILL.md`);
		const front = text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
		assert.match(front, new RegExp(`^name: ${name}$`, 'm'), name);
		assert.match(front, /^description: .{20,}/m, name);
		assert.match(front, /^argument-hint: /m, name);
		assert.match(front, /^disable-model-invocation: true$/m, name);
	}
});

test('reskin has sections 1 to 8, and no skill points at a section that does not exist', () => {
	const main = read('skills/reskin/SKILL.md');
	const headings = [...main.matchAll(/^## (\d+)\. /gm)].map((m) => Number(m[1]));
	assert.deepStrictEqual(headings, [1, 2, 3, 4, 5, 6, 7, 8]);
	for (const name of NAMES) {
		const text = read(`skills/${name}/SKILL.md`);
		for (const [, list] of text.matchAll(/sections? ((?:\d+(?:, | and | to )?)+)/g)) {
			for (const n of list.match(/\d+/g)) assert.ok(headings.includes(Number(n)), `${name} mentions section ${n}`);
		}
	}
});

test('the extra skills read reskin and tell the person when it is missing', () => {
	for (const name of ['reskin-style', 'reskin-full']) {
		const text = read(`skills/${name}/SKILL.md`);
		assert.match(text, /\.\.\/reskin\/SKILL\.md/, name);
		assert.match(text, /does not exist/, name);
	}
});

test('files that the skills mention exist', () => {
	const all = NAMES.map((n) => read(`skills/${n}/SKILL.md`)).join('\n');
	for (const [, path] of all.matchAll(/`((?:references|scripts)\/[\w.-]+)`/g)) {
		assert.ok(existsSync(root(`skills/reskin/${path}`)), path);
	}
	assert.ok(existsSync(root('skills/reskin/scripts/colors.mjs')));
});

test('styles named in the menu and the README exist in styles.md', () => {
	const styles = read('skills/reskin/references/styles.md');
	const folders = new Set(styles.match(/(?<=: |, )[\w.-]+(?=,|\n)/g));
	const text = read('skills/reskin/SKILL.md') + read('README.md');
	for (const [, style] of text.matchAll(/`\/reskin (spotify|uber|nvidia|linear|stripe)\b/g)) {
		assert.ok([...folders].some((f) => f === style || f.startsWith(`${style}.`)), style);
	}
});

test('the DESIGN.md template keeps the sections every file must have', () => {
	const format = read('skills/reskin/references/design-md-format.md');
	for (const section of REQUIRED) assert.match(format, new RegExp(`^## ${section}$`, 'm'), section);
});

const REQUIRED = ['Signature', 'Product Map', 'Sources', 'Project Decisions'];

test('every example DESIGN.md follows the format', () => {
	if (!existsSync(root('examples'))) return;
	for (const dir of readdirSync(root('examples'))) {
		const path = `examples/${dir}/DESIGN.md`;
		if (!existsSync(root(path))) continue;
		const text = read(path);
		assert.match(text, /^---\nversion: alpha\nname: /, path);
		for (const section of REQUIRED) assert.match(text, new RegExp(`^## ${section}$`, 'm'), `${path}: ${section}`);
	}
});

test('README documents every command, and the version has a changelog entry', () => {
	const readme = read('README.md');
	for (const name of NAMES) assert.match(readme, new RegExp(`/${name}\\b`), name);
	const { version } = JSON.parse(read('.claude-plugin/plugin.json'));
	assert.match(read('CHANGELOG.md'), new RegExp(`^## ${version.replaceAll('.', '\\.')}\\b`, 'm'));
});
