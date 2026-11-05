---
version: alpha
name: MyLibrary on IBM Carbon
description: "A personal document library dressed as an IBM Carbon surface: white and gray tiles sharing 1px hairlines, a light-weight display headline, square corners everywhere and one assertive blue."

colors:
  canvas: "#ffffff"
  band: "#f4f4f4"
  tile: "#ffffff"
  tile-hover: "#f4f4f4"
  surface-1: "#f4f4f4"
  surface-2: "#e0e0e0"
  field: "#f4f4f4"
  field-in-modal: "#f4f4f4"
  field-rule: "#8d8d8d"
  hairline: "#e0e0e0"
  hairline-strong: "#161616"
  ink: "#161616"
  ink-muted: "#525252"
  ink-subtle: "#6f6f6f"
  primary: "#0f62fe"
  primary-hover: "#0050e6"
  primary-pressed: "#002d9c"
  on-primary: "#ffffff"
  link: "#0f62fe"
  link-hover: "#0043ce"
  tab-line: "#0f62fe"
  focus: "#0f62fe"
  button-secondary: "#161616"
  button-secondary-hover: "#393939"
  button-secondary-pressed: "#6f6f6f"
  error: "#da1e28"
  error-hover: "#b81921"
  error-pressed: "#750e13"
  warning: "#f1c21b"
  success: "#24a148"
  warning-tint: "#fcf4d6"
  warning-ink: "#684e00"
  error-tint: "#fff1f1"
  error-ink: "#a2191f"
  tag: "#f4f4f4"
  tag-on-hover: "#e0e0e0"
  hero-wash: "#edf5ff"
  inverse-canvas: "#161616"
  inverse-ink: "#ffffff"
  inverse-ink-muted: "#c6c6c6"
  inverse-link: "#78a9ff"
  logo: "#000000"

colors-dark:
  canvas: "#161616"
  band: "#161616"
  tile: "#262626"
  tile-hover: "#333333"
  surface-1: "#262626"
  surface-2: "#393939"
  field: "#262626"
  field-in-modal: "#393939"
  field-rule: "#8d8d8d"
  hairline: "#393939"
  hairline-strong: "#f4f4f4"
  ink: "#f4f4f4"
  ink-muted: "#c6c6c6"
  ink-subtle: "#a8a8a8"
  primary: "#0f62fe"
  primary-hover: "#0050e6"
  primary-pressed: "#002d9c"
  on-primary: "#ffffff"
  link: "#78a9ff"
  link-hover: "#a6c8ff"
  tab-line: "#4589ff"
  focus: "#ffffff"
  button-secondary: "#6f6f6f"
  button-secondary-hover: "#5e5e5e"
  button-secondary-pressed: "#393939"
  error: "#da1e28"
  error-hover: "#b81921"
  error-pressed: "#750e13"
  warning: "#f1c21b"
  success: "#42be65"
  warning-tint: "#302400"
  warning-ink: "#fddc69"
  error-tint: "#520408"
  error-ink: "#ffd7d9"
  tag: "#393939"
  tag-on-hover: "#4c4c4c"
  hero-wash: "#0b2149"
  inverse-canvas: "#000000"
  inverse-ink: "#ffffff"
  inverse-ink-muted: "#c6c6c6"
  inverse-link: "#78a9ff"
  logo: "#000000"

