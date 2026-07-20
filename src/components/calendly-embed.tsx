"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";

/**
 * Calendly inline booking — direct iframe embed.
 * No third-party script injection: just an iframe (reliable everywhere, incl.
 * sandboxed previews). Theme params on `url` keep it blended with the dark UI.
 */
export function CalendlyEmbed({
  url,
  className,
  height = 720,
}: {
  url: string;
  className?: string;
  height?: number;
}) {
  const [loaded, setLoaded] = React.useState(false);

  // Ensure Calendly's inline embed params are present.
  const sep = url.includes("?") ? "&" : "?";
  const src = `${url}${sep}embed_domain=apx-ai.co&embed_type=Inline`;

  return (
    <div className={`relative ${className ?? ""}`} style={{ minHeight: height }}>
      <iframe
        src={src}
        title="Book a strategy call with APX Labs"
        width="100%"
        height={height}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{ border: 0, minWidth: 320 }}
        allow="fullscreen"
      />
      {!loaded && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center gap-2 text-sm text-fg-subtle">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading calendar…
        </div>
      )}
    </div>
  );
}
