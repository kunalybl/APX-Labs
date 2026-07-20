import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="APX Labs home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-fg text-bg transition-transform duration-300 ease-expo group-hover:scale-105">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2L3 20h4l5-11 5 11h4L12 2z"
            fill="currentColor"
          />
          <circle cx="12" cy="14.5" r="2.2" fill="currentColor" />
        </svg>
      </span>
      <span className="text-[1.05rem] font-semibold tracking-tight text-fg">
        APX<span className="text-fg-muted"> Labs</span>
      </span>
    </Link>
  );
}
