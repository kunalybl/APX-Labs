import type { Variants, Transition } from "framer-motion";

/**
 * APX motion language.
 * Expo.out easing (0.16, 1, 0.3, 1) — the Apple/Linear "settle" curve.
 * Enter is calm; exit is faster. Nothing decorative, everything conveys hierarchy.
 */

export const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const transition = (duration = 0.6, delay = 0): Transition => ({
  duration,
  delay,
  ease: EASE_EXPO,
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...transition(0.7), delay: i * 0.08 },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: transition(0.8) },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  show: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ...transition(0.6), delay: i * 0.06 },
  }),
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export const viewportOnce = { once: true, margin: "-80px" } as const;
