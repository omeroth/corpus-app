#!/usr/bin/env node
// Build-time share card + share page generator for corpusapp.io.
//
// Reads the dialogue data structures out of index.html (corpusData +
// economicsData + THINKERS + THINKERS_EN), then for every dialogue that has
// a thinkerId, renders:
//   share/cards/<lang>/<weekId>-<dayId>.png    — 1200×630 OG image
//   d/<weekId>-<dayId>-<lang>.html             — landing page with OG tags
// Both languages, both subject palettes. Also emits share/cards/manifest.json.
//
// This is a Node ESM script (.mjs) — run via `npm run gen:share` (see
// package.json) which uses node-canvas as a devDependency.
//
// Fonts: put Nunito + DM Sans TTFs in ./fonts (see fonts/README.md). Missing
// TTFs fall back to the platform sans-serif with a warning; layout still
// works, kerning just doesn't match the in-app version.
//
// The script never touches the app itself — pure static generator.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

let canvasModule;
try {
  canvasModule = await import('canvas');
} catch (e) {
  console.error('\n[gen:share] The `canvas` package is not installed.');
  console.error('            Install it with:  npm i -D canvas\n');
  process.exit(1);
}
const { createCanvas, loadImage, registerFont } = canvasModule;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_CARDS = path.join(ROOT, 'share', 'cards');
const OUT_PAGES = path.join(ROOT, 'd');
const SITE_URL = 'https://corpusapp.io';

// ─────────────────────────────────────────────────────────────────────────
// Data extraction: pull literal JS objects out of index.html
// ─────────────────────────────────────────────────────────────────────────
// The dialogue data lives inline in index.html as `const corpusData = { … };`,
// etc. Rather than refactor those into separate JSON (which would touch the
// runtime), we parse them out here with a balanced-bracket walker that
// respects strings and comments, then eval the extracted literal in an
// isolated Function scope. Only reads the file; nothing writes back.

function _findJsLiteral(src, prefix) {
  const start = src.indexOf(prefix);
  if (start === -1) throw new Error(`prefix not found: ${prefix}`);
  let i = start + prefix.length;
  while (i < src.length && src[i] !== '{' && src[i] !== '[') i++;
  const open = src[i];
  const close = open === '{' ? '}' : ']';
  let depth = 0, j = i, inStr = false, quote = '', escape = false;
  let inLineComment = false, inBlockComment = false;
  for (; j < src.length; j++) {
    const c = src[j], n = src[j + 1];
    if (escape) { escape = false; continue; }
    if (inLineComment) { if (c === '\n') inLineComment = false; continue; }
    if (inBlockComment) { if (c === '*' && n === '/') { inBlockComment = false; j++; } continue; }
    if (inStr) {
      if (c === '\\') { escape = true; continue; }
      if (c === quote) inStr = false;
      continue;
    }
    if (c === '/' && n === '/') { inLineComment = true; j++; continue; }
    if (c === '/' && n === '*') { inBlockComment = true; j++; continue; }
    if (c === '"' || c === "'" || c === '`') { inStr = true; quote = c; continue; }
    if (c === open) depth++;
    else if (c === close) {
      depth--;
      if (depth === 0) {
        const literal = src.slice(i, j + 1);
        // Function eval: the literal is trusted source (our own repo).
        // Wrap in `return (...)` so the last expression yields the value.
        return new Function('return (' + literal + ')')();
      }
    }
  }
  throw new Error(`unclosed literal starting at index ${i}`);
}

function extractData() {
  const src = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  return {
    corpusData:    _findJsLiteral(src, 'const corpusData = '),
    economicsData: _findJsLiteral(src, 'const economicsData = '),
    THINKERS:      _findJsLiteral(src, 'const THINKERS = '),
    THINKERS_EN:   _findJsLiteral(src, 'const THINKERS_EN = '),
  };
}

// ─────────────────────────────────────────────────────────────────────────
// Fonts
// ─────────────────────────────────────────────────────────────────────────

