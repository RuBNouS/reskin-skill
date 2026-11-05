---
version: alpha
name: MyLibrary (Notion)
description: "A warm white workspace card with a deep shadow breaks out of a navy hero band scattered with sticky notes; documents are pastel tiles tinted by their category."

colors:
  primary: "#5645d4"
  primary-pressed: "#4534b3"
  primary-deep: "#3a2a99"
  on-primary: "#ffffff"
  hero: "#0a1530"
  on-hero: "#ffffff"
  on-hero-muted: "#a4a097"
  hero-focus: "#d6b6f6"
  link: "#0075de"
  canvas: "#ffffff"
  panel: "#ffffff"
  surface: "#f6f5f4"
  surface-soft: "#fafaf9"
  hairline: "#e5e3df"
  hairline-soft: "#ede9e4"
  hairline-strong: "#c8c4be"
  ink: "#1a1a1a"
  charcoal: "#37352f"
  slate: "#5d5b54"
  steel: "#787671"
  warning: "#dd5b00"
  warning-text: "#b84c00"
  warning-deep: "#793400"
  error: "#d32a2a"
  error-deep: "#8f1d1d"
  tint-yellow-bold: "#f9e79f"
  tint-peach: "#ffe8d4"
  tint-rose: "#fde0ec"
  tint-mint: "#d9f3e1"
  tint-sky: "#dcecfa"
  tint-cream: "#f8f5e8"

colors-dark:
  primary: "#6a5ae0"
  primary-pressed: "#5645d4"
  primary-deep: "#4534b3"
  on-primary: "#ffffff"
  hero: "#0a1530"
  on-hero: "#ffffff"
  on-hero-muted: "#a4a097"
  hero-focus: "#d6b6f6"
  link: "#5aa9f5"
  canvas: "#191919"
  panel: "#202020"
  surface: "#2a2a2a"
  surface-soft: "#242424"
  hairline: "#353535"
  hairline-soft: "#2e2e2e"
  hairline-strong: "#555552"
  ink: "#f4f3f1"
  charcoal: "#e6e4e0"
  slate: "#bdbbb5"
  steel: "#a09e98"
  warning: "#f08a3c"
  warning-text: "#f08a3c"
  warning-deep: "#ffc99e"
  error: "#ff7b7b"
  error-deep: "#ffc2c2"
  tint-yellow-bold: "#4a3f12"
  tint-peach: "#40291a"
  tint-rose: "#42202f"
  tint-mint: "#1c3a26"
  tint-sky: "#1b3248"
  tint-cream: "#322e20"

colors-slate:
  primary: "#6a5ae0"
  primary-pressed: "#5645d4"
  primary-deep: "#4534b3"
  on-primary: "#ffffff"
  hero: "#070f24"
  on-hero: "#ffffff"
  on-hero-muted: "#a4a097"
  hero-focus: "#d6b6f6"
  link: "#6db3f7"
  canvas: "#0f1a36"
  panel: "#16244a"
  surface: "#1f2f5a"
  surface-soft: "#1a2a52"
  hairline: "#2c3d6b"
  hairline-soft: "#26365f"
  hairline-strong: "#4a5c8c"
  ink: "#f4f6fb"
  charcoal: "#e3e7f2"
  slate: "#bcc5da"
  steel: "#a0abc6"
  warning: "#f59a52"
  warning-text: "#f59a52"
  warning-deep: "#ffd0ab"
  error: "#ff8585"
  error-deep: "#ffc9c9"
  tint-yellow-bold: "#4d4422"
  tint-peach: "#44322f"
  tint-rose: "#45294a"
  tint-mint: "#1f4250"
  tint-sky: "#1f3f6b"
  tint-cream: "#33364a"

typography:
  hero-display:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -2px
  heading-3:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.25
  heading-5:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.40
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
  button-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.30
  caption-bold:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.40
  micro:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.40

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.md}"
    padding: 10px 18px
    border: "1px solid {colors.hairline-strong}"
  text-input:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 44px
    border: "1px solid {colors.hairline-strong}"
  segmented-tab-active:
    textColor: "{colors.ink}"
    border: "0 0 2px {colors.ink} solid"
  workspace-card:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.lg}"
    border: "1px solid {colors.hairline}"
    shadow: "rgba(15, 15, 15, 0.20) 0px 24px 48px -8px"
---

## Overview

