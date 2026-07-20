import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

export function Section({
  className,
  containerClassName,
  children,
  id,
  ...props
}: React.HTMLAttributes<HTMLElement> & { containerClassName?: string }) {
  return (
    <section id={id} className={cn("py-20 md:py-30", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center mx-auto max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-1 w-1 rounded-full bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-display-lg text-balance text-fg">{title}</h2>
      {description && (
        <p className="text-lg leading-relaxed text-fg-muted text-pretty max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
