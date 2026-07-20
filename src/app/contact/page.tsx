import type { Metadata } from "next";
import { CalendarCheck, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { CalendlyEmbed } from "@/components/calendly-embed";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Book a strategy call with APX Labs and see exactly how our growth infrastructure would generate qualified meetings for your business.",
};

const points = [
  { icon: MessageSquare, title: "We map your ICP", body: "Together we define exactly who your best customers are and where to find them." },
  { icon: CalendarCheck, title: "You see the system", body: "We walk through how the APX Growth Engine would run for your business." },
  { icon: ShieldCheck, title: "No pressure", body: "A working session, not a sales pitch. You leave with clarity either way." },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[400px] ambient-glow opacity-70" />
        <div className="absolute inset-0 bg-grid" />
      </div>
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow mb-5">
              <span className="h-1 w-1 rounded-full bg-accent" />
              Strategy call
            </span>
            <h1 className="text-display-lg text-balance text-fg">
              Let&apos;s map your pipeline.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-fg-muted">
              Tell us about your business and goals. We&apos;ll show you precisely how
              the APX Growth Engine would generate qualified meetings for you.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {points.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-bg-elevated text-accent">
                    <p.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-fg">{p.title}</h3>
                    <p className="mt-0.5 text-sm text-fg-muted">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-2 text-sm text-fg-subtle">
              <Clock className="h-4 w-4" />
              Typically responds within one business day · {site.email}
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="overflow-hidden rounded-3xl border border-line bg-bg-elevated p-1.5 shadow-card">
              <CalendlyEmbed url={site.calendly} height={760} className="overflow-hidden rounded-[1.35rem]" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