The Notion homepage's composition applied to a personal document library. A deep navy band holds the name of the app and the search, with sticky notes and wires scattered around them. A white workspace card breaks out of that band with a deep shadow, the way Notion shows its product in the hero, and that card is the library itself: tabs along its top edge, a bold yellow banner, then a gallery of pastel tiles.

Sober rectangles and warm neutrals keep it editorial. All the colour comes from the brand spectrum and the person's own categories.

## Signature

1. A deep navy hero band, in every theme, with scattered sticky notes and mesh wires around a large centred `MyLibrary`.
2. A workspace card that overlaps the band by 96px, 12px corners, hairline border, shadow `rgba(15, 15, 15, 0.20) 0px 24px 48px -8px`.
3. Pastel document tiles: each tile is tinted with its own category colour and has no border, like database properties in the product.
4. A bold yellow banner (`tint-yellow-bold`) for the one high-emphasis item in the gallery: adding a document.
5. A single purple 8px rectangle as the dominant action, on warm charcoal text. Nothing else is purple except focus.

## Materials

- **Page:** flat `canvas`. No gradients anywhere.
- **Hero band:** flat `hero`. Decoration sits behind the content, in an `aria-hidden` layer: rotated rounded squares in the brand spectrum and 1.5px wires at `rgba(255, 255, 255, 0.16)`.
- **Workspace card and modals:** flat `panel` with a 1px `hairline` border. Card shadow as above; modals and menus use `rgba(15, 15, 15, 0.16) 0px 16px 48px -8px`.
- **Document tile:** `color-mix(in srgb, var(--cor-categoria, var(--tinta-neutra)) var(--forca-tinta), var(--panel))`, with `--forca-tinta` 16% in light and 24% in dark and slate. Category tags use the same colour at `--forca-etiqueta` (28% and 44%), with text at `--cor-texto-etiqueta` (40% and 28% of the colour, the rest `ink`). No border, no resting shadow. Hover adds `rgba(15, 15, 15, 0.08) 0px 4px 12px 0px`.
- **Pieces inside a tile:** translucent ink, never a solid fill: `color-mix(in srgb, var(--ink) 7%, transparent)`.
- **Modal backdrop:** `rgba(10, 21, 48, 0.55)`, no blur.

## Colors

- `primary` is for `btn-primario` and focus rings only, never for text or large surfaces.
- `link` is for active switches. Text actions on navy, such as the toast action, use `hero-focus`.
- `tint-*` are for feature tiles and callouts. Category colours come from the person's data and only ever appear as a dot, a tint or a tag.
- Under 10% of the screen carries saturated colour. Everything else is neutral, tinted or navy.

## Typography

System fonts, since this is a local app: `Inter, -apple-system, system-ui, "Segoe UI", Helvetica, sans-serif`, which is the source's fallback chain for its custom typeface.

- Hero title 72px/600/-2px, scaling down to 44px on a phone.
- Headlines and tile titles weigh 600; buttons and tabs 500; body 400.
- Tile title 16px, modal titles 18px, body and fields 14px to 16px, badges 12px to 13px.

## Layout

- Rhythm of 4px, mostly 8px increments.
- Top bar: sticky, 64px, `panel`, hairline below. Logo on the left, actions on the right.
- Workspace card: at most 1280px wide with 32px page gutters (12px on a phone).
- Gallery: `repeat(auto-fill, minmax(260px, 1fr))` with a 16px gap. The yellow banner spans the whole row.

## Shapes

- 4px: small tags.
- 6px: type badges, swatches, menu items, icon buttons.
- 8px: buttons, inputs, selects, menus.
- 12px: the workspace card, tiles, banner and modals.
- Pills are not used.

## Motion

Only colour, shadow and transform on hover, at 150ms ease. No page or list animation. `prefers-reduced-motion` turns transitions off.

## Components

