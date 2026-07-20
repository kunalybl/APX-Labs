import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ScreenshotShowcase } from "@/components/proof/screenshot-showcase";
import type { Asset } from "@/lib/assets";

export function CaseStudies({ screenshots }: { screenshots: Asset[] }) {
  return (
    <Section id="case-studies">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <SectionHeader
            eyebrow="Case studies"
            title="The work, unedited"
            description="Real campaigns and dashboards from live client systems — not mockups. Drop your genuine screenshots in and they render here automatically."
          />
        </Reveal>
        <Reveal delay={1}>
          <Button href="/case-studies" variant="outline">
            View all case studies
          </Button>
        </Reveal>
      </div>

      <div className="mt-12">
        <ScreenshotShowcase assets={screenshots} limit={6} />
      </div>
    </Section>
  );
}
