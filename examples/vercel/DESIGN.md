---
version: alpha
name: MyLibrary (Vercel style)
description: "Stark ink on near-white, hairline-ringed cards, a mono technical layer, and one multi-colour mesh gradient at the top of the page as the only decoration."

colors:
  primary: "#171717"
  on-primary: "#ffffff"
  primary-hover: "#383838"
  canvas: "#fafafa"
  surface: "#ffffff"
  surface-hover: "#f5f5f5"
  ink: "#171717"
  ink-secondary: "#4d4d4d"
  ink-muted: "#6b6b6b"
  hairline: "#ebebeb"
  hairline-strong: "#a1a1a1"
  ring: "rgba(0, 0, 0, 0.08)"
  focus: "#0070f3"
  focus-soft: "#d3e5ff"
  danger: "#c50000"
  danger-soft: "#f7d4d6"
  danger-band: "#c50000"
  warning-text: "#ab570a"
  warning-soft: "#ffefcf"
  match-text: "#0761d1"
  match-soft: "#eef5ff"
  backdrop: "rgba(0, 0, 0, 0.4)"
  mesh-1: "#00dfd8"
  mesh-2: "#007cf0"
  mesh-3: "#7928ca"
  mesh-4: "#ff0080"
  mesh-5: "#ff4d4d"
  mesh-6: "#f9cb28"

colors-dark:
  primary: "#ededed"
  on-primary: "#0a0a0a"
  primary-hover: "#ffffff"
  canvas: "#000000"
  surface: "#0a0a0a"
  surface-hover: "#1a1a1a"
  ink: "#ededed"
  ink-secondary: "#a1a1a1"
  ink-muted: "#8f8f8f"
  hairline: "#2e2e2e"
  hairline-strong: "#707070"
  ring: "rgba(255, 255, 255, 0.14)"
  focus: "#3291ff"
  danger: "#ff6166"
  warning-text: "#f5a623"
  match-text: "#a8cfff"
  backdrop: "rgba(0, 0, 0, 0.72)"

colors-slate:
  primary: "#f1f5f9"
  on-primary: "#0f172a"
  canvas: "#0f172a"
  surface: "#1e293b"
  surface-hover: "#273449"
  ink: "#f1f5f9"
  ink-secondary: "#cbd5e1"
  ink-muted: "#94a3b8"
  hairline: "#334155"
  hairline-strong: "#64748b"
  ring: "rgba(255, 255, 255, 0.12)"
  focus: "#60a5fa"
  danger: "#fca5a5"
  warning-text: "#fbbf24"
  match-text: "#bfdbfe"
  backdrop: "rgba(2, 6, 23, 0.7)"

typography:
  display-xl:
    fontFamily: Geist, Inter, "Segoe UI Variable Text", "Segoe UI", system-ui, sans-serif
    fontSize: 48px
    fontWeight: 600
    lineHeight: 48px
    letterSpacing: -2.4px
  display-md:
    fontFamily: Geist, Inter, "Segoe UI Variable Text", "Segoe UI", system-ui, sans-serif
    fontSize: 24px
    fontWeight: 600
    lineHeight: 32px
    letterSpacing: -0.96px
  display-sm:
    fontFamily: Geist, Inter, "Segoe UI Variable Text", "Segoe UI", system-ui, sans-serif
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: -0.6px
  body-md:
    fontFamily: Geist, Inter, "Segoe UI Variable Text", "Segoe UI", system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: Geist, Inter, "Segoe UI Variable Text", "Segoe UI", system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: -0.28px
  button:
    fontFamily: Geist, Inter, "Segoe UI Variable Text", "Segoe UI", system-ui, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  caption-mono:
    fontFamily: '"Geist Mono", "Cascadia Mono", Consolas, ui-monospace, monospace'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  3xl: 48px
  4xl: 64px