- **Buttons:** primary as in the tokens, darkens to `primary-pressed` on hover and `primary-deep` when pressed. Secondary is outlined and fills with `surface` on hover. Danger is outlined text in `error`, tinted `tint-rose` on hover. Disabled is 45% opacity.
- **Search:** 52px field on the band, `panel` background, focus ring in `hero-focus` because purple cannot be seen on navy.
- **Category tabs:** segmented tabs with a 2px `ink` underline when active. The count is plain `steel` text. The "+" tab has no border. "A expirar" uses `warning-text`, with `warning` for its underline.
- **Filters:** 36px selects at the right end of the tab row, with an open list styled through `appearance: base-select`.
- **Document tile:** title, notes, tags, then the category and type, then a thin divider with the date and icon actions. Thumbnails sit at the top with 8px corners.
- **Add banner:** a horizontal row in `tint-yellow-bold`: 40px dark square with a plus, title, hint at the far end.
- **Empty state:** a `surface` banner with no dashes, a 28px headline and centred actions.
- **Add chooser:** two tiles side by side, `tint-sky` for a document and `tint-mint` for a category.
- **Document form:** two columns. File on the left, title, category and date on the right, description and tags across the bottom.
- **Settings:** rows in one hairline table, then a `tint-cream` note.
- **Toasts:** `hero` navy with white text. Errors use `tint-rose` with an `error` border.
- **Connection warning:** a `tint-rose` strip above the top bar.

## Product Map

MyLibrary is a personal "second brain": it stores documents, reads their text, and finds them again. The interface is in Portuguese.

| Screen | Main action | Focal point | Composition |
|---|---|---|---|
| Library | Find a document | Search field on the band | Band, then workspace card with tabs and filters in one row, banner, gallery |
| Library, empty | Add the first document | Empty banner | Same frame, banner inside the card |
| Add chooser | Pick what to add | Two tiles | Side by side |
| Document form | Save | File and title | Two columns |
| Category form | Save | Name | One column, swatches below |
| Settings | Pick a theme | Theme row | One table, note below |
| Viewer | Read the file | The file | Large panel, title bar |

| Reference | Here |
|---|---|
| Hero band with sticky notes | Band with the app's name and search |
| Workspace mockup card | The real library, `.area-trabalho` |
| `segmented-tab` | Category chips (`.chip`) |
| `card-feature-*` pastel tiles | Document cards (`.cartao-doc`) |
| `card-feature-yellow-bold` | "Adicionar Documento" (`.cartao-adicionar-novo`) |
| `cta-banner-light` | Empty state |
| `comparison-table` | Settings rows |
| `promo-banner` above the nav | Connection warning |

Dropped from the source, because the app has no counterpart: pricing, testimonials, logo wall, FAQ, stat rows and the footer.

## Personality

What stays from the project: the name `MyLibrary`, the black `L` logo, the Portuguese wording, the category colours chosen by the person, the red for destructive actions and the amber for documents about to expire. These hues keep their meaning and wear the tint material.

## Do's and Don'ts

- Do keep the band navy in every theme, including light.
- Do keep the overlap: if the card stops touching the band, the look is gone.
- Do tint tiles from `--cor-categoria`, so a new category colour works without any code change.
- Don't use pill buttons, gradients, glows or a coloured stripe on the side of a card.
- Don't use purple for text or large surfaces.
- Don't give tiles a border or a resting shadow.
- Don't change `.cor-opcao` from 28px or the gap of `.seletor-cores` from 8px, and don't add horizontal padding to `#cores-usadas`. `capacidadeCoresUsadas()` in `app.js` calculates from those values.
- Don't turn `#btn-limpar-pesquisa` into anything but `display: block` when visible, since the script sets it directly.

## Sources

- **Style:** `notion` from [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md/blob/fcc70284932276d085f01ef9f83edde90b1258cb/design-md/notion/DESIGN.md), commit `fcc70284932276d085f01ef9f83edde90b1258cb`. MIT License, Copyright (c) 2026 VoltAgent, [licence](https://github.com/VoltAgent/awesome-design-md/blob/fcc70284932276d085f01ef9f83edde90b1258cb/LICENSE).
- **From the source file:** the light colours, type scale, radii, shadows and button, input and tab specs. Two changes for contrast: `error` is `#d32a2a` instead of `#e03131`, and `warning-text` (`#b84c00`) is added because `#dd5b00` measures 3.77 on white. The `success` token is dropped, since nothing here uses it.
- **Derived for this project, not in the source (it has no dark tokens):** `colors-dark` and `colors-slate`, the tile tint strengths, the sticky-note arrangement and the 96px overlap.
- **Contrast:** measured with `colors.mjs contrast` on the blended colours, in all three themes, using the demo categories and the amber, emerald, sky and slate presets. Lowest text pairs: 4.54 for `steel` on white and 4.79 for an amber tag in dark.
- **Estimated:** nothing was measured from pixels. No screenshot was supplied.

## Project Decisions

None yet.
