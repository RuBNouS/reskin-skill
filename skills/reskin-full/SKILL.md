---
name: reskin-full
description: Generate several layout directions to choose from, then apply the one you pick.
argument-hint: "[number of directions] [style]"
disable-model-invocation: true
---

# Reskin full

Read `../reskin/SKILL.md` first. Its `references` and `scripts` folders are the ones to use. This skill runs its sections 1 to 3 once, explores several directions, and runs the rest only on the one the person picks.

A number in the arguments is how many directions to make. Without one, make 3. Above 6, say it will take a while and go on. If there is no reference, ask which style to use, as `reskin` does.

## 1. Plan the directions as a ladder

Every direction uses the same look: the same signature, material and palette. **What changes is how far the layout moves**, in even steps from the least change to the most. Direction 1 is always the bottom of the ladder and the last is always the top, so more directions mean smaller steps, not bigger extremes.

| Position | How far the layout moves |
|---|---|
| Bottom | Everything stays where it is. Only grouping, proportions and spacing change: controls settle into trays, the main thing grows, gaps open up |
| Middle | Sections are reorganised. Things move and merge, the screen gets a clear stage, secondary content steps back |
| Top | The screen is composed from nothing. Navigation can take another form and place, and the composition and focal point are new. Only what the app does stays |

With 3 directions, use the bottom, the middle and the top. With 5, add a step between each. With 2, use the bottom and the top. With 1, use the middle.

Write one line per direction, with a short name and what moves in it.

## 2. Build each one, on the main screen only

The project stays as it is. For each direction:

1. Create a worktree outside the project on its own branch: `git worktree add <temp folder>/<n>-<name> -b reskin/<n>-<name>`.
2. Write its `DESIGN.md` there and redesign the main screen, following sections 5 and 6 of `reskin`. One round of comparison is enough here.
3. Commit it on its branch and capture the screen.

Then look at the captures in order. Each must clearly move further than the one before it, and neighbours must not look alike at a glance. If they do, push the higher one further.

If you have no browser you cannot show captures. Say so, and give the path of each worktree so the person can open them.

## 3. Let the person choose

Show the captures in ladder order with one line each, and stop until the person picks. They may also ask to combine directions or to try more.

## 4. Apply the choice

1. Copy the chosen `DESIGN.md` into the project.
2. Run the rest of `reskin` from section 4, on every screen, at the layout level of the chosen direction.
3. Remove the worktrees and their branches with `git worktree remove` and `git branch -D`, including the chosen one, whose result now lives in the project.