colors-slate:
  canvas: "#21272a"
  band: "#21272a"
  tile: "#343a3f"
  tile-hover: "#3f464b"
  surface-1: "#343a3f"
  surface-2: "#4d5358"
  field: "#343a3f"
  field-in-modal: "#42494f"
  field-rule: "#878d96"
  hairline: "#4d5358"
  hairline-strong: "#f2f4f8"
  ink: "#f2f4f8"
  ink-muted: "#c1c7cd"
  ink-subtle: "#b4bac1"
  primary: "#0f62fe"
  primary-hover: "#0050e6"
  primary-pressed: "#002d9c"
  on-primary: "#ffffff"
  link: "#8fb8ff"
  link-hover: "#a6c8ff"
  tab-line: "#4589ff"
  focus: "#ffffff"
  button-secondary: "#697077"
  button-secondary-hover: "#5a6167"
  button-secondary-pressed: "#4d5358"
  error: "#da1e28"
  error-hover: "#b81921"
  error-pressed: "#750e13"
  warning: "#f1c21b"
  success: "#42be65"
  warning-tint: "#302400"
  warning-ink: "#fddc69"
  error-tint: "#520408"
  error-ink: "#ffd7d9"
  tag: "#4d5358"
  tag-on-hover: "#4d5358"
  hero-wash: "#10305f"
  inverse-canvas: "#121619"
  inverse-ink: "#ffffff"
  inverse-ink-muted: "#c1c7cd"
  inverse-link: "#78a9ff"
  logo: "#000000"

typography:
  display:
    fontFamily: IBM Plex Sans
    fontSize: clamp(42px, 4.2vw, 60px)
    fontWeight: 300
    lineHeight: 1.17
    letterSpacing: -0.4px
  display-md:
    fontFamily: IBM Plex Sans
    fontSize: 42px
    fontWeight: 300
    lineHeight: 1.20
  modal-title:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: 300
    lineHeight: 1.33
  subhead:
    fontFamily: IBM Plex Sans
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.40
  body:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0.16px
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.29
    letterSpacing: 0.16px
  body-emphasis:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.29
    letterSpacing: 0.16px
  caption:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0.32px

rounded:
  none: 0px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    height: 48px
    padding: 0 16px
  button-secondary:
    backgroundColor: "{colors.button-secondary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    height: 48px
    padding: 0 16px
  button-danger:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    height: 48px
    padding: 0 16px
  text-input:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: 11px 16px
  tab:
    textColor: "{colors.ink-muted}"
    height: 48px
    padding: 0 16px
  tab-selected:
    textColor: "{colors.ink}"
    typography: "{typography.body-emphasis}"
  document-tile:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: 24px
  add-tile:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    padding: 24px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    height: 48px
  footer:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink-muted}"
    padding: 48px 32px
---

## Overview

MyLibrary is a private second brain: a person keeps documents, finds them by searching their text, and opens them. This design gives that small tool the bearing of an IBM Carbon product. It is engineered rather than decorated: everything sits on a 4px grid, surfaces meet edge to edge, and hierarchy comes from size, weight and a change of surface, never from a shadow or a curve.

## Signature

Each one has to be visible at a glance on every screen.

1. **Square everything.** `border-radius` is 0 on every button, tile, input, menu, tag, swatch, dot, toggle and dialog. There is no exception in the app.
2. **Light display type.** The largest text on each screen is weight 300: 60px on the library, 42px on the empty state, 24px in dialogs.
3. **Hairline tile grid.** Documents are flat tiles meeting on 1px hairlines with no space between them, on a gray band. No shadows, no lift on hover.
4. **One assertive blue.** `#0f62fe` is the only brand colour. It marks the add tile, primary buttons, links, the selected tab and focus. Everything else is white, gray and charcoal.
5. **Carbon construction.** Inputs are gray fields with a bottom rule, tabs have a 2px underline when selected, button labels sit left with the icon right, and dialog actions fill the bottom edge as flush 64px blocks.

## Materials

Every surface is a flat, opaque fill. There is no translucency or blur.

- **Page:** `canvas` for the nav and hero, `band` for the area behind the tiles.
- **Hero:** `linear-gradient(100deg, var(--canvas) 55%, var(--hero-wash))`, the faint blue wash the source documents behind hero art. This is the only gradient.
- **Tile:** `tile` fill with `outline: 1px solid var(--hairline)`, in a grid with `gap: 1px`, so neighbouring outlines land on the same pixel and an incomplete last row leaves no filled gap.
- **Field:** `field` fill, `border-bottom: 1px solid var(--field-rule)`. Focus swaps the rule for an inset 2px `primary` line. Inside dialogs the fill is `field-in-modal`.
- **Floating layers (menus, toasts):** the only shadow in the app, `0 2px 6px rgba(0, 0, 0, 0.3)`. Carbon documents it for elevated product panels.
- **Dialogs:** no shadow and no blur. `rgba(22, 22, 22, 0.5)` backdrop separates them.

