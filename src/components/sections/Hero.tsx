"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/site";
import { homeHeroData } from "@/lib/content-data";

/** Real Konect install photos used in the cinematic strip — edited in the CMS. */
const heroStrip = homeHeroData.strip;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-glow" />

      <Container className="relative pt-28 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4 text-gold" />
            {homeHeroData.badge}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            {homeHeroData.headlinePrefix}{" "}
            <span className="text-accent-light">
              {homeHeroData.headlineAccent}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            {homeHeroData.subhead}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#health-check" size="lg" withArrow>
              Book a Free CCTV Consultation
            </Button>
            <Button href="/amc" size="lg" variant="outline">
              View AMC Plans
            </Button>
          </div>
        </div>

        {/* Centrepiece — oversized animated stats band */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:mt-16 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-navy/80 px-4 py-7 text-center backdrop-blur-sm md:py-9"
            >
              <div className="font-display text-4xl font-bold text-gold sm:text-5xl md:text-6xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-[11px] font-medium uppercase tracking-wide text-white/60 sm:text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Slim cinematic strip of real installs along the base */}
      <div className="relative mt-14 md:mt-16">
        <div className="grid grid-cols-3">
          {heroStrip.map((p) => (
            <div key={p.image} className="relative h-32 sm:h-44 md:h-60">
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="33vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-navy/45 mix-blend-multiply" />
            </div>
          ))}
        </div>
        {/* fade the top edge of the strip into the hero */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-navy to-transparent" />
      </div>
    </section>
  );
}
