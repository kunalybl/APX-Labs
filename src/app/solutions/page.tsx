import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { CTA } from "@/components/sections/cta";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Industry-specific growth infrastructure for commercial solar, roofing, HVAC and cleaning businesses.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Growth infrastructure, tuned to your industry"
        description="The same engine, calibrated to the way your buyers actually make decisions. Choose your industry to see the playbook."
      />
      <Section>
        <RevealGroup className="grid gap-4 md:grid-cols-2">
          {solutions.map((s) => (
            <RevealItem key={s.slug}>
              <Link
                href={`/solutions/${s.slug}`}
                className="group flex h-full flex-col justify-between gap-10 rounded-3xl border border-line bg-bg-elevated p-8 transition-all duration-300 ease-expo hover:-translate-y-1 hover:border-line-strong hover:shadow-lift"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-bg-subtle text-accent transition-colors group-hover:border-accent/40 group-hover:bg-accent-soft">
                    <s.icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-fg-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-fg">{s.name}</h2>
                  <p className="mt-2 max-w-md leading-relaxed text-fg-muted">{s.headline}</p>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>
      <CTA />
    </>
  );
}
