import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { techStack } from "@/data/content";

export function TechStack() {
  return (
    <Section id="technology" className="border-t border-line bg-bg-subtle/40">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal>
          <SectionHeader
            eyebrow="Technology"
            title="An engineered system, not a service you rent"
            description="Every layer is built on infrastructure you own and can measure. When you work with APX Labs, you're building an asset — not renting an audience."
          />
        </Reveal>

        <RevealGroup className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          {techStack.map((t) => (
            <RevealItem
              key={t.name}
              className="flex flex-col gap-1 bg-bg-elevated p-6 transition-colors hover:bg-bg-subtle"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <h3 className="font-semibold text-fg">{t.name}</h3>
              </div>
              <p className="pl-3.5 text-sm text-fg-muted">{t.note}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
