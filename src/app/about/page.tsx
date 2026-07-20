import type { Metadata } from "next";
import { Compass, Gauge, Handshake, Layers } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "APX Labs builds growth infrastructure for local and commercial businesses — engineering predictable pipeline instead of selling cold email.",
};

const values = [
  { icon: Layers, title: "Systems over tactics", body: "A tactic works once. A system compounds. We build infrastructure that keeps producing after the setup is done." },
  { icon: Gauge, title: "Measured to revenue", body: "If it isn't measured from first touch to booked meeting, it isn't finished. Everything ties back to pipeline." },
  { icon: Handshake, title: "You own the asset", body: "Domains, inboxes, data and CRM are yours. We build equity in your business, not dependence on ours." },
  { icon: Compass, title: "Proof over promises", body: "We'd rather show you a real reply than quote a vanity metric. The work speaks first." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About APX Labs"
        title="We build the growth infrastructure most businesses never get to."
        description="Great local and commercial companies stay stuck on referrals and rising ad costs — not because they lack demand, but because building a real acquisition system is hard. We build it for them."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeader eyebrow="Why we exist" title="Growth should be a system, not a gamble." />
          </Reveal>
          <Reveal delay={1} className="flex flex-col gap-5 text-lg leading-relaxed text-fg-muted">
            <p>
              APX Labs builds AI-powered customer acquisition systems for local businesses.
              We combine prospect research, hyper-personalized outreach, email infrastructure,
              landing pages, CRM automation, follow-up and analytics into one engine.
            </p>
            <p>
              We are not selling cold email. We are building growth infrastructure — the kind
              of predictable, measurable pipeline that used to be reserved for companies with
              full in-house revenue teams.
            </p>
            <p className="text-fg">
              Our goal is simple: qualified meetings on your calendar, and a pipeline you can forecast.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-line bg-bg-subtle/40">
        <Reveal>
          <SectionHeader align="center" eyebrow="Principles" title="What we hold ourselves to" />
        </Reveal>
        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2">
          {values.map((v) => (
            <RevealItem key={v.title} className="card-hairline p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-bg-subtle text-accent">
                <v.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-fg">{v.title}</h3>
              <p className="mt-2 leading-relaxed text-fg-muted">{v.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTA />
    </>
  );
}
