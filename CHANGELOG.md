# Changelog

## 0.3.0

- `install.mjs` copies the three skills side by side for plain `/reskin`, per project or globally.
- `colors.mjs --crop` leaves browser chrome and taskbars out of the measurement.
- `reskin`: a style is recognised by the folder list, and a typo is asked about instead of becoming a task. It checks for a browser and Node.js up front and suggests how to get one. It handles Tailwind, CSS-in-JS and component libraries, and stops cleanly for non-web apps. It no longer edits `CLAUDE.md` without asking. Tells the person exactly what to do when git is dirty.
- `reskin-full`: says what it costs before building, prepares each worktree so the app can run (dependencies and ignored files), and falls back to captures when it cannot.
- Styles: a browse link and a clear fallback when the download fails.
- Example app with before and after captures, and tests that check the skills' cross-references.

## 0.2.0

- First public version.
