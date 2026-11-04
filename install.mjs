#!/usr/bin/env node
// Copies the three skills side by side into a skills folder, so the commands are plain /reskin.
//   node install.mjs            into ./.claude/skills (this project only)
//   node install.mjs --global   into ~/.claude/skills (every project)
//   node install.mjs --to <dir> into any skills folder
// Existing copies of these three skills are replaced. Other skills are not touched.

import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SKILLS = ['reskin', 'reskin-style', 'reskin-full'];
const SOURCE = fileURLToPath(new URL('./skills/', import.meta.url));

export function install(target) {
	mkdirSync(target, { recursive: true });
	for (const name of SKILLS) {
		const to = join(target, name);
		rmSync(to, { recursive: true, force: true });
		cpSync(join(SOURCE, name), to, { recursive: true });
	}
	return SKILLS.map((name) => join(target, name));
}

function main(args) {
	let target = resolve('.claude', 'skills');
	if (args[0] === '--global') target = join(homedir(), '.claude', 'skills');
	else if (args[0] === '--to' && args[1]) target = resolve(args[1]);
	else if (args.length) {
		console.error('Usage: node install.mjs [--global | --to <skills folder>]');
		return 1;
	}
	if (!existsSync(SOURCE)) {
		console.error('Run this from a full copy of the repository: the skills folder is missing.');
		return 1;
	}
	for (const path of install(target)) console.log(`installed ${path}`);
	console.log('Restart the agent if it was open, then try /reskin.');
	return 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
	process.exitCode = main(process.argv.slice(2));
}