## Colors

White, gray and charcoal cover about 95% of the light theme. Blue appears only as listed in the Signature. Red, yellow and green are status only.

Category colours come from the person's data and are never replaced. They appear only as small square swatches next to the category name.

Three themes ship. Light comes from the source. Dark is derived from Carbon's Gray 100 theme and Slate from Carbon's Cool Gray scale, using the same roles. Dark themes need `link` and `tab-line` in lighter blues because `#0f62fe` is too dark as text on dark tiles; filled blue buttons stay `#0f62fe` in all themes.

Contrast changes: in light, `ink-subtle` moved from the source's `#8c8c8c` (3.36:1 on white) to `#6f6f6f` (4.57:1 on `#f4f4f4`). In slate, `ink-subtle` was raised to `#b4bac1` and `field-in-modal` darkened to `#42494f` so placeholders pass, and `tag-on-hover` stays `#4d5358` so tag text passes.

## Typography

Stack: `"IBM Plex Sans", "Segoe UI", system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif`. The app runs locally and loads nothing from the network, so Plex is used only if installed. On Windows the fallback is Segoe UI, which has a real Light cut.

Sizes in use: display 60/300, display-md 42/300, modal-title 24/300, subhead 20/400 (tile titles), body 16/400, body-sm 14/400 (buttons, tabs, tile notes), caption 12/400 (labels, tags, metadata). Body sizes keep their small positive tracking (0.16px, 0.32px on captions). Labels stay in sentence case. Buttons are weight 400. Selected tabs and emphasised lines use 600.

## Layout

- Base unit 4px. The page is full-bleed, with content limited to 1584px by `--gutter: max(32px, (100vw - 1584px) / 2)`, and 16px on phones.
- Page order: 48px nav, hero, tab strip, gray band of tiles, charcoal footer.
- Tile grid: 4 columns from 1056px, 2 from 672px, 1 below.
- The hero uses the same columns: title in the first, search and filters across the other three.
- Dense by design. Fields, tabs and nav items are all 48px tall, so they line up.

## Shapes

0px everywhere. The source's other radii are for surfaces this app does not have, so they are not tokens here.

## Motion

Only colour changes, at `110ms cubic-bezier(0.2, 0, 0.38, 0.9)`, plus the dropdown arrow's rotation. Nothing lifts, scales or slides. `prefers-reduced-motion` removes all of it.

## Components

- **Top nav:** logo as a flush 48px black square at the corner, name beside it, then flush 48px gear and blue "Adicionar" at the right edge. No gaps between them.
- **Buttons:** 14px, weight 400, 48px tall. Label left, icon right, with space between them when the button is wide. Hover and pressed change the fill. Focus is an inset 2px line plus a 1px inner edge. Disabled uses `surface-2` fill and `ink-subtle` text.
- **Tabs (categories):** a full-width strip with a bottom hairline. Selected tab has an inset 2px `tab-line` underline and weight 600. The count is plain muted text. "+ Adicionar Categoria" is a blue text link at the end. "A expirar" carries a 2px yellow underline.
- **Selects:** 48px fields with `appearance: base-select` where supported, opening to a flat square list with `::picker(select)`. Checked option uses `surface-2` and a blue checkmark.
- **Document tile:** swatch and category, type at top right; 20px title; muted notes; square tags; metadata; then icon actions at the bottom left. Actions are 32px squares. Hover changes the tile to `tile-hover`.
- **Add tile:** solid blue, title and hint at top left, large plus at bottom right.
- **Empty state:** left-aligned tile with a 42px light title.
- **Dialogs:** square, 24px light title, a flush 48px close square. The footer is a row of flush 64px buttons with labels at the top left. A lone button takes the right half.
- **Add chooser:** two flush tiles side by side.
- **Document form:** two columns, with category and expiry sharing a row.
- **Toggles:** square track and square knob, blue when on.
- **Toasts:** inverse charcoal block with a 3px left bar, blue or red.
- **Status badges:** tinted square tags, `warning-tint` with `warning-ink`, `error-tint` with `error-ink`.
- **Note in Settings:** `surface-1` block with a 3px blue left bar.
- **Viewer:** wide dialog on `surface-1`, flush header actions.

