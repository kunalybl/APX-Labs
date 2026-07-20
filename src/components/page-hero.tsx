import * as React from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-36 pb-16 md:pt-44 md:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[400px] ambient-glow opacity-70" />
        <div className="absolute inset-0 bg-grid" />
      </div>
      <Container>
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <span className="eyebrow mb-5">
              <span className="h-1 w-1 rounded-full bg-accent" />
              {eyebrow}
            </span>
          )}
          <h1 className="text-display-xl text-balance text-fg">{title}</h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted text-pretty">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
