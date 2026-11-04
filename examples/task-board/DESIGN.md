---
version: alpha
name: Focus
description: "Dark glass: translucent panels floating over soft violet and teal light."

colors:
  canvas: "#0b0d12"
  surface-glass: "linear-gradient(145deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03))"
  surface-row: "rgba(255, 255, 255, 0.05)"
  edge: "rgba(255, 255, 255, 0.14)"
  ink: "#f2f4f8"
  ink-muted: "#aab1c0"
  accent-start: "#8b7cff"
  accent-end: "#3fd6c4"

typography:
  headline:
    fontFamily: Inter, "Segoe UI", system-ui, sans-serif
    fontSize: 26px
    fontWeight: 650
    letterSpacing: -0.02em
  body:
    fontFamily: Inter, "Segoe UI", system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400

rounded:
  panel: 22px
  row: 16px
  control: 12px

spacing:
  gap: 20px
  panel-padding: 28px
---

## Overview
Everything sits on glass. The page behind it is dark with two coloured lights, and the glass picks that light up.

## Signature
- Panels are see-through glass with a bright top edge, not flat cards.
- Two soft lights (violet top left, teal bottom right) glow behind the panels.
- The one accent is a violet to teal gradient, used only for the main action, the counter and done marks.
- The screen is two panels: a narrow rail and a wide stage. The input is the largest element on the stage.

## Materials
- Panel: `background: var(--surface-glass)`, `backdrop-filter: blur(22px) saturate(140%)`, 1px `edge` border, `inset 0 1px 0 rgba(255,255,255,0.18)`, `0 24px 60px rgba(0,0,0,0.35)`.
- Row: `surface-row` with a 1px `rgba(255,255,255,0.1)` border and no blur, because it sits inside a blurred panel.

## Layout
Two columns: 240px rail, flexible stage, 20px gap, 980px maximum width. Below 720px the rail stacks above the stage.

## Components
- Filters live in the rail as a vertical list. The active one gets a lighter fill and an `edge` border.
- Done marks are a filled gradient circle with a teal glow. Open marks are an empty 1.5px circle.
- Rows lift 1px on hover.

## Product Map
- **Single screen, three states** (all, open, done). Main action: add a task. Focal point: the input. Secondary: the list. Status: the "left" counter, which becomes the large gradient number in the rail.
- Reference role mapping: segmented control becomes the filter list, hero search becomes the input.

## Personality
Keeps the name "Focus", its wording, and the green meaning of "done", now expressed as the teal end of the gradient.

## Sources
Illustrative example written for this repository, not measured from a screenshot. All values are estimated.

## Project Decisions
None yet.