## Product Map

One screen and its dialogs. The main thing is always finding a document.

| Screen | Main action | Focal point | Composition |
|---|---|---|---|
| Library | Find a document | Hero title and search | Hero, tab strip, full-bleed gray band with tile grid, footer |
| Library, empty or no results | Add a document | 42px title | Wide left-aligned tile on the band |
| Recycle bin | Restore | Tile grid | Same as library, without the add tile |
| Add chooser | Pick what to add | Two tiles | Flush tiles, no padding around them |
| Document form | Save | Title field | Two-column form, flush footer |
| Category form | Save | Name field | Single column, square swatches, flush footer |
| Settings | Choose theme | Rows | Hairline rows, note block, flush footer |
| Viewer | Read | The document | Wide dialog, document fills it |

| Source element | Role here |
|---|---|
| Top nav | `.topo` |
| Hero with light headline | `.heroi`, with the app name as the headline |
| Product tabs | Category chips (`.chip`) |
| Feature card | Document tile (`.cartao-doc`) |
| CTA banner | Add tile (`.cartao-adicionar-novo`) |
| Newsletter input with adjacent button | Search with adjacent filters (`.barra-ferramentas`) |
| Charcoal footer | `.rodape-pagina`, with the logo and name |
| Utility bar, logo marquee, pricing and training sections | No counterpart, dropped |

## Personality

These belong to MyLibrary and stay: the name, the white "L" on a black square (now square-cornered in the app; the favicon is unchanged), all Portuguese wording, and the category colours chosen by the person. The app does not use IBM's name or logo anywhere.

## Do's and Don'ts

- Do keep every radius at 0, including swatches and toggles.
- Do keep tiles flush on hairlines. A gap between tiles makes this a generic card grid.
- Do keep the largest text on a screen at weight 300.
- Do use surface change for hover. Do not translate, scale or add a shadow.
- Don't add a second brand colour, or use a category colour for anything larger than its swatch.
- Don't use all-caps tracked labels. File extensions are the only uppercase, because they are data.
- Don't put a shadow on anything except a floating menu or toast.
- Don't add a font loader or a network request for Plex.
- Don't change `.cor-opcao` size or the swatch row's 8px gap: `capacidadeCoresUsadas()` in `app.js` measures with 28px and 8px.

## Sources

- **Style:** `ibm` from [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) at commit `fcc70284932276d085f01ef9f83edde90b1258cb`. MIT License, Copyright (c) 2026 VoltAgent, [licence](https://github.com/VoltAgent/awesome-design-md/blob/fcc70284932276d085f01ef9f83edde90b1258cb/LICENSE). No screenshots were used.
- **Read from the source file:** light theme colours, type scale, button and field specs, grid breakpoints, the flat-square rules.
- **Adapted:** `ink-subtle` for contrast; `field-rule`, tints and hover values from the public Carbon palette, not from the source file; dialog title weight (the source sets 24px at 400, here 300, so the light signature reaches dialogs).
- **Derived:** the dark and slate themes (the source says it did not extract them), and the flush dialog footer and tab or tile construction for product surfaces, which the source lists as a known gap.
- **Estimated:** nothing was read from pixels.

## Project Decisions

None yet.
