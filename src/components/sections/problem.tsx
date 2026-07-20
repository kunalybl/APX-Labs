import * as React from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { problems } from "@/data/content";

export function Problem() {
  return (
    <Section id="problem">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal>
          <SectionHeader
            eyebrow="The problem"
            title={
              <>
                Most local businesses don&apos;t have a{" "}
                <span className="text-fg-muted">pipeline problem.</span> They have an{" "}
                <span className="text-accent">infrastructure problem.</span>
              </>
            }
            description="Great companies stay dependent on referrals and rising ad costs because building a real acquisition system is hard. So growth stays unpredictable — feast or famine."
          />
        </Reveal>

        <RevealGroup className="flex flex-col gap-4">
          {problems.map((p) => (
            <RevealItem
              key={p.title}
              className="card-hairline p-6 transition-colors hover:border-line-strong"
            >
              <div className="flex items-start gap-5">
                <span className="mt-0.5 shrink-0 rounded-full border border-line bg-bg-subtle px-3 py-1 text-xs font-medium text-fg-muted">
                  {p.stat}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-fg">{p.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-fg-muted">
                    {p.body}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