components:
  nav-bar:
    backgroundColor: "{colors.surface}"
    height: 64px
    padding: "0 {spacing.lg}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    height: 32px
    padding: "0 {spacing.sm}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    shadow: "inset 0 0 0 1px {colors.ring}"
  icon-button:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.full}"
    size: 32px
  search-input:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    height: 48px
    typography: "{typography.body-md}"
  form-input:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.sm}"
    height: 40px
    typography: "{typography.body-sm}"
  sidebar-row:
    rounded: "{rounded.sm}"
    height: 36px
    activeIndicator: "inset 2px 0 0 {colors.primary}"
  document-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  add-card:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  modal:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    footerBackground: "{colors.canvas}"
  toast:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
---

## Overview

MyLibrary is a personal document library ("second brain") that runs locally on Windows: you drop files in, give them a title, category, tags and an optional expiry date, and find them again by searching their text. The look follows Vercel's design language: near-white canvas, ink text, a grey ladder for every border and state, and colour only where it means something. The single decorative moment is a soft multi-colour mesh gradient behind the top of the page, where the product name sits large in a tightly tracked geometric sans above a command bar.

## Signature

1. **One mesh gradient, at the top only.** Cyan, blue, violet, magenta, coral and amber blur together behind the product name, fade to the canvas, and appear nowhere else.
2. **Ink is the action colour.** The primary button and the "Adicionar Documento" card are solid ink (`#171717`) with white text. In dark themes the polarity flips to a light fill with dark text. There is no brand hue.
3. **Hairline rings instead of borders and heavy shadows.** Cards, inputs, menus and dialogs are held by a 1px inset ring plus small stacked shadows. Nothing floats on a single big drop shadow.
4. **A mono technical layer.** Field labels, counts, file types, dates, sizes, tags and hints are set in the monospace face at 12px. Everything narrative stays in the sans.
5. **Tight negative tracking at weight 600.** The product name, card titles, dialog titles and empty-state titles use the display scale with negative letter-spacing, never heavier than 600.

## Materials

- **Page:** flat `canvas` (`#fafafa` / `#000` / `#0f172a`). No texture.
- **Top band (`.heroi`):** `surface` fill, 1px hairline at the bottom. Behind it, `.heroi-malha` is six radial gradients using the mesh stops in that order, `filter: blur(24px)`, `opacity: 0.5` (light) or `0.42` (dark and slate), and `mask-image: linear-gradient(to bottom, #000 25%, transparent 90%)` so it melts into the band. Text sits on top with no backing.
- **Cards and panels:** solid `surface`. Shadow `--shadow-sm` = `inset 0 0 0 1px ring, 0 1px 1px rgba(0,0,0,.02), 0 2px 2px rgba(0,0,0,.04)`. Hover raises to `--shadow-md` and adds an inset ring in `hairline-strong`.
- **Dialogs, menus, open lists, toasts:** `--shadow-lg` = ring + `0 8px 16px -4px` + `0 24px 32px -8px`, with low opacity. The backdrop is a flat dim (`backdrop`), with no blur.
- **Polarity-flipped surfaces:** the add card and the settings note use `primary` as the fill and `on-primary` for text. The settings note's heading is mono.
- **Inputs:** `surface` fill, 1px `hairline` border, which turns `hairline-strong` on hover or focus, plus a 4px `focus-soft` halo on focus.

## Colors

