import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, FileText, PlayCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/reveal";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Playbooks, teardowns and guides on building predictable pipeline with growth infrastructure.",
};

const resources = [
  {
    icon: FileText,
    kind: "Guide",
    title: "The Growth Infrastructure Playbook",
    body: "Why systems beat tactics — and the seven layers that turn outreach into predictable pipeline.",
  },
  {
    icon: BookOpen,
    kind: "Teardown",
    title: "Anatomy of a message that gets a reply",
    body: "What separates hyper-personalized outreach from the cold email that lands in spam.",
  },
  {
    icon: PlayCircle,
    kind: "Walkthrough",
    title: "Inside the APX Growth Engine",
    body: "A guided tour of research, deliverability, follow-up and analytics working together.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Learn how predictable pipeline is built"
        description="Field-tested thinking on research, deliverability, personalization and follow-up. New material lands here regularly."
      />
      <Section>
        <RevealGroup className="grid gap-4 md:grid-cols-3">
          {resources.map((r) => (
            <RevealItem key={r.title}>
              <Link
                href="/contact"
                className="group flex h-full flex-col gap-5 rounded-3xl border border-line bg-bg-elevated p-7 transition-all duration-300 ease-expo hover:-translate-y-1 hover:border-line-strong hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-bg-subtle text-accent">
                    <r.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-fg-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                </div>
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-accent">{r.kind}</span>
                  <h3 className="mt-2 text-lg font-semibold text-fg">{r.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-fg-muted">{r.body}</p>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal className="mt-10">
          <p className="text-sm text-fg-subtle">
            Want something specific? <Link href="/contact" className="text-accent underline-offset-4 hover:underline">Ask us on a strategy call.</Link>
          </p>
        </Reveal>
      </Section>
      <CTA />
    </>
  );
}
