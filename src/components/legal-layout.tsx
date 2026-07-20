import * as React from "react";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <article className="pt-36 pb-24 md:pt-44">
      <Container className="max-w-3xl">
        <header className="border-b border-line pb-8">
          <h1 className="text-display-lg text-fg">{title}</h1>
          <p className="mt-3 text-sm text-fg-subtle">Last updated: {updated}</p>
        </header>
        <div className="prose-legal mt-10 flex flex-col gap-8 leading-relaxed text-fg-muted [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-fg [&_h2]:mb-2 [&_p]:mb-0 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5 [&_a]:text-accent [&_a]:underline-offset-4 hover:[&_a]:underline">
          {children}
        </div>
        <footer className="mt-14 border-t border-line pt-8 text-sm text-fg-subtle">
          Questions about this policy? Contact us at{" "}
          <a href={`mailto:${site.email}`} className="text-accent underline-offset-4 hover:underline">
            {site.email}
          </a>
          .
        </footer>
      </Container>
    </article>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2>{heading}</h2>
      {children}
    </section>
  );
}
