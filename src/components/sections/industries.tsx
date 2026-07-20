import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { industries } from "@/data/content";

export function Industries() {
  return (
    <Section id="industries" className="border-t border-line bg-bg-subtle/40">
      <Reveal>
        <SectionHeader
          eyebrow="Industries"
          title="Built for high-value service businesses"
          description="We specialize in industries where one meeting can be worth tens of thousands — and where a predictable pipeline changes everything."
        />
      </Reveal>

      <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind) => (
          <RevealItem key={ind.id}>
            <Link
              href={ind.href}
              className="group flex h-full flex-col justify-between gap-8 rounded-3xl border border-line bg-bg-elevated p-7 transition-all duration-300 ease-expo hover:-translate-y-1 hover:border-line-strong hover:shadow-lift"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-bg-subtle text-accent transition-colors group-hover:border-accent/40 group-hover:bg-accent-soft">
                  <ind.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <ArrowUpRight className="h-5 w-5 text-fg-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-fg">{ind.name}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-fg-muted">{ind.blurb}</p>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
