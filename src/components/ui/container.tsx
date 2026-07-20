import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  as: Comp = "div",
  ...props
}: React.HTMLAttributes<HTMLElement> & { as?: React.ElementType }) {
  return (
    <Comp
      className={cn("mx-auto w-full max-w-[1200px] px-6 md:px-8", className)}
      {...props}
    />
  );
}
