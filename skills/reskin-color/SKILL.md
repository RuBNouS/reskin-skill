---
name: reskin-color
description: Change only your app's colours, from screenshots or a named style.
argument-hint: "[style]"
disable-model-invocation: true
---

# Reskin colour

Read `../reskin/SKILL.md` and follow it, with these differences. Its `references` and `scripts` folders are the ones to use.

- Change colours and nothing else. Layout, markup, shapes, spacing, shadows, fonts and motion stay exactly as they are, so skip the composition and component steps.
- Change the values of the colour variables, and replace hard-coded colours with them. If the project has no variables, add them first.
- If one variable is used both as a fill and as text, and the new colour is too pale to read as text, split it in two.
- `DESIGN.md` records only the palette, its sources and the project decisions.
- Compare the result with the reference for palette only: are the same colours in the same roles, in similar proportions?