function _registerFonts() {
  const fontsDir = path.join(__dirname, 'fonts');
  if (!fs.existsSync(fontsDir)) {
    console.warn('[gen:share] scripts/fonts missing — falling back to sans-serif.');
    return;
  }
  const files = fs.readdirSync(fontsDir).filter(f => /\.ttf$/i.test(f));
  const tryReg = (file, opts) => {
    try { registerFont(path.join(fontsDir, file), opts); }
    catch (e) { console.warn('[gen:share] registerFont failed for', file, e.message); }
  };
  // Match either static per-weight files or a single variable font.
  const has = name => files.some(f => f.toLowerCase().includes(name.toLowerCase()));
  // Nunito
  if (has('Nunito-VariableFont')) {
    tryReg('Nunito-VariableFont_wght.ttf', { family: 'Nunito' });
  } else {
    if (has('Nunito-SemiBold'))   tryReg('Nunito-SemiBold.ttf',   { family: 'Nunito', weight: '600' });
    if (has('Nunito-Bold'))       tryReg('Nunito-Bold.ttf',       { family: 'Nunito', weight: '700' });
    if (has('Nunito-ExtraBold'))  tryReg('Nunito-ExtraBold.ttf',  { family: 'Nunito', weight: '800' });
    if (has('Nunito-Black'))      tryReg('Nunito-Black.ttf',      { family: 'Nunito', weight: '900' });
  }
  // DM Sans
  if (has('DMSans-VariableFont')) {
    tryReg('DMSans-VariableFont_opsz,wght.ttf', { family: 'DM Sans' });
  } else {
    if (has('DMSans-Medium'))     tryReg('DMSans-Medium.ttf',     { family: 'DM Sans', weight: '500' });
    if (has('DMSans-SemiBold'))   tryReg('DMSans-SemiBold.ttf',   { family: 'DM Sans', weight: '600' });
    if (has('DMSans-Bold'))       tryReg('DMSans-Bold.ttf',       { family: 'DM Sans', weight: '700' });
  }
}

// ─────────────────────────────────────────────────────────────────────────
// Palettes (must stay in lockstep with the in-app _SHARE_CARD_THEMES)
// ─────────────────────────────────────────────────────────────────────────

const THEMES = {
  philosophy: { bg: '#F0EAFC', wordmark: '#7B4FD4', name: '#3D2E66', era: '#9A85C4', question: '#4A3580' },
  economics:  { bg: '#E8F0FC', wordmark: '#2563EB', name: '#1E3A66', era: '#7E9BC8', question: '#1D4ED8' },
  psychology: { bg: '#FEF3D8', wordmark: '#F59E0B', name: '#5C3306', era: '#B08A45', question: '#92400E' },
};
const PLATE   = '#FDFBF6';
const RIM     = '#E5C158';
const URL_TXT = '#B8860B';

// ─────────────────────────────────────────────────────────────────────────
// Text helpers (mirror the in-app implementation)
// ─────────────────────────────────────────────────────────────────────────

const LRI = '⁦', PDI = '⁩', RLM = '‏';

