import type { Metadata } from "next";
import { CalendarCheck, Clock, Mail, MessageSquare, Phone, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with APX Labs to see how our growth infrastructure would generate qualified meetings for your business.",
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
      <Container className="max-w-3xl">
        <Reveal className="text-center">
          <span className="eyebrow mx-auto mb-5 justify-center">
            <span className="h-1 w-1 rounded-full bg-accent" />
            Contact
          </span>
          <h1 className="text-display-lg text-balance text-fg">Let&apos;s map your pipeline.</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-fg-muted">
            Reach out and we&apos;ll show you precisely how the APX Growth Engine would
            generate qualified meetings for your business.
          </p>
        </Reveal>

        {/* Email + phone — the focal point */}
        <Reveal delay={1} className="mx-auto mt-12 grid max-w-xl gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${site.email}`}
            className="group flex flex-col gap-4 rounded-3xl border border-line bg-bg-elevated p-7 transition-all duration-300 ease-expo hover:-translate-y-1 hover:border-line-strong hover:shadow-lift"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-bg-subtle text-accent transition-colors group-hover:border-accent/40 group-hover:bg-accent-soft">
              <Mail className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <span>
              <span className="block text-sm text-fg-subtle">Email us</span>
              <span className="mt-0.5 block break-all text-lg font-semibold text-fg">{site.email}</span>
            </span>
          </a>

          <a
            href={`tel:${site.phoneHref}`}
            className="group flex flex-col gap-4 rounded-3xl border border-line bg-bg-elevated p-7 transition-all duration-300 ease-expo hover:-translate-y-1 hover:border-line-strong hover:shadow-lift"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-bg-subtle text-accent transition-colors group-hover:border-accent/40 group-hover:bg-accent-soft">
              <Phone className="h-6 w-6" strokeWidth={1.75} />
            </span>
            <span>
              <span className="block text-sm text-fg-subtle">Call or text</span>
              <span className="mt-0.5 block text-lg font-semibold text-fg">{site.phone}</span>
            </span>
          </a>
        </Reveal>

        <Reveal delay={2} className="mt-6 flex items-center justify-center gap-2 text-sm text-fg-subtle">
          <Clock className="h-4 w-4" />
          Typically responds within one business day
        </Reveal>

        {/* What to expect */}
        <Reveal delay={2} className="mt-16 border-t border-line pt-14">
          <div className="grid gap-8 sm:grid-cols-3">
            {points.map((p) => (
              <div key={p.title} className="flex flex-col gap-3 text-center sm:text-left">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-bg-elevated text-accent sm:mx-0">
                  <p.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-semibold text-fg">{p.title}</h3>
                  <p className="mt-1 text-sm text-fg-muted">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
