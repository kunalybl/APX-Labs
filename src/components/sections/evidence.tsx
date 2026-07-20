import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { EvidenceWall } from "@/components/proof/evidence-wall";
import type { Asset } from "@/lib/assets";

export function Evidence({ proof }: { proof: Asset[] }) {
  return (
    <Section id="evidence" className="border-t border-line bg-bg-subtle/40">
      <Reveal>
        <SectionHeader
          align="center"
          eyebrow="Evidence wall"
          title="Positive replies. Booked meetings. Real inboxes."
          description="No vanity metrics, no borrowed logos. Just the receipts — every asset here loads directly from real campaigns."
        />
      </Reveal>
      <div className="mt-14">
        <EvidenceWall assets={proof} />
      </div>
    </Section>
  );
}
