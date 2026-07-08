# scripts/fonts

`generate-share-cards.mjs` uses node-canvas's `registerFont()` to draw text.
node-canvas cannot read system fonts on Linux CI runners, so we ship the
exact TTFs the script needs alongside the code.

The share-card layout targets **two families** in a small number of weights:
- **Nunito** — 600, 700, 800, 900 (variable font works too)
- **DM Sans** — 500, 600, 700 (variable font works too)

## Populate this directory

Download the TTF families from Google Fonts and drop the files in here.

```
# From https://fonts.google.com/specimen/Nunito → Download family
# Extract the Nunito static TTFs and copy:
Nunito-SemiBold.ttf
Nunito-Bold.ttf
Nunito-ExtraBold.ttf
Nunito-Black.ttf

# From https://fonts.google.com/specimen/DM+Sans → Download family
DMSans-Medium.ttf
DMSans-SemiBold.ttf
DMSans-Bold.ttf
```

Or install a single variable font per family (smaller, one file):
```
Nunito-VariableFont_wght.ttf
DMSans-VariableFont_opsz,wght.ttf
```

Either shape is auto-detected by the script — see `_registerFonts()` in
`generate-share-cards.mjs`.

If any TTF is missing at runtime, the script falls back to the platform
default sans-serif and warns to stderr. The card still generates, just
with fonts that don't quite match the in-app rendering.

## Do NOT commit the TTFs

Google Fonts are OFL-licensed and safe to redistribute, but they add ~2MB
to the repo. Keep them local (add `scripts/fonts/*.ttf` to `.gitignore` if
they aren't already ignored) and download on each machine that runs the
generator.
