---
version: alpha
name: MyLibrary — Card Catalogue
description: "An old library card catalogue: warm cream paper, serif headings, typed index cards filed behind tabbed dividers, one ink-blue accent."

colors:
  canvas: "#f2ead9"
  panel: "#e8dcc2"
  tab: "#ddcfae"
  card: "#fcf8ef"
  ink: "#2a2620"
  ink-muted: "#5f5646"
  ink-faint: "#7a6f5c"
  hairline: "#cbbd9e"
  hairline-strong: "#a8987a"
  rule: "rgba(35, 64, 142, 0.14)"
  primary: "#23408e"
  primary-hover: "#1a3070"
  on-primary: "#fcf8ef"
  danger: "#a3302a"
  warning: "#8a5a00"
  success: "#3f6b3a"
  highlight: "rgba(240, 200, 60, 0.45)"

colors-dark:
  canvas: "#1b1813"
  panel: "#25211a"
  tab: "#2e2920"
  card: "#302a21"
  ink: "#efe6d2"
  ink-muted: "#c2b69c"
  ink-faint: "#a39780"
  hairline: "#463f31"
  hairline-strong: "#5e5542"
  rule: "rgba(142, 170, 240, 0.12)"
  primary: "#8eaaf0"
  primary-hover: "#a9bff5"
  on-primary: "#16130e"
  danger: "#e88a80"
  warning: "#e4b25a"
  success: "#8fc486"
  highlight: "rgba(240, 200, 60, 0.30)"

colors-slate:
  canvas: "#1d222b"
  panel: "#252b36"
  tab: "#2d3441"
  card: "#2f3643"
  ink: "#e9edf3"
  ink-muted: "#b3bccb"
  ink-faint: "#97a1b2"
  hairline: "#3e4757"
  hairline-strong: "#566072"
  rule: "rgba(157, 184, 245, 0.12)"
  primary: "#9db8f5"
  primary-hover: "#b8ccf8"
  on-primary: "#141922"
  danger: "#ec8b84"
  warning: "#e6b45e"
  success: "#8ec9a0"
  highlight: "rgba(240, 200, 60, 0.30)"

typography:
  display:
    fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif"
    fontSize: 26px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: 0.2px
  heading:
    fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.5
  typed:
    fontFamily: "'Courier Prime', 'Courier New', Courier, monospace"
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.35
  typed-label:
    fontFamily: "'Courier Prime', 'Courier New', Courier, monospace"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 1px
    textTransform: uppercase

rounded:
  card: 2px
  tab: 7px 7px 0 0
  control: 3px

spacing:
  rule: 24px
  sm: 8px
  md: 16px
  lg: 28px

components:
  index-card:
    backgroundColor: "{colors.card}"
    borderTop: "6px solid <category colour>"
    rounded: "{rounded.card}"
    padding: 16px 20px 28px
  divider-tab:
    backgroundColor: "{colors.tab}"
    activeBackgroundColor: "{colors.panel}"
    rounded: "{rounded.tab}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.typed-label}"
    rounded: "{rounded.control}"
    padding: 9px 16px
---

## Overview

MyLibrary is filed like a library's card catalogue. The page is a sheet of warm cream paper; the documents live in a manila **drawer**, and each document is a typed **index card** standing in it. Categories are the **tabbed dividers** of that drawer: the chosen tab is pulled up and joins the drawer below, the others sit behind it. Everything is paper and ink: no gradients, no glass, no glow, and only one colour of ink (blue) for anything you can act on.

## Signature

1. **Index cards.** Every document is a card-stock rectangle (about 5:3) with faint blue ruled lines, a typewriter-set title on a solid ink-blue header rule, a coloured band along its top edge, and a punched rod hole at the bottom centre.
2. **Typed labels.** Titles on cards, category labels, file types, dates, tags, buttons and field labels are set in a typewriter face (Courier), mostly bold, small labels in tracked uppercase.
3. **Divider tabs.** The category filters are rounded-top tabs sitting on one horizontal line; the active tab is taller, has the drawer's colour and no bottom edge, so it reads as the divider the cards are filed behind.
4. **Cream paper and serif headings.** Canvas is warm cream with a faint paper grain; the brand, dialog titles and empty-state headings are in an old-style serif.
5. **One ink.** Ink blue (`#23408e`) is the only accent: primary buttons, the card header rule, focus rings, active marks. Category colours appear only as divider and card top bands.

