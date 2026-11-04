import test from 'node:test';
import assert from 'node:assert';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT = fileURLToPath(new URL('../install.mjs', import.meta.url));

test('installs the three skills side by side, with what they read', () => {
	const folder = mkdtempSync(join(tmpdir(), 'reskin-'));
	try {
		const run = spawnSync(process.execPath, [SCRIPT, '--to', folder], { encoding: 'utf8' });
		assert.strictEqual(run.status, 0, run.stderr);
		for (const file of ['reskin/SKILL.md', 'reskin-style/SKILL.md', 'reskin-full/SKILL.md', 'reskin/scripts/colors.mjs', 'reskin/references/styles.md']) {
			assert.ok(existsSync(join(folder, file)), file);
		}
		// Running again replaces the copies without failing
		assert.strictEqual(spawnSync(process.execPath, [SCRIPT, '--to', folder]).status, 0);
		assert.strictEqual(spawnSync(process.execPath, [SCRIPT, '--nonsense']).status, 1);
	} finally {
		rmSync(folder, { recursive: true, force: true });
	}
});
