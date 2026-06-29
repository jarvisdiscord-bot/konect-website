import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Max-width 1280px wrapper with responsive gutters. */
export function Container({
  children,
  className,
  as,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  const Tag = as ?? "div";
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Tag>
  );
}
