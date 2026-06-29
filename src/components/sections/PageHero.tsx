import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";

export interface Crumb {
  label: string;
  href?: string;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark to-navy" />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-glow opacity-70" />
      <Container className="relative pb-16 pt-28 md:pb-20 md:pt-36">
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-white/50"
          >
            {crumbs.map((c, i) => (
              <span key={c.label} className="inline-flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                {c.href ? (
                  <Link
                    href={c.href}
                    className="transition-colors hover:text-white"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-light">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
