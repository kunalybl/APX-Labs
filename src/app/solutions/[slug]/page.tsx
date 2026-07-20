import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { solutions, solutionMap } from "@/data/solutions";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = solutionMap[params.slug];
  if (!s) return {};
  return { title: s.name, description: s.headline };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = solutionMap[params.slug];
  if (!solution) notFound();

  return (
    <>
      <PageHero eyebrow={`Solutions — ${solution.name}`} title={solution.headline} description={solution.subhead}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" size="lg">
            Book a strategy call
          </Button>
          <Button href="/case-studies" variant="outline" size="lg">
            See the proof
          </Button>
        </div>
      </PageHero>

      <Section>
        <Reveal>
          <SectionHeader eyebrow="Who it's for" title={solution.audience} />
        </Reveal>
        <RevealGroup className="mt-10 grid gap-4 md:grid-cols-3">
          {solution.outcomes.map((o) => (
            <RevealItem key={o.title} className="card-hairline p-7">
              <CheckCircle2 className="h-6 w-6 text-accent" strokeWidth={1.75} />
              <h3 className="mt-4 text-lg font-semibold text-fg">{o.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-fg-muted">{o.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section className="border-t border-line bg-bg-subtle/40">
        <Reveal>
          <SectionHeader
            eyebrow="The playbook"
            title="How the system runs for you"
            description="A repeatable, measured sequence — engineered once, compounding every cycle."
          />
        </Reveal>
        <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2">
          {solution.playbook.map((p, i) => (
            <RevealItem key={p.step} className="bg-bg-elevated p-8">
              <span className="font-mono text-sm text-fg-subtle">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-xl font-semibold text-fg">{p.step}</h3>
              <p className="mt-2 leading-relaxed text-fg-muted">{p.detail}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTA />
    </>
  );
}
