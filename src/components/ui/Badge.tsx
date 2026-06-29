import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
