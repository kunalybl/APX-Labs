import fs from "node:fs";
import path from "node:path";

/**
 * Server-side proof-asset discovery.
 * Drop real files into /public/{proof,screenshots,videos} and they appear
 * automatically — no code changes, no fake placeholders in production.
 */

const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"]);
const VIDEO_EXT = new Set([".mp4", ".webm", ".mov", ".m4v"]);

export type Asset = {
  src: string;
  name: string;
  type: "image" | "video";
  caption: string;
  /** Intrinsic pixel dimensions (from manifest.json) — used for CLS-free layout. */
  width?: number;
  height?: number;
};

function titleCase(s: string): string {
  return s
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

/**
 * Filename → caption.
 * - strips extension and a leading order prefix ("01-", "02_")
 * - a double dash "--" separates two clauses, rendered as "A — B"
 *   e.g. "01-andre-ramy--beacon-energy-solutions" → "Andre Ramy — Beacon Energy Solutions"
 */
function humanize(file: string): string {
  const stem = file.replace(/\.[^.]+$/, "").replace(/^\d+[-_]/, "");
  return stem.split("--").map(titleCase).filter(Boolean).join(" — ");
}

type Dims = Record<string, { w: number; h: number }>;

function readManifest(dir: string): Dims {
  try {
    return JSON.parse(fs.readFileSync(path.join(dir, "manifest.json"), "utf8"));
  } catch {
    return {};
  }
}

function readDir(publicSubdir: string, filter: "image" | "video" | "any"): Asset[] {
  const dir = path.join(process.cwd(), "public", publicSubdir);
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }
  const manifest = readManifest(dir);

  return files
    .filter((f) => !f.startsWith("."))
    .map((f) => {
      const ext = path.extname(f).toLowerCase();
      const isImage = IMAGE_EXT.has(ext);
      const isVideo = VIDEO_EXT.has(ext);
      if (!isImage && !isVideo) return null;
      if (filter === "image" && !isImage) return null;
      if (filter === "video" && !isVideo) return null;
      const dims = manifest[f];
      return {
        src: `/${publicSubdir}/${f}`,
        name: f,
        type: isVideo ? "video" : "image",
        caption: humanize(f),
        width: dims?.w,
        height: dims?.h,
      } as Asset;
    })
    .filter((a): a is Asset => a !== null)
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
}

export function getProof(): Asset[] {
  return readDir("proof", "image");
}

export function getScreenshots(): Asset[] {
  return readDir("screenshots", "image");
}

export function getVideos(): Asset[] {
  return readDir("videos", "video");
}
