"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { EASE_EXPO } from "@/lib/motion";

const words = ["qualified meetings.", "predictable pipeline.", "booked revenue."];

export function Hero() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[600px] ambient-glow" />
        <div className="absolute inset-0 bg-grid" />
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <motion.a
          href="#growth-engine"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_EXPO }}
          className="group mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-bg-elevated/70 px-4 py-1.5 text-sm text-fg-muted backdrop-blur-sm transition-colors hover:border-line-strong"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span>Introducing the APX Growth Engine™</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_EXPO, delay: 0.05 }}
          className="max-w-4xl text-display-2xl text-balance text-fg"
        >
          <span className="block text-balance">Growth infrastructure that generates</span>
          {/* Rotating accent line: own line, wraps instead of clipping, height
              reserved by the longest phrase so nothing jumps as words swap. */}
          <span className="relative mt-1 block text-accent">
            <span aria-hidden className="invisible block">predictable pipeline.</span>
            <span className="absolute inset-0 overflow-hidden">
              <AnimatePresence>
                <motion.span
                  key={index}
                  initial={{ y: "0.5em", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-0.5em", opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE_EXPO }}
                  className="absolute inset-0 flex items-start justify-center text-balance"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_EXPO, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted text-pretty md:text-xl"
        >
          APX Labs builds AI-powered customer acquisition systems for local and
          commercial businesses — research, outreach, infrastructure and follow-up,
          engineered into one predictable pipeline. Not cold email. Growth infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_EXPO, delay: 0.25 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button href="/contact" size="lg">
            Book a strategy call
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/case-studies" variant="outline" size="lg">
            See the proof
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-5 text-sm text-fg-subtle"
        >
          Real campaigns. Real replies. Real booked meetings.
        </motion.p>

        {/* Hero visual — framed product surface */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: EASE_EXPO, delay: 0.35 }}
          className="mt-16 w-full max-w-5xl"
        >
          <HeroDashboard />
        </motion.div>
      </Container>
    </section>
  );
}

/** Abstract product surface — a stylized pipeline dashboard, not a stock illustration. */
function HeroDashboard() {
  const stages = [
    { label: "Researched", value: "1,000s", w: "100%" },
    { label: "Contacted", value: "Personalized", w: "82%" },
    { label: "Replied", value: "Positive", w: "46%" },
    { label: "Meetings", value: "Booked", w: "24%" },
  ];
  return (
    <div className="relative rounded-4xl border border-line bg-bg-elevated/80 p-3 shadow-lift backdrop-blur-xl">
      <div className="rounded-3xl border border-line bg-bg-subtle/60 p-6 md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-medium text-fg">Pipeline — live</span>
          </div>
          <span className="rounded-full border border-line bg-bg px-3 py-1 text-xs text-fg-subtle">
            APX Growth Engine™
          </span>
        </div>
        <div className="grid gap-3">
          {stages.map((s, i) => (
            <div key={s.label} className="flex items-center gap-4">
              <span className="w-24 shrink-0 text-left text-sm text-fg-muted">{s.label}</span>
              <div className="relative h-9 flex-1 overflow-hidden rounded-lg border border-line bg-bg">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: s.w }}
                  transition={{ duration: 1.1, ease: EASE_EXPO, delay: 0.6 + i * 0.12 }}
                  className="h-full rounded-lg bg-gradient-to-r from-accent/70 to-accent"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-xs font-medium text-fg">
                  {s.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
