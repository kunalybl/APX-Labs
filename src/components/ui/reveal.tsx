"use client";

import * as React from "react";
import { motion, useInView, type HTMLMotionProps } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Reveal on scroll, with a hard safety net.
 * `whileInView` (via useInView) drives the animation in normal browsers, but if
 * IntersectionObserver ever misbehaves we still reveal after a short timeout so
 * content is never trapped at opacity:0. Normal browsers reveal on scroll long
 * before the fallback fires.
 */
function useReveal() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [fallback, setFallback] = React.useState(false);

  React.useEffect(() => {
    const t = window.setTimeout(() => setFallback(true), 2200);
    return () => window.clearTimeout(t);
  }, []);

  return { ref, show: inView || fallback };
}

/** Scroll-reveal wrapper. Calm enter, respects reduced-motion via framer. */
export function Reveal({
  className,
  children,
  delay = 0,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number }) {
  const { ref, show } = useReveal();
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      animate={show ? "show" : "hidden"}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Staggered group — children should use RevealItem. */
export function RevealGroup({
  className,
  children,
  ...props
}: HTMLMotionProps<"div">) {
  const { ref, show } = useReveal();
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate={show ? "show" : "hidden"}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  className,
  children,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div className={cn(className)} variants={fadeUp} {...props}>
      {children}
    </motion.div>
  );
}
