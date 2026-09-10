import type { ImageMetadata } from 'astro';

/**
 * The design data refers to images by their original export paths ("img/p/celeste-1.jpg").
 * Production images live in src/assets so Astro can optimise them, so this maps one to
 * the other and fails loudly at build time on a typo rather than shipping a broken <img>.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/img/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

const byKey = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(modules)) {
  // '/src/assets/img/p/celeste-1.jpg' -> 'img/p/celeste-1.jpg'
  byKey.set(path.replace('/src/assets/', ''), mod.default);
}

/** Resolve an export-style image path. Throws at build time if the asset is missing. */
export function img(key: string): ImageMetadata {
  const found = byKey.get(key);
  if (!found) {
    throw new Error(
      `Unknown image "${key}". Expected src/assets/${key}. ` +
        `Available: ${[...byKey.keys()].slice(0, 5).join(', ')}…`,
    );
  }
  return found;
}

/** Resolve an image that may not have been supplied yet. Returns null instead of throwing. */
export function imgOrNull(key: string | null | undefined): ImageMetadata | null {
  if (!key) return null;
  return byKey.get(key) ?? null;
}

export const hasImage = (key: string): boolean => byKey.has(key);
