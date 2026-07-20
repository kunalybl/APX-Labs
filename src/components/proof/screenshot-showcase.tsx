import * as React from "react";
import type { Asset } from "@/lib/assets";
import { BrowserFrame } from "./frame";
import { ProofPlaceholder } from "./proof-placeholder";
import { MasonryGallery } from "./masonry-gallery";
import { Reveal } from "@/components/ui/reveal";

/** Framed campaign screenshots — the "see the real thing" section. */
export function ScreenshotShowcase({
  assets = [],
  limit,
}: {
  assets?: Asset[];
  limit?: number;
}) {
  if (!assets.length) {
    const labels = ["Live campaign dashboard", "Sequence performance", "Reply feed"];
    return (
      <div className="grid gap-6 md:grid-cols-3">
        {labels.map((label, i) => (
          <Reveal key={label} delay={i}>
            <BrowserFrame label={`apxlabs — ${label.toLowerCase()}`}>
              <ProofPlaceholder label={label} aspect="aspect-[16/10]" className="rounded-none border-0" />
            </BrowserFrame>
          </Reveal>
        ))}
      </div>
    );
  }

  return <MasonryGallery assets={assets} columns={2} framed limit={limit} />;
}