## Materials

- **Canvas (paper):** `--bg-app`, plus a fractal-noise SVG grain at ~5% opacity (`background-image` data URI, `feTurbulence baseFrequency 0.9`). Nothing sits on it except the header and the drawer.
- **Drawer (divider card):** `#area-documentos` is the drawer body: `--bg-panel`, 1px `--border` on left, right and bottom, no top border (the tab line is its top edge), inner shadow `inset 0 8px 14px -10px rgba(60,40,10,.25)` so cards look set down into it, padding 28px.
- **Tab line:** `.barra-navegacao-filtros` paints a 1px `--border-strong` line along its bottom (`linear-gradient` on its background). Inactive tabs stop 1px above it; the active tab reaches it and covers it with `--bg-panel`.
- **Index card:** `--bg-card`, `border-top: 6px solid var(--cor-categoria, var(--border-strong))`, `border-radius: 2px`, shadow `0 1px 0 rgba(60,40,10,.10), 0 3px 8px -2px rgba(60,40,10,.18)`. Body has ruled lines: `repeating-linear-gradient(to bottom, transparent 0 23px, var(--rule) 23px 24px)`; notes use `line-height: 24px` so text sits on the lines. Rod hole: `::after`, 12px circle, `--bg-panel` fill with `inset 0 1px 2px rgba(0,0,0,.35)`.
- **Dialogs:** a large index card: `--bg-card`, ink-blue 3px top rule, ruled-line body, inputs drawn as typed lines (bottom border only).
- **Slips (selects, search, toasts, menus):** `--bg-card`, 1px `--border`, 3px radius, small paper shadow `0 1px 0 rgba(60,40,10,.08)`.

CSS variables: `--bg-app` canvas, `--bg-panel` panel, `--bg-tab` tab, `--bg-card` card, `--text-primary` ink, `--text-secondary` ink-muted, `--text-muted` ink-faint, `--border` hairline, `--border-strong` hairline-strong, `--rule` rule, `--accent` primary.

## Colors

