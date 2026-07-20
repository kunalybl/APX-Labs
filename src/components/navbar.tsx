"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav } from "@/data/site";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { cn } from "@/lib/utils";
import { EASE_EXPO } from "@/lib/motion";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-expo",
        scrolled
          ? "border-b border-line bg-bg/70 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/60"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-18">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.children ? item.href : null)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              </Link>

              <AnimatePresence>
                {item.children && activeMenu === item.href && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: EASE_EXPO }}
                    className="absolute left-0 top-full w-[320px] pt-3"
                  >
                    <div className="rounded-2xl border border-line bg-bg-elevated/95 p-2 shadow-lift backdrop-blur-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-bg-subtle"
                        >
                          <div className="text-sm font-medium text-fg">{child.label}</div>
                          {child.description && (
                            <div className="mt-0.5 text-xs text-fg-subtle">{child.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button href="/contact" variant="ghost" size="sm">
            Sign in
          </Button>
          <Button href="/contact" size="sm">
            Book a strategy call
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-fg md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="border-t border-line bg-bg px-6 py-6">
              <nav className="flex flex-col gap-1">
                {nav.map((item) => (
                  <div key={item.href} className="py-1">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-base font-medium text-fg"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-3 flex flex-col border-l border-line pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="py-2 text-sm text-fg-muted"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-3">
                <Button href="/contact" onClick={() => setOpen(false)} className="w-full">
                  Book a strategy call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
