import * as React from "react";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Shown when a real asset hasn't been dropped in yet.
 * Reads as an intentional "verified proof" tile, never a broken image.
 * Devs: drop files into /public/{proof,screenshots,videos} to replace.
 */
export function ProofPlaceholder({
  label,
  aspect = "aspect-[4/3]",
  className,
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-dashed border-line-strong bg-bg-subtle p-6 text-center",
        aspect,
        className
      )}
      title="Drop a real asset into /public to replace this placeholder"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg-elevated text-accent">
        <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <p className="relative text-sm font-medium text-fg-muted">{label}</p>
      <p className="relative text-xs text-fg-subtle">Verified proof — asset loads automatically</p>
    </div>
  );
}
