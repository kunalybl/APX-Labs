"use client";

import * as React from "react";
import { Play } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { Reveal } from "@/components/ui/reveal";

/**
 * YouTube video testimonials — lightweight facade.
 * Renders a branded thumbnail + play button; only loads the (privacy-enhanced,
 * no-cookie) iframe once the visitor clicks, so 4 videos never slow the page.
 */
function VideoCard({ item, index }: { item: Testimonial; index: number }) {
  const [playing, setPlaying] = React.useState(false);
  const thumb = `https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`;

  return (
    <Reveal delay={index % 2}>
      <figure className="overflow-hidden rounded-2xl border border-line bg-bg-elevated shadow-card">
        <div className="relative aspect-video w-full bg-black">
          {playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={`${item.name} — ${item.company} testimonial`}
              allow="accelerated-download; autoplay; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 h-full w-full cursor-pointer"
              aria-label={`Play testimonial from ${item.name}, ${item.company}`}
            >
              <img
                src={thumb}
                alt=""
                loading="lazy"
                draggable={false}
                className="h-full w-full select-none object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-fg shadow-lift transition-transform duration-300 ease-expo group-hover:scale-110">
                <Play className="ml-0.5 h-6 w-6 fill-current" strokeWidth={0} />
              </span>
            </button>
          )}
        </div>
        <figcaption className="flex items-center gap-3 border-t border-line px-5 py-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
            {item.name.charAt(0)}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-fg">{item.name}</span>
            <span className="block truncate text-xs text-fg-muted">
              {item.role ? `${item.role} · ` : ""}
              {item.company}
            </span>
          </span>
        </figcaption>
      </figure>
    </Reveal>
  );
}

export function VideoTestimonials() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {testimonials.map((t, i) => (
        <VideoCard key={t.youtubeId} item={t} index={i} />
      ))}
    </div>
  );
}
