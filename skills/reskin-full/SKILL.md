---
name: reskin-full
description: Generate several design directions to choose from, then apply the one you pick.
argument-hint: "[number of directions] [style]"
disable-model-invocation: true
---

# Reskin full

Read `../reskin/SKILL.md` first. Its `references` and `scripts` folders are the ones to use. This skill runs its sections 1 to 3 once, explores several directions, and runs the rest only on the one the person picks.

A number in the arguments is how many directions to make. Without one, make 3. Above 6, say it will take a while and go on.

## 1. Plan the directions

After sections 1 to 3 of `reskin`, write one line per direction, with a short name. Directions must differ in ambience and composition, not just in colour: if two would look alike at a glance, replace one.

- With a reference, every direction keeps its signature and varies how far it goes: one close to the reference, one bolder, one quieter.
- Without a reference, each direction comes from a different style or idea that fits the product.

## 2. Build each one, on the main screen only

The project stays as it is. For each direction:

1. Create a worktree outside the project on its own branch: `git worktree add <temp folder>/<n>-<name> -b reskin/<n>-<name>`.
2. Write its `DESIGN.md` there and redesign the main screen, following sections 5 and 6 of `reskin`. One round of comparison is enough here.
3. Commit it on its branch and capture the screen.

If you have no browser you cannot show captures. Say so, and give the path of each worktree so the person can open them.

## 3. Let the person choose

Show the captures with one line each, and stop until the person picks. They may also ask to combine directions or to try more.

## 4. Apply the choice

1. Copy the chosen `DESIGN.md` into the project.
2. Run the rest of `reskin` from section 4, on every screen.
3. Remove the worktrees and their branches with `git worktree remove` and `git branch -D`, including the chosen one, whose result now lives in the project.
