import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 ease-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-fg shadow-[0_1px_0_0_hsl(0_0%_100%/0.15)_inset] hover:brightness-110 hover:shadow-glow active:scale-[0.98]",
        secondary:
          "bg-bg-elevated text-fg border border-line-strong hover:border-fg-subtle hover:bg-bg-subtle active:scale-[0.98]",
        ghost: "text-fg-muted hover:text-fg hover:bg-bg-subtle",
        outline:
          "border border-line-strong text-fg hover:bg-bg-subtle hover:border-fg-subtle active:scale-[0.98]",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-[0.95rem]",
        lg: "h-13 px-8 text-base h-[3.25rem]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);
    if (href) {
      const external = href.startsWith("http");
      if (external) {
        return (
          <a href={href} className={classes} target="_blank" rel="noreferrer">
            {props.children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {props.children}
        </Link>
      );
    }
    return <button ref={ref} className={classes} {...props} />;
  }
);
Button.displayName = "Button";

export { buttonVariants };
