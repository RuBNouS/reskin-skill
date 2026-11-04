# DESIGN.md format

The format comes from Google Stitch and is the one used by the awesome-design-md collection: YAML tokens on top, written rules below. Other tools can read the file because it stays plain Markdown.

The tokens say what values to use. The sections below them are what let another conversation produce the same look, so write them for someone who has never seen the reference.

```markdown
---
version: alpha
name: <project or style name>
description: "<one sentence on the look>"

colors:
  primary: "#5e6ad2"
  on-primary: "#ffffff"
  canvas: "#010102"
  surface-1: "rgba(255, 255, 255, 0.05)"
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
What it feels like and the idea that holds it together.

## Signature
The 3 to 5 traits that make it recognisable, each one something you could point at. Every screen must show them at a glance.

## Materials
How each surface is built, with real CSS values: background, translucency, blur, gradients, inner edges, shadows, and what has to sit behind it for the effect to work.

## Colors
What each colour is for, and how much of the screen carries colour.

## Typography
Families with fallbacks, the scale, and how weight and tracking change with size.

## Layout
Spacing rhythm, widths, density, and how screens are composed.

## Shapes
Which corner radius goes where.

## Motion
What moves, how fast, and with what easing. Say so if nothing should.

## Components
The rules a token cannot express: how each part is made and its states, such as hover, focus, pressed and disabled.

## Product Map
What this app is: its screens, and for each one the main action, the focal point and how it is composed. Then which part of the reference plays which role here.

## Personality
What belongs to the project and stays: name, logo, a font chosen on purpose, and the hues of colours with meaning, which still wear the material.

## Do's and Don'ts
Concrete rules that keep the look from drifting, including the mistakes that would make it look like a recolour.

## Sources
Where the look came from, and how far each value can be trusted.

## Project Decisions
Things the person chose. These outrank everything above and survive every regeneration.
```

## Rules

- Name tokens by role, never by colour: `surface-1`, not `dark-gray`.
- Use only the sections that have something to say, but always keep `Signature`, `Product Map`, `Sources` and `Project Decisions`.
- A token for a layered surface holds the real layered value, such as `rgba(...)`, never the colour it happens to produce on screen.
- `Sources` lists each screenshot or style, then what is **measured** (read from pixels or from the source file) and what is **estimated** (read by eye). Pin a downloaded style to its commit.
- If the project ships several themes, give each its own colour block using the same role names, for example `colors-light`, and say which came from the source and which were derived.
- Write rules someone could check. "Cards use 1px hairline borders and no shadow" is a rule. "Clean and modern" is not.
