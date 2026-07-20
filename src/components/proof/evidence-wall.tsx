import * as React from "react";
import type { Asset } from "@/lib/assets";
import { ProofPlaceholder } from "./proof-placeholder";
import { MasonryGallery } from "./masonry-gallery";
import { Reveal } from "@/components/ui/reveal";

/**
 * Wall of real proof (email replies, booked meetings, campaign stats).
 * Falls back to a tasteful placeholder grid until assets exist.
 */
export function EvidenceWall({
  assets = [],
  limit,
}: {
  assets?: Asset[];
  limit?: number;
}) {
  if (!assets.length) {
    const placeholders = [
      "Positive reply — commercial solar",
      "Booked meeting — roofing",
      "Campaign open rate",
      "Positive reply — HVAC",
      "Booked meeting — cleaning",
      "Reply-to-meeting thread",
    ];
    return (
      <div className="columns-1 gap-4 [&>*]:mb-4 sm:columns-2 lg:columns-3">
        {placeholders.map((label, i) => (
          <Reveal key={label} delay={i % 3} className="break-inside-avoid">
            <ProofPlaceholder
              label={label}
              aspect={i % 3 === 0 ? "aspect-[4/5]" : i % 2 === 0 ? "aspect-square" : "aspect-[4/3]"}
            />
          </Reveal>
        ))}
      </div>
    );
  }

  return <MasonryGallery assets={assets} columns={3} limit={limit} />;
}
