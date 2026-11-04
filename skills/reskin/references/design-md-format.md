# DESIGN.md format

The format comes from Google Stitch and is the one used by the awesome-design-md collection: YAML tokens on top, written rules below. Other tools can read the file because it stays plain Markdown.

```markdown
---
version: alpha
name: <project or style name>
description: "<one sentence on the look>"

colors:
  primary: "#5e6ad2"
  on-primary: "#ffffff"
  canvas: "#010102"
  surface-1: "#0f1011"
  ink: "#f7f8f8"
  ink-muted: "#d0d6e0"
  hairline: "#23252a"

typography:
  headline:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: -0.6px
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50

rounded:
  md: 8px
  lg: 12px

spacing:
  sm: 8px
  md: 16px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 8px 16px
---

## Overview
What it feels like and the three or four ideas that hold it together.

## Colors
What each colour is for, and how much of the screen carries colour.

## Typography
Families with fallbacks, the scale, and how weight and tracking change with size.

## Layout
Spacing rhythm, widths and density.

## Elevation & Depth
What separates surfaces: borders, shadows or steps of colour.

## Shapes
Which corner radius goes where.

## Components
The rules a token cannot express: states, hover, focus, disabled.

## Do's and Don'ts
Concrete rules that keep the look from drifting.

## Sources
Where the look came from, and how far each value can be trusted.

## Project Decisions
Things the person chose. These outrank everything above and survive every regeneration.
```

## Rules

- Name tokens by role, never by colour: `surface-1`, not `dark-gray`.
- Use only the sections that have something to say, but always keep `Sources` and `Project Decisions`.
- `Sources` lists each screenshot or style, then what is **measured** (read from pixels or from the source file) and what is **estimated** (read by eye). Pin a downloaded style to its commit.
- If the project ships several themes, give each its own colour block using the same role names, for example `colors-light`, and say which came from the source and which were derived.
- Write rules someone could check. "Cards use 1px hairline borders and no shadow" is a rule. "Clean and modern" is not.
