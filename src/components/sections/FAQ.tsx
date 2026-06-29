import { ChevronDown } from "lucide-react";

/** No-JS accordion using native <details> — works in static export, accessible. */
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
      {items.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-base font-semibold text-navy sm:p-6">
            {f.q}
            <ChevronDown className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-180" />
          </summary>
          <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6 sm:pb-6">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}
