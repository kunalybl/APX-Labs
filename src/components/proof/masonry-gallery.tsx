import * as React from "react";
import type { Asset } from "@/lib/assets";
import { cn } from "@/lib/utils";

/**
 * Deterministic balanced-column masonry.
 * We know each image's aspect ratio (from manifest.json), so we distribute
 * images into columns greedily (each goes to the currently-shortest column).
 * This packs mixed aspect ratios tightly and evenly without relying on CSS
 * multi-column balancing — it works in every engine and never leaves a lopsided
 * gap. `framed` adds a subtle window bar so screenshots read as real captures.
 */
function distribute(assets: Asset[], n: number): Asset[][] {
  const cols = Array.from({ length: n }, () => ({ items: [] as Asset[], h: 0 }));
  for (const a of assets) {
    const ratio = a.width && a.height ? a.height / a.width : 0.72;
    let target = cols[0];
    for (const c of cols) if (c.h < target.h) target = c;
    target.items.push(a);
    target.h += ratio;
  }
  return cols.map((c) => c.items);
}

export function MasonryGallery({
  assets,
  columns = 3,
  framed = false,
  limit,
}: {
  assets: Asset[];
  columns?: 2 | 3;
  framed?: boolean;
  limit?: number;
}) {
  const items = limit ? assets.slice(0, limit) : assets;
  const cols = distribute(items, columns);
  const gridClass =
    columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={cn("grid grid-cols-1 gap-4", gridClass)}>
      {cols.map((col, ci) => (
        <div key={ci} className="flex flex-col gap-4">
          {col.map((a) => (
            <figure
              key={a.src}
              className="group relative overflow-hidden rounded-2xl border border-line bg-bg-elevated shadow-card transition-transform duration-300 ease-expo hover:-translate-y-0.5"
            >
              {framed && (
                <div className="flex items-center gap-1.5 border-b border-line bg-bg-subtle px-3.5 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                </div>
              )}
              <img
                src={a.src}
                alt={a.caption}
                width={a.width}
                height={a.height}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="block h-auto w-full select-none"
              />
              {/* Transparent shield: intercepts right-click / drag / long-press so
                  the raw image can't be saved via the UI. */}
              <span
                aria-hidden
                className="absolute inset-0 z-10 cursor-default select-none"
              />
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
}