The screen is almost all grey. Colour appears only for:
- **Category colours from the user's data** (dot in the sidebar and dropdown, tinted pill on the card). Their hue is kept exactly. The pill uses the app's inline tint (`cor + 1f` background, text mixed 55% with ink) plus a 6px dot of the raw colour.
- **Status:** expiring uses `warning-text` on `warning-soft`, expired and destructive actions use `danger` on `danger-soft`, the disconnection banner uses `danger-band` with white text.
- **Search matches:** `match-text` on `match-soft`, with the matched word on `warning-soft`.
- **Focus:** a 2px `focus` outline (Vercel's link blue).
- **The mesh gradient.**

## Typography

- Sans: `Geist, Inter, "Segoe UI Variable Text", "Segoe UI", system-ui`. The app runs locally, so no web font is loaded, and on Windows it renders in Segoe UI Variable.
- Mono: `"Geist Mono", "Cascadia Mono", Consolas, ui-monospace`.
- Scale: product name 48/48 −2.4px (32/40 −1.28px below 600px); dialog and card titles 20/28 −0.6px; empty-state title 24/32 −0.96px; body 14/20 −0.28px; search 16/24; mono captions 12/16 with no tracking.
- Weights: 400 body, 500 buttons and active rows, 600 display. Never 700 or heavier.
- Uppercase only on the mono file-type label.

## Layout

- 4px base. Gaps of 8, 12, 16, 24 and 32px only.
- Nav: 64px, logo left, settings icon button and the ink "Adicionar" button right, content max 1400px.
- Top band: 64px top and 48px bottom padding, name centred, then the command bar (max 880px): the 48px search input, then the type filter and the sort, each 48px high.
- Below: a 1448px-wide panel with a 224px sticky category sidebar and a card grid (`repeat(auto-fill, minmax(280px, 1fr))`, 16px gap).
- Narrow (≤960px): the sidebar becomes a horizontal, drag-scrollable row of pills above the grid. At ≤760px the filters drop under the search. At ≤600px gutters are 16px, the name is 32px, and the dialogs and the document form go single-column.

## Shapes

- 6px: buttons, inputs, selects, sidebar rows, search box.
- 8px: cards, the add card, dropdown and select menus, drop zone, toasts.
- 12px: dialogs, empty state.
- Full: icon buttons, category pills, colour swatches, narrow-width category pills, validity badges.

## Motion

Only 150ms ease transitions on colour, background, shadow and arrow rotation. Nothing moves on hover, and there are no lifts or scale-ups. `prefers-reduced-motion` turns all transitions off.

## Components

- **Primary button:** ink fill, white label 14/500, 32px high (40px in dialog footers), 6px radius. Hover `primary-hover`, pressed opacity 0.85, disabled opacity 0.5.
- **Secondary button:** surface fill with ring, hover `surface-hover`.
- **Danger button:** `danger` text on `danger-soft`, hover solid `danger-band` with white text.
- **Icon button:** 32px circle, ring, 16px icon in ink.
- **Sidebar row (`.chip`):** 36px, label left, mono count pushed right. Hover `surface-hover`. Active: surface card with ring and a 2px ink bar on the left edge, weight 500. When the active row is a category it also shows a pencil to edit it.
- **Document card:** the category pill and the mono type at the top, the title (display-sm), up to 2 lines of notes, then mono tags or a validity badge, and at the bottom the mono date and size plus four 28px ghost icon actions. Image documents show a 16:9 thumbnail at the top of the body.
- **Add card:** first cell of the grid, polarity-flipped, with a white circle and an ink plus at the top, and the title and mono hint at the bottom. It is hidden in the recycle bin.
- **Open lists:** `appearance: base-select` inside `@supports`. The picker is a surface menu with `--shadow-lg`, 4px padding and 4px-radius rows, and the checked row is ink and 500. The arrow is a thin chevron that rotates on open. Browsers without support fall back to the native list in the right colour scheme.
- **Category dropdown:** same menu material. Max-height 184px so it fits inside the document form without scrolling the form.
- **Dialogs:** 20px title in a header with a hairline divider, 24px body, and a footer on `canvas` with a hairline. The "add" choice is two cards side by side. The document form is two columns, with category and validity sharing a row.
- **Toggle:** 36×20, off `hairline-strong`, on `primary` with an `on-primary` knob.
- **Toast:** surface with `--shadow-lg`. An error tints the toast and colours its text with `danger`. The action is a small ink button.
- **Empty state:** surface panel with a ring, 48px circle icon, a display-md title and the existing actions.

## Product Map

| Screen / state | Main action | Focal point | Composition |
|---|---|---|---|
| Library | Find a document | The command bar under the large name | Nav, then the top band with the mesh, the name and the search, type and sort, then the sidebar and the grid |
| Category selected | Browse or edit that category | Active sidebar row with edit pencil | Same, with the add card defaulting to that category |
| Search results | Open the match | Card with the "Encontrado no documento" excerpt | Same grid |
| Recycle bin | Restore | Restore action on each card | Grid without the add card |
| Empty or no results | Add or change filters | Empty-state title | Panel in the grid area |
| Add choice | Pick document or category | Two choice cards | 2-up grid in the dialog |
| Add / edit document | Save | Drop zone or current file, then the title | Two-column form, footer with Cancelar and Guardar |
| New / edit category | Save | Name field | Name, 12 swatches, then the custom and recent colours row |
| Settings | Pick a theme | Theme select | Hairline-separated rows, then the polarity-flipped note |
| Viewer | Read the file | The file | Large dialog, iframe or image on `canvas` |
| Window drag | Drop files | Centre card | Dimmed page and a floating surface card |

How the reference maps onto the app: the reference's hero becomes the top band with the search; its nav CTA becomes "Adicionar"; the "app shell" sidebar row becomes the categories; template cards become document cards; the polarity-flipped pricing card becomes the add card; the code-editor mockup becomes the settings note; mono eyebrows become field labels and metadata.

## Personality

Stays from the project: the name "MyLibrary", the black square "L" logo (also the favicon), the Portuguese wording, and the twelve category swatch colours plus any colours the user picked. The previous accent sky blue and the indigo gradients are gone.

## Do's and Don'ts

Do:
- Keep the mesh only in `.heroi`, full width, with all six stops in order.
- Use ink for the single primary action on each surface.
- Put every number, date, size, count, file type, tag and field label in mono 12px.
- Use rings and stacked low-opacity shadows for depth.
- Keep sizes on the 4px grid and corner radii on the scale above.

Don't:
- Don't add a brand hue or colour any chrome. Accent, buttons and active states are ink.
- Don't add coloured left borders, gradients on buttons or headings, glows or `translateY` hover lifts. These were the old look.
- Don't use font weight 700 or heavier, positive tracking or uppercase sans.
- Don't use pill-shaped (100px) buttons. This is the in-app scale, with 6px buttons.
- Don't put the mesh behind cards, dialogs or the sidebar.

## Sources

- Base style: `design-md/vercel/DESIGN.md` from [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md/tree/fcc70284932276d085f01ef9f83edde90b1258cb/design-md/vercel) at commit `fcc70284932276d085f01ef9f83edde90b1258cb`. MIT License, Copyright (c) 2026 VoltAgent ([licence](https://github.com/VoltAgent/awesome-design-md/blob/fcc70284932276d085f01ef9f83edde90b1258cb/LICENSE)).
- **Measured** (taken from the source file's tokens): light ink, greys, hairlines, link and focus blue, error, warning and their soft variants, mesh gradient stops, radii, spacing, type scale, stacked shadow recipes.
- **Changed for contrast:** `ink-muted` moved from `#888888` (3.5:1 on white) to `#6b6b6b` (5.1:1 on canvas, 4.9:1 on `surface-hover`). Light `danger` text uses the source's `error-deep` `#c50000` (6.2:1 on white) instead of `#ee0000`.
- **Estimated / derived:** `primary-hover` `#383838`; the whole dark theme (from Vercel's own dark product palette, by eye); the slate theme (keeps the project's existing slate canvas and applies this material and the ink-as-action rule to it); mesh blur, opacity and mask values; `match-soft`.
- Dropped from the source as marketing-only: pricing cards, logo strip, footer, 100px pill CTAs and the editorial `Space Grotesk` face. The source also carries a note for its own generator ("resolve `TO_FILL` markers"), which is not part of the look and was ignored.

## Project Decisions

- No web fonts: the app runs locally, so the system fonts in the stacks above are used.
- All three shipped themes (light, dark, slate) and "Automático (Windows)" stay. Light follows the source, and dark and slate are derived.
