import * as React from "react";
import { cn } from "@/lib/utils";

/** Infinite marquee. Duplicates children for a seamless -50% loop. Pauses on hover. */
export function Marquee({
  children,
  className,
  speed = 40,
  reverse = false,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  reverse?: boolean;
}) {
  return (
    <div className={cn("group flex overflow-hidden mask-fade-x", className)}>
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className="flex shrink-0 items-center gap-4 pr-4 [animation-play-state:running] group-hover:[animation-play-state:paused] motion-reduce:animate-none"
          style={{
            animation: `marquee ${speed}s linear infinite`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
