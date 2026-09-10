/**
 * Generates favicons, the PWA manifest icons and Open Graph share images.
 *
 * Run with `npm run assets`. Output lands in public/ and is committed, so a normal
 * `astro build` needs nothing extra. Re-run after changing a project hero image or
 * the brand mark.
 *
 * Sources are the practice's own assets — the WVA mark from the design export and
 * each project's hero photograph. Nothing here is invented.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MARK = path.join(root, '_source-material/img-original/wva-mark-dark.png');
const MARK_LIGHT = path.join(root, '_source-material/img-original/wva-mark-light.png');
const ASSETS = path.join(root, 'src/assets');
const PUBLIC = path.join(root, 'public');

const INK = { r: 13, g: 13, b: 13, alpha: 1 };
const PAPER = { r: 255, g: 255, b: 255, alpha: 1 };

/** Trim the mark's transparent margin so it can be padded predictably. */
async function trimmedMark(source) {
  return sharp(source).trim({ threshold: 10 }).toBuffer();
}

async function icon(size, markBuffer, background, padding = 0.18) {
  const inner = Math.round(size * (1 - padding * 2));
  const glyph = await sharp(markBuffer)
    .resize({ width: inner, height: inner, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  return sharp({ create: { width: size, height: size, channels: 4, background } })
    .composite([{ input: glyph, gravity: 'center' }])
    .png()
    .toBuffer();
}

async function writeIcons() {
  const dark = await trimmedMark(MARK);
  const light = await trimmedMark(MARK_LIGHT);

  // Browser tab icons — dark mark on paper, matching the site's own palette.
  for (const size of [16, 32, 48, 192, 512]) {
    await fs.writeFile(path.join(PUBLIC, `favicon-${size}.png`), await icon(size, dark, PAPER));
  }

  // iOS home screen prefers a filled, non-transparent tile.
  await fs.writeFile(path.join(PUBLIC, 'apple-touch-icon.png'), await icon(180, light, INK, 0.22));

  // .ico containing the 16/32/48 variants.
  const ico = buildIco(
    await Promise.all([16, 32, 48].map(async (s) => ({ size: s, png: await icon(s, dark, PAPER) }))),
  );
  await fs.writeFile(path.join(PUBLIC, 'favicon.ico'), ico);

  console.log('icons: favicon.ico, favicon-{16,32,48,192,512}.png, apple-touch-icon.png');
}

/** Minimal ICO container around PNG frames. */
function buildIco(frames) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(frames.length, 4);

  let offset = 6 + frames.length * 16;
  const entries = [];
  const payloads = [];

  for (const { size, png } of frames) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    payloads.push(png);
    offset += png.length;
  }

  return Buffer.concat([header, ...entries, ...payloads]);
}

/** 1200×630 share image, cropped from the project's own hero photograph. */
async function shareImage(sourceRelative, outPath) {
  const source = path.join(ASSETS, sourceRelative);
  await sharp(source)
    .resize({ width: 1200, height: 630, fit: 'cover', position: 'attention' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(outPath);
}

async function writeShareImages() {
  const { projects } = await import(path.join(root, 'src/data/projects.ts'));

  const dir = path.join(PUBLIC, 'og/projects');
  await fs.mkdir(dir, { recursive: true });

  for (const project of projects) {
    await shareImage(project.hero, path.join(dir, `${project.slug}.jpg`));
  }

  // Site-wide default: the image the home page already leads with.
  await shareImage('img/p/sion-2.jpg', path.join(PUBLIC, 'og/default.jpg'));

  console.log(`share images: og/default.jpg + ${projects.length} project images`);
}

await fs.mkdir(PUBLIC, { recursive: true });
await writeIcons();
await writeShareImages();