function wrapText(ctx, text, maxWidth, maxLines) {
  const words = String(text || '').split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  const lines = [];
  let current = '';
  for (let i = 0; i < words.length; i++) {
    const test = current ? current + ' ' + words[i] : words[i];
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = words[i];
      if (lines.length === maxLines - 1) {
        current = words.slice(i).join(' ');
        break;
      }
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function fitQuestion(ctx, text, maxWidth, maxLines, fontFamily) {
  for (let size = 60; size >= 32; size -= 4) {
    ctx.font = `800 ${size}px ${fontFamily}`;
    const lines = wrapText(ctx, text, maxWidth, maxLines);
    if (lines.length <= maxLines) return { size, lines };
  }
  ctx.font = `800 32px ${fontFamily}`;
  return { size: 32, lines: wrapText(ctx, text, maxWidth, maxLines) };
}

// ─────────────────────────────────────────────────────────────────────────
// Card renderer — 1200×630 landscape (OG standard)
// ─────────────────────────────────────────────────────────────────────────

async function renderCard({ thinker, dayTitle, subject, lang }) {
  const W = 1200, H = 630;
  const isEn = lang === 'en';
  const theme = THEMES[subject] || THEMES.philosophy;
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');
  ctx.textBaseline = 'top';

  // Background
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, W, H);

  // Portrait — RIGHT third for LTR, LEFT third for RTL
  const portraitR = 200;
  const portraitCx = isEn ? (W - 60 - portraitR) : (60 + portraitR);
  const portraitCy = H / 2;

  // Plate
  ctx.beginPath();
  ctx.arc(portraitCx, portraitCy, portraitR, 0, Math.PI * 2);
  ctx.fillStyle = PLATE;
  ctx.fill();
  // Rim
  ctx.lineWidth = 8;
  ctx.strokeStyle = RIM;
  ctx.stroke();
  // Portrait image
  if (thinker.image) {
    try {
      const imgPath = thinker.image.replace(/^\.\//, '');
      const abs = path.join(ROOT, imgPath);
      const img = await loadImage(abs);
      ctx.save();
      const innerR = portraitR - 6;
      ctx.beginPath();
      ctx.arc(portraitCx, portraitCy, innerR, 0, Math.PI * 2);
      ctx.clip();
      // Top-weighted crop (matches PORTRAIT_CROP_* from index.html)
      const PORTRAIT_CROP_TOP_RATIO    = 0.10;
      const PORTRAIT_CROP_HEIGHT_RATIO = 0.58;
      const iw = img.width, ih = img.height;
      const sx = 0, sy = ih * PORTRAIT_CROP_TOP_RATIO;
      const sw = iw, sh = ih * PORTRAIT_CROP_HEIGHT_RATIO;
      const scale = Math.max((innerR * 2) / sw, (innerR * 2) / sh);
      const dw = sw * scale, dh = sh * scale;
      const dx = portraitCx - dw / 2;
      const dy = portraitCy - dh / 2;
      ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
      ctx.restore();
    } catch (e) {
      // Fallback: monogram
      ctx.fillStyle = theme.wordmark;
      ctx.font = '800 140px Nunito, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText((thinker.name || '?').slice(0, 1), portraitCx, portraitCy);
      ctx.textBaseline = 'top';
    }
  }

  // Text column — opposite side from portrait
  const colX      = isEn ? 60 : (W - 60);
  const colWidth  = W - 60 - (portraitR * 2 + 120) - 60;   // gutter between column and portrait
  const align     = isEn ? 'left' : 'right';
  ctx.textAlign = align;

  let y = 70;

  // Wordmark
  ctx.font = '600 40px Nunito, sans-serif';
  ctx.fillStyle = theme.wordmark;
  ctx.fillText('Corpus', colX, y);
  y += 68;

  // Hero question (shrink-to-fit, up to 3 lines)
  const questionText = String(dayTitle || '').trim();
  if (questionText) {
    const { size, lines } = fitQuestion(ctx, questionText, colWidth, 3, 'Nunito, sans-serif');
    ctx.fillStyle = theme.question;
    ctx.font = `800 ${size}px Nunito, sans-serif`;
    const lineHeight = size * 1.2;
    for (const line of lines) {
      const rendered = !isEn ? (RLM + line + RLM) : line;
      ctx.fillText(rendered, colX, y);
      y += lineHeight;
    }
    y += 24;
  }

  // Thinker name
  ctx.fillStyle = theme.name;
  ctx.font = '900 34px Nunito, sans-serif';
  ctx.fillText(thinker.name, colX, y);
  y += 46;

  // Era (LRI/PDI wrap so digits never flip in Hebrew context)
  if (thinker.era) {
    ctx.fillStyle = theme.era;
    ctx.font = '600 22px "DM Sans", sans-serif';
    ctx.fillText(LRI + thinker.era + PDI, colX, y);
    y += 40;
  }

  // Gold divider — short bar under the era
  const divW = 80;
  const divY = y + 8;
  const divX = isEn ? colX : (colX - divW);
  ctx.strokeStyle = RIM;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(divX, divY);
  ctx.lineTo(divX + divW, divY);
  ctx.stroke();

  // corpusapp.io in the bottom of the text column
  ctx.fillStyle = URL_TXT;
  ctx.font = '700 22px "DM Sans", sans-serif';
  ctx.fillText('corpusapp.io', colX, H - 60);

  return canvas.toBuffer('image/png');
}

// ─────────────────────────────────────────────────────────────────────────
// HTML page renderer — one landing page per dialogue × language
// ─────────────────────────────────────────────────────────────────────────

function escapeHtml(s) {
  return String(s || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function renderPage({ weekId, dayId, thinker, dayTitle, dayIntro, subject, lang }) {
  const isEn = lang === 'en';
  const dir = isEn ? 'ltr' : 'rtl';
  const theme = THEMES[subject] || THEMES.philosophy;
  const cardUrl = `${SITE_URL}/share/cards/${lang}/${weekId}-${dayId}.png`;
  const title = dayTitle || 'Corpus';
  const description = isEn
    ? `A dialogue with ${thinker.name} on Corpus — 5 minutes a day with history's greatest minds.`
    : `דיאלוג עם ${thinker.name} ב-Corpus — 5 דקות ביום עם גדולי ההוגים.`;
  const teaser = dayIntro
    ? String(dayIntro).trim().slice(0, 320)
    : (isEn
        ? `Corpus turns a dialogue with ${thinker.name} into a 5-minute daily habit — read a scenario, answer questions, and see how the great minds approached the same problem.`
        : `Corpus הופך דיאלוג עם ${thinker.name} להרגל יומי של חמש דקות — קוראים סצנה, עונים על שאלות, ומגלים איך הוגי הדעות הגדולים ניגשו לאותה בעיה.`);
  const store = {
    ios:  isEn ? 'Download on the App Store' : 'הורדה מ-App Store',
    play: isEn ? 'Coming to Google Play'      : 'בקרוב ב-Google Play',
  };
  return `<!doctype html>
<html lang="${lang}" dir="${dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)} · Corpus</title>
<meta name="description" content="${escapeHtml(description)}">

<meta property="og:type" content="article">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:image" content="${cardUrl}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="${SITE_URL}/d/${weekId}-${dayId}-${lang}.html">
<meta property="og:site_name" content="Corpus">
<meta property="og:locale" content="${isEn ? 'en_US' : 'he_IL'}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(description)}">
<meta name="twitter:image" content="${cardUrl}">

<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&family=DM+Sans:wght@500;600;700&display=swap" rel="stylesheet">

<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bg:      ${theme.bg};
    --plate:   ${PLATE};
    --rim:     ${RIM};
    --wordmark: ${theme.wordmark};
    --name:    ${theme.name};
    --era:     ${theme.era};
    --question: ${theme.question};
    --url:     ${URL_TXT};
  }
  html, body {
    background: var(--bg);
    color: var(--name);
    font-family: 'DM Sans', sans-serif;
    min-height: 100dvh;
    -webkit-font-smoothing: antialiased;
  }
  main {
    max-width: 720px;
    margin: 0 auto;
    padding: 48px 24px 64px;
    text-align: ${isEn ? 'left' : 'right'};
  }
  .wordmark {
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 22px;
    color: var(--wordmark);
    letter-spacing: -.01em;
    margin-bottom: 32px;
  }
  .portrait-wrap {
    display: flex;
    justify-content: center;
    margin: 24px 0 32px;
  }
  .portrait {
    width: 180px; height: 180px;
    border-radius: 50%;
    background: var(--plate);
    border: 6px solid var(--rim);
    background-size: cover;
    background-position: center 20%;
  }
  h1 {
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    color: var(--question);
    font-size: clamp(28px, 5vw, 44px);
    line-height: 1.25;
    letter-spacing: -.01em;
    margin-bottom: 20px;
  }
  .thinker {
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    color: var(--name);
    font-size: 20px;
  }
  .era {
    color: var(--era);
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 24px;
  }
  .divider {
    height: 3px; width: 64px;
    background: var(--rim);
    margin: ${isEn ? '0 0 24px 0' : '0 0 24px auto'};
    border-radius: 3px;
  }
  .teaser {
    font-size: 17px;
    line-height: 1.75;
    color: var(--name);
    margin-bottom: 40px;
    opacity: 0.9;
  }
  .cta-row {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: ${isEn ? 'flex-start' : 'flex-end'};
    margin-bottom: 24px;
  }
  .cta {
    display: inline-flex;
    align-items: center;
    padding: 12px 20px;
    border-radius: 999px;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 15px;
    text-decoration: none;
    transition: transform .15s;
  }
  .cta.primary {
    background: var(--wordmark);
    color: #FFFFFF;
  }
  .cta.secondary {
    background: transparent;
    color: var(--wordmark);
    border: 1.5px solid var(--wordmark);
    opacity: 0.7;
    cursor: default;
  }
  .cta.primary:active { transform: scale(.97); }
  .url {
    color: var(--url);
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
  }
</style>
</head>
<body>
<main>
  <div class="wordmark">Corpus</div>
  <div class="portrait-wrap">
    <div class="portrait" style="background-image:url(${escapeHtml(thinker.image ? SITE_URL + '/' + thinker.image.replace(/^\.\//, '') : '')})"></div>
  </div>
  <h1>${escapeHtml(title)}</h1>
  <div class="thinker">${escapeHtml(thinker.name)}</div>
  <div class="era">${escapeHtml(thinker.era || '')}</div>
  <div class="divider"></div>
  <p class="teaser">${escapeHtml(teaser)}</p>
  <div class="cta-row">
    <a class="cta primary" href="https://apps.apple.com/app/id6781227385">${escapeHtml(store.ios)}</a>
    <span class="cta secondary">${escapeHtml(store.play)}</span>
  </div>
  <a class="url" href="${SITE_URL}">corpusapp.io</a>
</main>
</body>
</html>
`;
}

// ─────────────────────────────────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────────────────────────────────

async function main() {
  _registerFonts();

  const { corpusData, economicsData, THINKERS, THINKERS_EN } = extractData();

  const subjects = [
    { subject: 'philosophy', data: corpusData    },
    { subject: 'economics',  data: economicsData },
  ];

  // Manifest maps (weekId, dayId, lang) → generated card path.
  const manifest = { generatedAt: new Date().toISOString(), items: [] };

  for (const { subject, data } of subjects) {
    if (!data || !Array.isArray(data.weeks)) continue;
    for (const week of data.weeks) {
      if (!week || !Array.isArray(week.days)) continue;
      for (const day of week.days) {
        if (!day || !day.thinkerId) continue;
        // The dialogue's first "idea"/"scenario" section, if any, becomes the
        // page teaser. Sections shape: [{ type, title, body/intro, ... }].
        const introSec = (day.sections || []).find(s => s && (s.body || s.intro));
        const dayIntro = introSec ? (introSec.body || introSec.intro) : '';

        for (const lang of ['he', 'en']) {
          const isEn = lang === 'en';
          const thinker = (isEn ? THINKERS_EN : THINKERS).find(t => t.id === day.thinkerId);
          if (!thinker) {
            console.warn('[gen:share] thinker not found for id', day.thinkerId, 'lang', lang);
            continue;
          }
          const dayTitle = isEn
            ? (day.titleEn || day.title)
            : (day.title    || day.titleEn);
          if (!dayTitle) continue;

          // Card PNG
          const cardDir  = path.join(OUT_CARDS, lang);
          const cardFile = path.join(cardDir, `${week.id}-${day.id}.png`);
          fs.mkdirSync(cardDir, { recursive: true });
          const buf = await renderCard({ thinker, dayTitle, subject, lang });
          fs.writeFileSync(cardFile, buf);

          // HTML landing page
          fs.mkdirSync(OUT_PAGES, { recursive: true });
          const pageFile = path.join(OUT_PAGES, `${week.id}-${day.id}-${lang}.html`);
          fs.writeFileSync(pageFile, renderPage({
            weekId:   week.id,
            dayId:    day.id,
            thinker,
            dayTitle,
            dayIntro,
            subject,
            lang,
          }));

          manifest.items.push({
            weekId: week.id,
            dayId:  day.id,
            subject,
            lang,
            thinkerId: day.thinkerId,
            title:  dayTitle,
            card:   `share/cards/${lang}/${week.id}-${day.id}.png`,
            page:   `d/${week.id}-${day.id}-${lang}.html`,
          });
        }
      }
    }
  }

  // Manifest
  fs.mkdirSync(OUT_CARDS, { recursive: true });
  fs.writeFileSync(
    path.join(OUT_CARDS, 'manifest.json'),
    JSON.stringify(manifest, null, 2) + '\n'
  );

  console.log(`[gen:share] wrote ${manifest.items.length} cards + pages`);
  console.log(`[gen:share] cards → ${path.relative(ROOT, OUT_CARDS)}`);
  console.log(`[gen:share] pages → ${path.relative(ROOT, OUT_PAGES)}`);
  console.log(`[gen:share] manifest → ${path.relative(ROOT, path.join(OUT_CARDS, 'manifest.json'))}`);
}

main().catch(err => {
  console.error('[gen:share] failed:', err);
  process.exit(1);
});
