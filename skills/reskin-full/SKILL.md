---
name: reskin-full
description: Generate several layout directions to choose from, then apply the one you pick.
argument-hint: "[number of directions] [style]"
disable-model-invocation: true
---

# Reskin full

Read `../reskin/SKILL.md` first. Its `references` and `scripts` folders are the ones to use. If that file does not exist, the three skill folders were not installed together: tell the person to install `reskin`, `reskin-style` and `reskin-full` side by side (the README has the install command), and stop. This skill runs its sections 1 to 3 once, explores several directions, and runs the rest only on the one the person picks.

A whole number as the first argument is how many directions to make, and whatever follows is read as `reskin` reads it (style, description or nothing). Without a number, make 3. If there is no reference, ask which style to use, as `reskin` does.

**Say what it costs before building.** Each direction is a full redesign in its own worktree, so the work and the tokens grow with the number. Write one line such as "3 directions: 3 full redesigns, expect this to take a while and use a lot more than `/reskin`." Above 4, ask for a yes before starting. If the person would rather spend little, suggest `/reskin-style`.

## 1. Plan the directions as a ladder

Every direction uses the same look: the same signature, material and palette. **What changes is how far the layout moves**, in even steps from the least change to the most. Direction 1 is always the bottom of the ladder and the last is always the top, so more directions mean smaller steps, not bigger extremes.

| Position | How far the layout moves |
|---|---|
| Bottom | Everything stays where it is. Only grouping, proportions and spacing change: controls settle into trays, the main thing grows, gaps open up |
| Middle | Sections are reorganised. Things move and merge, the screen gets a clear stage, secondary content steps back |
| Top | The screen is composed from nothing. Navigation can take another form and place, and the composition and focal point are new. Only what the app does stays |

With 3 directions, use the bottom, the middle and the top. With 5, add a step between each. With 2, use the bottom and the top. With 1, use the middle.

Write one line per direction, with a short name and what moves in it.

## 2. Build each one

The project stays as it is. Every direction is complete, so the person can open it and click through it: build every screen, unless the app has many, in which case build the main ones and say which. For each direction:

1. Create a worktree outside the project on its own branch: `git worktree add <temp folder>/<n>-<name> -b reskin/<n>-<name>`.
2. **Make the worktree runnable.** A worktree only has committed files, so an app with dependencies will not start in it. Look at what the app needs and prepare each worktree: install dependencies with the project's own package manager, from the lockfile without changing it (for example `npm ci`; or link the main `node_modules`), and copy the files the project ignores but needs to run, such as `.env` or a local database. Copy them, never edit the originals, and never print secret values. Then start it once and check it loads. If it cannot be made to run (a service the project needs, a private registry), say so, build that direction anyway, and give the person the files and captures instead of a running link.
3. Write its `DESIGN.md` there and redesign it, following sections 5 and 6 of `reskin`, at this direction's layout level instead of the one section 5 describes. One round of comparison is enough here.
4. Commit it on its branch, staging only the files the redesign changed (never the lockfile, logs or copied files), and capture every screen.

Then look at the captures in order. Each must clearly move further than the one before it, and neighbours must not look alike at a glance. If they do, push the higher one further.

## 3. Let the person choose

Always deliver the directions the same way, so the person can open and use each one, not only look at pictures.

1. **Make each one openable.** For a static app, that is the worktree's entry file as a `file:///` link with its full path. For an app with a server, start one per worktree on its own port and link to it, and keep them running until the person picks.
2. **Write one comparison page** at `<temp folder>/directions.html`: for each direction in ladder order, its name, one line on what moves, its captures as images, and its link. Without a browser there are no captures, so the page has only names and links.
3. **In the message**, give the link to that page and this list, with full paths or URLs and nothing shortened:

```
1. **<Name>** (moves least): <what moves>. <link>
2. **<Name>**: <what moves>. <link>
3. **<Name>** (moves most): <what moves>. <link>
```

Stop until the person picks. They may also ask to combine directions or to try more. If they want none, stop any servers and offer to remove the worktrees and branches, so nothing is left behind.

## 4. Apply the choice

1. Bring the chosen direction into the project without its commit: `git merge --squash reskin/<n>-<name>`. If the app has screens the direction did not build, finish them at the same layout level.
2. Run sections 4, 6 and 7 of `reskin`.
3. Stop any servers and check that their processes have really exited: a running server locks its worktree folder on Windows, and `git worktree remove` then fails or leaves the folder behind. Then remove the worktrees and branches with `git worktree remove` and `git branch -D`, including the chosen one, whose result now lives in the project.
