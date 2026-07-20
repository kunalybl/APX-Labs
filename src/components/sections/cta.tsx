import * as React from "react";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute inset-x-0 bottom-0 top-1/4 ambient-glow" />
      </div>
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow mx-auto justify-center">
            <span className="h-1 w-1 rounded-full bg-accent" />
            Start here
          </span>
          <h2 className="mt-5 text-display-xl text-balance text-fg">
            Let&apos;s build your pipeline.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-fg-muted text-pretty">
            Book a strategy call and we&apos;ll map exactly how the APX Growth Engine
            would generate qualified meetings for your business. No pressure, no obligation.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              <CalendarCheck className="h-4 w-4" />
              Book a strategy call
            </Button>
            <Button href="/case-studies" variant="outline" size="lg">
              See the proof first
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-6 text-sm text-fg-subtle">
            Typically responds within one business day.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
