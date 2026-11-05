---
version: alpha
name: MyLibrary (Spotify)
description: "A personal document library wearing Spotify's near-black player: two floating panels on black, documents as album covers, one green."

colors:
  canvas: "#000000"
  panel: "#121212"
  card: "#181818"
  card-hover: "#282828"
  elevated: "#282828"
  control: "#1f1f1f"
  hairline: "#4d4d4d"
  outline: "#7c7c7c"
  ink: "#ffffff"
  ink-muted: "#b3b3b3"
  ink-faint: "#a7a7a7"
  primary: "#1ed760"
  primary-hover: "#3be477"
  on-primary: "#000000"
  primary-text: "#1ed760"
  negative: "#f3727f"
  warning: "#ffa42b"
  wash-neutral: "#535353"

colors-light:
  canvas: "#e4e4e4"
  panel: "#ffffff"
  card: "#f6f6f6"
  card-hover: "#ebebeb"
  elevated: "#ffffff"
  control: "#f0f0f0"
  hairline: "#c4c4c4"
  outline: "#7c7c7c"
  ink: "#121212"
  ink-muted: "#535353"
  ink-faint: "#6a6a6a"
  primary: "#1ed760"
  primary-hover: "#1fc85b"
  on-primary: "#000000"
  primary-text: "#08702f"
  negative: "#ae1d2f"
  warning: "#8a4b00"
  wash-neutral: "#9a9a9a"

colors-slate:
  canvas: "#070c18"
  panel: "#0f172a"
  card: "#151f33"
  card-hover: "#22304a"
  elevated: "#22304a"
  control: "#1b2740"
  hairline: "#3b4a63"
  outline: "#7686a0"
  ink: "#f8fafc"
  ink-muted: "#a9b6c9"
  ink-faint: "#94a3b8"
  primary: "#1ed760"
  primary-hover: "#3be477"
  on-primary: "#000000"
  primary-text: "#1ed760"
  negative: "#f3727f"
  warning: "#ffa42b"
  wash-neutral: "#475569"

typography:
  section-hero:
    fontFamily: "Helvetica Neue, Helvetica, Arial, Segoe UI, sans-serif"
    fontSize: clamp(2rem, 4.5vw, 3.75rem)
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.02em
  title:
    fontSize: 24px
    fontWeight: 700
  card-title:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontSize: 14px
    fontWeight: 400
  small:
    fontSize: 12px
    fontWeight: 400
  button:
    fontSize: 14px
    fontWeight: 700
    letterSpacing: 1.4px
    textTransform: uppercase

rounded:
  badge: 2px
  input: 4px
  cover: 6px
  panel: 8px
  pill: 9999px
  circle: 50%

spacing:
  gutter: 8px
  card: 12px
  section: 24px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-round:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.circle}"
    size: 44px
---

## Overview

The interface recedes into shade so the content can carry the colour. MyLibrary has no album art, so its covers are built from what it does have: each category's colour and each file's own type. The shell is the Spotify desktop player: two rounded panels floating on pure black, a library list on the left and a stage on the right that takes its light from what is selected.

## Signature

1. Two rounded panels (8px) on a black canvas with an 8px gutter. No header bar spanning the window, and no border on the panels.
2. A library sidebar of rows: 48px square cover, name, count below. The selected row's name is green.
3. A stage with a colour wash: the top of the right panel fades from the selected category's colour into the panel, under one large bold title.
4. Documents as album tiles: square cover, bold title, muted subtitle. A round green button rises out of the cover's corner on hover.
5. Pills and circles for every control. Green only on the primary action, active states and "on" switches. Nothing else in the chrome has a hue.

## Materials

- **Canvas:** solid `--bg-canvas`. Nothing sits on it directly except the two panels.
- **Panels:** solid `--bg-surface`, radius 8px, no border, no shadow.
- **Stage wash:** `linear-gradient(to bottom, color-mix(in srgb, var(--cor-ambiente) 62%, var(--bg-surface)), var(--bg-surface) 340px)` with `background-attachment: local`, so it scrolls away with the content. `--cor-ambiente` falls back to `--wash-neutral` when no category is selected.
- **Top bar:** sticky inside the stage, transparent at scroll 0, turning solid over the first 80px of scroll (`animation-timeline: scroll()`). Solid where that is not supported or motion is reduced.
- **Cards:** `--bg-card`, radius 8px, no border, no resting shadow. Hover is a lighter fill only.
- **Generated cover:** the category colour with `linear-gradient(160deg, rgba(0,0,0,.05), rgba(0,0,0,.55))` over it, radius 6px and `0 8px 24px rgba(0,0,0,.5)` under it. Without a category it uses `--wash-neutral`. The file type sits bottom-left in white 40px bold, where the gradient is darkest. A thumbnail fills the cover and the type becomes a small 2px badge top-left.
- **Dialogs and menus:** `--bg-elevated`, radius 8px, `0 8px 24px rgba(0,0,0,.5)`, over a `rgba(0,0,0,.7)` backdrop.
- **Inputs in dialogs:** `--bg-control` with the inset edge `0 0 0 1px var(--outline) inset`, not a CSS border. Focus thickens the edge to 2px in `--text-primary`.

## Colors

The chrome is achromatic in all three themes. Colour on screen comes from category covers, the stage wash and one green.

- Green (`--accent`) is a fill for: Adicionar, Guardar and other primary buttons, the round cover button, switched-on toggles, the logo disc. As text (`--accent-text`) it marks the selected row, a selected menu item and toast actions.
- Category colours come from the person's data and are never replaced. They appear as the row cover, the card cover, the wash and a small dot beside the category name on a card.
- `--danger` and `--warning` keep their meaning: expired, about to expire, destructive actions, errors.
- Contrast was measured on every theme (text against the blended background at its worst point). Every text pair is 4.5:1 or more. The exceptions are large type: the stage title over a light category wash in dark mode is 4.67, and cover type on a near-white custom category colour is 3.36, which passes the 3:1 large-text bar. The light theme's `primary-text`, `negative` and `warning` were darkened to `#08702f`, `#ae1d2f` and `#8a4b00` to pass on tinted badges and the selected row.

