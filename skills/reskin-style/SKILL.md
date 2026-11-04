---
name: reskin-style
description: Apply a screenshot's or style's whole look to your app, without moving anything.
argument-hint: "[style]"
disable-model-invocation: true
---

# Reskin style

Read `../reskin/SKILL.md` and follow it, with these differences. Its `references` and `scripts` folders are the ones to use.

Apply the reference's whole visual style and leave the layout alone: it should look like the reference, with everything exactly where it was.

**Change anything CSS can style:** colours, backgrounds, gradients, translucency, blur, shadows, borders, corner radius, typography, padding, and hover, focus and disabled states, including the page's ambience through backgrounds and pseudo-elements.

**Leave alone:** the markup and scripts, and where things are: their order, their grouping and which element sits next to which. Elements may grow or shrink a little from padding and type, but nothing changes position relative to its neighbours.

So in section 5 of `reskin`, skip the composition step and do not edit markup. Before finishing, read the diff: only styles may have changed. Then put each screen next to its capture from before the first edit: CSS alone can move things, for example a new `display: flex` stretches its children, so anything that changed place or width is a failure to fix.
