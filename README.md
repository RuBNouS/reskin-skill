# reskin

An agent skill that changes how an existing app looks without changing what it does.

Give it screenshots you like, or the name of a style, and it writes a `DESIGN.md`, applies it to your code and checks that everything still works.

```
/reskin                        applies the project's DESIGN.md, or offers styles if there is none
/reskin linear                 uses the Linear style
/reskin + screenshots          takes the look from your screenshots
/reskin stripe + screenshots   uses Stripe as a base, and the screenshots override it
/reskin add an export button   does the task under the project's DESIGN.md
```

## Why a DESIGN.md first

Screenshots never go straight into code. They become a `DESIGN.md`, a plain text file with exact values and rules, in the format used by Google Stitch and [awesome-design-md](https://github.com/VoltAgent/awesome-design-md). The look then survives the conversation, and the next one can follow it.

```
screenshots ─┐
             ├─> DESIGN.md ─> your code ─> tests, contrast and browser checks
style name ──┘
```

- **Colours are measured.** A small script with no dependencies reads the pixels of your screenshots, so you get true hex values and not guesses. PNG is read directly. JPEG, WebP and others are converted with what your system already has: Windows Imaging Component, `sips` on macOS, or ImageMagick or ffmpeg on Linux.
- **The rest is read by eye** and marked as estimated: fonts, sizes, spacing and hierarchy.
- **The system is taken, not the screen.** Your layout, features and wording stay yours.
- **Your choices survive.** `DESIGN.md` has a `Project Decisions` section that carries over each time it is regenerated.
- **Your themes survive.** If a style only describes dark mode, your light theme is derived from it and not deleted.
- **Colours with meaning survive.** Win and loss, status, rarity and your own data keep their hue.

## Install

In Claude Code:

```
/plugin marketplace add RuBNouS/reskin-skill
/plugin install reskin@reskin-skill
```

Installed as a plugin, the command is `/reskin:reskin`. To get plain `/reskin`, or for other agents that read skills, copy `skills/reskin` into your skills folder, such as `.claude/skills/`.

You need Node.js to measure colours. Without it, or with an image your system cannot convert, colours are estimated and marked as such.

## Limits

- It restyles existing interfaces. To build an app from nothing, other tools fit better.
- Screenshots hold no real values for fonts and sizes, so those are approximations.
- Most named styles analyse a product's marketing site, not its app, so some rules have to be adapted or dropped.
- Anything drawn by code, such as canvas, WebGL or a game world, is left alone. In a game, only the menus and overlays change.
- Styled dropdown lists need a browser with `appearance: base-select`. Others show their default list, which still works.
- How much of your app it can check depends on your tests and on whether your agent has a browser.

## Similar projects

If this does not fit, these do parts of the same job and may suit you better:

- [awesome-design-md](https://github.com/VoltAgent/awesome-design-md): the collection of styles this skill downloads from.
- [anydesign](https://github.com/uxKero/anydesign): turns images, websites and Figma files into a `design.md`, with more analysis tools. It does not apply the result to your code.
- [design.how](https://github.com/arla6ka/design.how): rigorous migration of a large app onto a design system. Its look comes from the app itself, not from a reference.
- [build-design](https://github.com/jakubkrehel/skills): builds a piece of UI that matches a design image, using the tokens you already have.

## Credits

Named styles come from [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) (MIT), downloaded at a pinned commit. This project is not affiliated with that project or with any of the brands whose styles it can use.

## License

MIT