About 95% of the screen is paper and ink. Ink blue covers only the primary button, the card header rules, focus, the active tab marker and links. Category colours (the person's data) appear as the 6px top band of each card and a 4px band on each divider tab, never as fills. Warning and danger keep amber and red, used as rubber stamps (outlined, uppercase typed text) or ink text, never as solid blocks, except the disconnection banner.

## Typography

- Serif (`Iowan Old Style`, `Palatino Linotype`, Georgia): brand 26px/600, dialog titles 20px/600, settings headings 16px/600, body and notes 15px/400.
- Typed (`Courier New`): card titles 16px/700; labels, buttons, counts, file types, dates and tags 11–13px/700, uppercase with 0.08em tracking for labels and buttons, sentence case for tags and dates.
- System fonts only (local app). Courier Prime is used if installed.

## Layout

- Header: brand (left) — search slip (centre, up to 560px) — settings and Adicionar (right), with a 3px double rule beneath.
- Main column: max 1320px, centred, 28px top padding. The tab row sits directly on the drawer (no gap).
- Grid inside the drawer: `repeat(auto-fill, minmax(280px, 1fr))`, 24px gap. Cards keep `aspect-ratio: 5 / 3` as a minimum and grow with content.
- Ruled rhythm: 24px. Narrow screens (≤768px): search wraps to its own header row; type and sort slips move above the tabs.

## Shapes

Cards 2px, tabs `7px 7px 0 0`, slips, inputs and buttons 3px, colour swatches 4px, toggle track fully rounded. Nothing else is rounded.

## Motion

Cards lift 2px on hover (150ms ease-out); tabs rise 2px on hover. Dialogs and menus appear without animation. `prefers-reduced-motion` turns all transitions off.

## Components

- **Divider tab (`.chip`):** `--bg-tab`, 1px `--border` on top/left/right, typed 12px uppercase, count in a lighter typed numeral. Hover: rises 2px. Active (`.ativo`): `--bg-panel`, 6px taller, ink text, covers the tab line. Category tabs carry a 4px band in the category colour along their top (`.chip-ponto`). "A expirar" has an amber band; "+ Adicionar Categoria" is a dashed blank tab.
- **Index card (`.cartao-doc`):** row 1: category as typed uppercase label (category hue mixed with ink) and the file type as a boxed typed call number; title typed bold with a 2px ink-blue rule under it; notes on ruled lines; tags as typed `#tag` text; footer: typed date and size, ink icon buttons. Hover: lifts. Pending: 60% opacity.
- **Blank card (`.cartao-adicionar-novo`):** an empty ruled index card with a dashed ink outline and a typed label; hover turns the outline solid ink.
- **Expiry stamp (`.badge-validade`):** outlined 1.5px, typed uppercase, rotated −2deg, amber for "a expirar", red for "expirado".
- **Search match (`.cartao-ocr-match`):** italic serif excerpt with a 2px ink-blue left rule; `<mark>` is a yellow highlighter stroke.
- **Buttons:** primary solid ink with cream typed uppercase text and a 0 2px 0 darker ink base; pressed moves down 1px. Secondary: card-stock with 1px `--border-strong`, ink text. Danger: red ink outline, fills red on hover. Icon buttons: ink, no box until hover.
- **Fields:** typed label above, input is a line: transparent background, 1px bottom border `--border-strong`, focus turns it 2px ink blue.
- **Selects:** slips with typed text; open list (`::picker(select)`) is a card with ruled rows, checked option in ink blue.
- **Toggle:** hairline track, card-stock knob; checked track is ink blue.
- **Toast:** slip of card with a 4px ink-blue left band (red for errors).
- **Empty state:** one centred large index card in the drawer, serif heading.

## Product Map

MyLibrary is a personal document library (bills, contracts, IDs, notes) with search, categories, file type filter, sorting, expiry dates and a recycle bin.

- **Library (main screen).** Main action: find a document, then open/download it. Focal point: the drawer of cards. Composition: search moved into the header; category filters are divider tabs on top of the drawer; type and sort slips sit at the right end of the tab line; the grid is enclosed in the drawer; "Adicionar Documento" is the first, blank card.
- **Empty / no results / recycle bin empty.** One large index card centred in the drawer, with the tabs still on top.
- **Add choice dialog.** Two options as stacked index cards (typed title, serif description).
- **Document dialog (add/edit).** A catalogue card form: ruled body, typed labels, line inputs, drop zone as a dashed blank card.
- **Category dialog.** Same card form; colour swatches as small ink-bordered squares.
- **Settings dialog.** Ruled rows with serif headings; the note at the bottom is a typed slip.
- **Viewer dialog.** Card header with the document title; the file sits in the drawer colour.

Reference roles: card catalogue drawer → document area; divider tabs → category filters; index card → document; typed label → card title and metadata; catalogue label holder → the brand.

## Personality

Kept: the name MyLibrary, the square "L" logo mark (now ink-blue with a cream serif L), all wording in Portuguese, category colours chosen by the person (hue unchanged, shown as bands), amber for expiring and red for expired/danger.

## Do's and Don'ts

- Do keep every surface as paper: card stock, manila or cream. No glass, no gradients except the ruled lines and paper grain.
- Do set every card title, label, tag, date and button in the typed face.
- Do keep blue as the only interactive colour. Don't introduce a second accent (no green icons, no purple).
- Don't fill anything with a category colour beyond the bands.
- Don't round cards beyond 2px or tabs beyond their top corners.
- Don't put a gap between the tab row and the drawer; the active tab must visibly join it.
- Don't drop the rod hole or the ruled lines from cards; without them it is a generic card grid.

## Sources

- The person's description: "an old library card catalogue: warm cream paper, serif headings, one ink-blue accent, documents as index cards with a typed label, filters like the tabbed dividers of a card drawer". No screenshots or named style.
- All colours, sizes and fonts are **estimated** (chosen to fit the description), then checked for contrast with `colors.mjs contrast`.
- Light theme is the primary one, from the description. Dark ("library at night") and Slate are **derived** from the same roles.

## Project Decisions

- Look: old library card catalogue, as described above (requested in this conversation).
