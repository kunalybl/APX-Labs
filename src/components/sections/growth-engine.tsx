"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { engineSteps } from "@/data/content";
import { EASE_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function GrowthEngine() {
  const [active, setActive] = React.useState(0);
  const step = engineSteps[active];

  return (
    <Section id="growth-engine" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 ambient-glow opacity-60" />
      <Reveal>
        <SectionHeader
          align="center"
          eyebrow="The APX Growth Engine™"
          title="Seven systems. One predictable pipeline."
          description="Each layer compounds on the last — from finding the right decision-maker to booking the meeting on your calendar. This is what growth infrastructure actually means."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        {/* Step list */}
        <Reveal className="flex flex-col gap-1.5">
          {engineSteps.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "group relative flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ease-expo",
                  isActive
                    ? "border-line-strong bg-bg-elevated shadow-card"
                    : "border-transparent hover:bg-bg-subtle"
                )}
              >
                <span
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors",
                    isActive
                      ? "border-accent/40 bg-accent-soft text-accent"
                      : "border-line bg-bg-subtle text-fg-muted"
                  )}
                >
                  <s.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-fg-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-semibold text-fg">{s.name}</h3>
                  </div>
                  <p className="mt-0.5 truncate text-sm text-fg-muted">{s.summary}</p>
                </div>
                <ArrowRight
                  className={cn(
                    "h-4 w-4 shrink-0 transition-all",
                    isActive ? "translate-x-0 text-accent opacity-100" : "-translate-x-2 opacity-0"
                  )}
                />
              </button>
            );
          })}
        </Reveal>

        {/* Detail panel */}
        <Reveal delay={1} className="lg:sticky lg:top-24 lg:h-fit">
          <div className="card-hairline overflow-hidden p-8 shadow-card">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-fg">
                <step.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <span className="font-mono text-sm text-fg-subtle">
                Step {String(active + 1).padStart(2, "0")} / 07
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: EASE_EXPO }}
              >
                <h3 className="text-display-md text-fg">{step.name}</h3>
                <p className="mt-3 text-lg leading-relaxed text-fg-muted">{step.summary}</p>
                <p className="mt-4 leading-relaxed text-fg-muted">{step.detail}</p>
              </motion.div>
            </AnimatePresence>

            {/* Progress rail */}
            <div className="mt-8 flex gap-1.5">
              {engineSteps.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to step ${i + 1}`}
                  onClick={() => setActive(i)}
                  className="group flex-1 py-2"
                >
                  <span
                    className={cn(
                      "block h-1 rounded-full transition-colors",
                      i === active ? "bg-accent" : "bg-line group-hover:bg-line-strong"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