## Typography

System fonts only, since this is a local app: `"Helvetica Neue", Helvetica, Arial, "Segoe UI", sans-serif`, the fallback stack of the reference. Weight does the work, almost everything is 700 or 400. Buttons are uppercase with 1.4px tracking. Row-style buttons that hold two lines of text (the add-choice dialog) stay sentence case.

## Layout

- Desktop: `body` is a grid, `300px` sidebar and the stage, 8px gutter, full viewport height. Each panel scrolls on its own, and the page never scrolls.
- Tiles: `repeat(auto-fill, minmax(200px, 1fr))`, gap 8px. Density over breathing room.
- At 1100px and below: the sidebar narrows to 232px with 40px covers, the search moves left of the actions, and tiles go down to 170px.
- At 768px and below: one column, the page scrolls, the sidebar becomes a brand row plus a horizontally scrolling row of pills with small covers.
- The drag-to-scroll on the category list works along both axes, because the list is vertical on desktop and horizontal on narrow screens.

## Shapes

2px badges with a meaning (expiry, file type on a thumbnail), 4px inputs and row covers, 6px card covers, 8px panels, cards and dialogs, pill for every button, search and tag, circle for icon buttons.

## Motion

100-200ms ease only. Card fill on hover, and the round cover button fades in and rises 8px. Everything is removed under `prefers-reduced-motion`.

## Components

- **Library row (`.chip`):** transparent, hover a white wash, selected a stronger wash with a green name. Rows without a category colour use the same shape, with an icon inside a neutral cover. `A expirar` has a warning-coloured icon.
- **Cover button:** the main action of the card (view, or restore in the recycling bin) is the 44px green circle at the cover's bottom right. Hidden until the card is hovered or focused, and always visible on touch devices. A disabled one is grey, never green.
- **Secondary card actions:** muted icon buttons in the footer, circular hover.
- **Selects:** dark pills. The open list uses `appearance: base-select` with an elevated `::picker(select)`.
- **Tags:** muted 12px pills on `--bg-control`.
- **Toast:** centred at the bottom, elevated, 8px radius, heavy shadow.
- **Search:** 48px pill in the top bar, inset edge on hover and focus.

## Product Map

MyLibrary is a personal "second brain": it stores files, extracts their text for search and groups them by category. Everything happens on one screen plus dialogs.

| Screen | Main action | Focal point | Composition |
|---|---|---|---|
| Library | Find and open a document | Document tiles | Sidebar of categories on the left. Stage: search and Adicionar in a top bar, wash with the section title and filters, then tiles |
| Category selected | Open a document | Wash in the category colour and title | Same, with the pencil inside the selected row |
| Search | Find | Tiles with the matched excerpt | Same. The count next to the title shows the matches |
| Empty and error states | Add a document | Message in the stage | Centred in the stage with no box around it |
| Recycling bin | Restore | Tiles | Green button is Restaurar |
| Add choice, document, category, settings dialogs | Save | The form | Elevated panel without inner dividers, footer pills on the right |
| Viewer dialog | Read | The file | Black well under a plain header |

| Reference | MyLibrary |
|---|---|
| "Your Library" sidebar | Brand and category list (`#lista-chips`) |
| Playlist cover tile | Category colour and file type |
| Playlist header gradient | Stage wash under the section title |
| Album card | `.cartao-doc` |
| Green play button | View (`data-acao="ver"`) or restore |
| Sort control | Type and order selects, beside the title |
| Now-playing bar | Nothing. There is no playback here, and a fake bar would be invented content |

## Personality

- Name and logo stay: the letter L and "MyLibrary". The L sits on a green disc, as the reference's mark does. "MyLibrary" takes the place of "Your Library".
- European Portuguese wording is unchanged.
- Category colours are the person's and always show as chosen.

## Do's and Don'ts

- Do keep all three themes. Slate and light use the same roles.
- Do keep `.cor-opcao` at 28px with an 8px gap: `capacidadeCoresUsadas()` in `app.js` computes from those numbers.
- Don't add a border around panels or cards. If a card needs separating, change its fill.
- Don't use green as a background wash or on decoration.
- Don't bring back a header bar spanning the window, a horizontal chip row on desktop, or cards without a cover. Those would make this a recolour.
- Don't invent albums, players, images or numbers.

## Sources

- Style: `spotify` from [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md/tree/fcc70284932276d085f01ef9f83edde90b1258cb/design-md/spotify), commit `fcc70284932276d085f01ef9f83edde90b1258cb`. MIT License, Copyright (c) 2026 VoltAgent, [licence](https://github.com/VoltAgent/awesome-design-md/blob/fcc70284932276d085f01ef9f83edde90b1258cb/LICENSE).
- **From the source file:** the dark palette except `card-hover`, `wash-neutral` and `primary-hover`, pill and circle geometry, the shadows, uppercase button labels, inset input edge, font fallback stack, semantic colours.
- **Estimated from general knowledge of the product, not in the source:** the wash, the large section title (the source says 10-24px, the hero is a deliberate exception), the hover-reveal of the round button, `card-hover`, `wash-neutral`, `primary-hover`.
- **Derived for this project:** `colors-light` and `colors-slate`. The source has no light mode, and slate is a theme this project already ships.
- No screenshot was supplied, so nothing is measured from pixels.

## Project Decisions

None yet.
