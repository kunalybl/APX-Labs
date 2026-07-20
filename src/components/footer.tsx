import * as React from "react";
import Link from "next/link";
import { footerNav, site } from "@/data/site";
import { Logo } from "./logo";
import { Container } from "./ui/container";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg-subtle">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-fg-muted">
              {site.description}
            </p>
            <Button href="/contact" variant="secondary" size="sm" className="w-fit">
              Book a strategy call
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.title} className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-fg-subtle">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-fg-muted transition-colors hover:text-fg"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-sm text-fg-subtle sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="max-w-md text-xs leading-relaxed text-fg-subtle">
            APX Labs provides growth infrastructure and marketing services. Results
            vary by market, offer, and sales execution.
          </p>
        </div>
      </Container>
    </footer>
  );
}
