---
version: alpha
name: TaskFlow
description: "Dark glass: translucent panels floating over soft violet and teal light, one gradient accent, category hues as tinted glass."

colors:
  canvas: "#0a0c11"
  light-violet: "rgba(139, 124, 255, 0.42)"
  light-teal: "rgba(63, 214, 196, 0.30)"
  surface-glass: "linear-gradient(145deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.03))"
  surface-row: "rgba(255, 255, 255, 0.05)"
  surface-field: "rgba(0, 0, 0, 0.28)"
  edge: "rgba(255, 255, 255, 0.14)"
  ink: "#f2f4f8"
  ink-muted: "#aab1c0"
  accent-start: "#8b7cff"
  accent-end: "#3fd6c4"
  on-accent: "#0a0c11"
  hue-work: "#6cb4ff"
  hue-personal: "#5fe0a0"
  hue-health: "#ff7fb0"
  hue-study: "#b69cff"
  hue-ideas: "#ffc15e"
  hue-urgent: "#ff7b72"
  hue-low: "#5fe0a0"
  hue-medium: "#ffc15e"
  hue-high: "#ff7b72"

typography:
  headline:
    fontFamily: Inter, "Segoe UI", system-ui, sans-serif
    fontSize: 26px
    fontWeight: 650
    letterSpacing: -0.02em
  stat:
    fontFamily: Inter, "Segoe UI", system-ui, sans-serif
    fontSize: 34px
    fontWeight: 650
    letterSpacing: -0.03em
  body:
    fontFamily: Inter, "Segoe UI", system-ui, sans-serif
    fontSize: 15px
    fontWeight: 450
  label:
    fontSize: 11px
    fontWeight: 600
    letterSpacing: 0.06em

rounded:
  panel: 22px
  row: 16px
  control: 12px
  chip: 999px

spacing:
  gap: 20px
  panel-padding: 26px
---

## Overview
Everything sits on glass. The page behind it is dark with two coloured lights, and the glass picks that light up. The app stays calm: colour is rare, so the few places that have it are read first.

## Signature
- Panels are see-through glass with a bright top edge, not flat cards.
- Two soft lights (violet top left, teal bottom right) glow behind the panels.
- One accent, a violet to teal gradient, used only for the main action, the progress fill, the active count and done marks.
- Categories (tags, priorities) keep their hues but as tinted glass: a translucent fill, a hairline of the hue and hue-coloured text. Never a solid colour block.
- Two panels: a narrow rail with the overview and filters, and a wide stage with the work.

## Materials
- Panel: `background: var(--surface-glass)`, `backdrop-filter: blur(22px) saturate(140%)`, 1px `edge` border, `inset 0 1px 0 rgba(255,255,255,0.18)`, `0 24px 60px rgba(0,0,0,0.35)`.
- Row and tile: `surface-row` with a 1px `rgba(255,255,255,0.1)` border and no blur, because they sit inside a blurred panel.
- Field: `surface-field`, 1px `edge` border.
- Tinted chip: `color-mix(in srgb, <hue> 16%, transparent)` fill, `color-mix(in srgb, <hue> 40%, transparent)` border, text in the hue.

## Colors
`ink` for text, `ink-muted` for secondary. The accent gradient is the only saturated fill. Hues appear only inside tinted chips, the overdue date and the Overdue count.

## Typography
System stack with Inter first. Brand 26px/650, stats 34px/650 with -0.03em tracking, body 15px, chip labels 11px uppercase with 0.06em tracking.

## Layout
Two columns: 288px rail, flexible stage, 20px gap, 1120px maximum width, 24px page padding. Below 760px the rail stacks above the stage. Stage order: add form, search and sort, list.

## Shapes
Panels 22px, rows 16px, controls 12px, chips and the progress bar fully round.

## Motion
Rows lift 1px on hover over 150ms. The progress fill animates its width over 400ms. All of it stops under `prefers-reduced-motion`.

## Components
- Status filters live in the rail as a vertical list. The active one gets a lighter fill and an `edge` border.
- Tag filters are tinted chips; inactive ones are dimmed, the active one is full strength with a ring.
- Check: empty 1.5px circle, and a gradient circle with a teal glow when done.
- Delete is a ghost cross, visible on row hover and keyboard focus, always visible on touch.
- Stats are four glass tiles in the rail; Active uses the gradient, Overdue uses `hue-urgent`.
- Primary button is the gradient with `on-accent` text. Clear completed is a ghost button.
- Selects and the date field follow the field material, and the open select list is styled with `appearance: base-select`.

## Product Map
- **Single screen, one list.** Main action: add a task. Focal point: the title field, then the list. Secondary: filters and search. Status: the four counts and the progress bar, moved to the rail.
- Old banner and four gradient stat tiles become the rail's brand block and glass tiles. Old filter pills become the rail list. The old coloured left stripe on rows is gone: priority lives in its badge.

## Personality
Keeps the name "TaskFlow", its tagline and every label. Tag and priority hues stay (work blue, personal green, health pink, study purple, ideas amber, urgent red, and low green, medium amber, high red) and wear the glass.

## Do's and Don'ts
- Do put every colour block through the tinted chip recipe. Don't use solid saturated fills except the accent gradient.
- Don't put `backdrop-filter` on anything inside a panel.
- Don't bring back stripes, gradient tiles or a coloured banner: that is the old look.

## Sources
Described look, no screenshots: "dark glass, translucent panels over soft violet and teal light". All values are estimated, none measured.

## Project Decisions
None yet.
