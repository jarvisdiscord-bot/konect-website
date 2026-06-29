import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-dark shadow-sm shadow-accent/30",
  secondary: "bg-navy text-white hover:bg-navy-light",
  outline: "border border-white/25 text-white hover:bg-white/10 backdrop-blur-sm",
  ghost: "text-navy hover:text-accent",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface ButtonProps {
  href?: string;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit";
  ariaLabel?: string;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const cls = cn(
    "group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );

  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    const external = /^(https?:|tel:|mailto:)/.test(href);
    if (external) {
      return (
        <a href={href} className={cls} aria-label={ariaLabel}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
