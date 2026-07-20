import * as React from "react";
import { cn } from "@/lib/utils";

/** Premium window chrome used to frame screenshots so raw assets look intentional. */
export function BrowserFrame({
  children,
  label = "campaign",
  className,
}: {
  children: React.ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-line bg-bg-elevated shadow-card",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-line bg-bg-subtle px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="ml-3 truncate text-xs text-fg-subtle">{label}</span>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
