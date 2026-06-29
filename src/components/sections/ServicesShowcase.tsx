"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { services, serviceImages } from "@/lib/site";
import { cn } from "@/lib/cn";

export function ServicesShowcase({ showHeading = true }: { showHeading?: boolean }) {
  // exactly one service is always active (drives the stage + the open dropdown)
  const [active, setActive] = useState(services[0].slug);
  const cur = services.find((s) => s.slug === active) ?? services[0];
  const curImg = cur.image || serviceImages[cur.slug];

  return (
    <section className="bg-surface py-16 md:py-24">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="What we do"
            title="Security & automation, end to end"
            subtitle="Hover or tap a service to see what it covers. Every system below is designed, installed and maintained in-house."
          />
        )}

        <div
          className={cn(
            "grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.05fr_minmax(0,0.95fr)]",
            showHeading && "mt-12",
          )}
        >
          {/* Stage — large photo preview */}
          <div className="relative flex min-h-[380px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-light via-navy to-navy-dark text-white shadow-xl shadow-navy/20">
            <div className="relative flex-1 overflow-hidden bg-navy-dark">
              <motion.div
                key={cur.slug}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                {curImg && (
                  <Image
                    src={curImg}
                    alt={`${cur.name} by Konect`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover"
                  />
                )}
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-navy/25 mix-blend-multiply" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/15 to-transparent" />
            </div>

            <div className="relative z-10 border-t border-white/10 bg-gradient-to-t from-navy-dark/90 to-transparent px-6 py-6 sm:px-7">
              <span className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-light">
                In-house service
              </span>
              <h3 className="mt-2.5 font-display text-2xl font-semibold leading-tight tracking-tight">
                {cur.name}
              </h3>
            </div>
          </div>

          {/* Selectable list — text-only dropdown per row */}
          <div className="flex flex-col gap-2">
            {services.map((s) => {
              const isActive = s.slug === active;
              return (
                <div
                  key={s.slug}
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-colors duration-150",
                    isActive
                      ? "border-transparent bg-navy text-white shadow-lg shadow-navy/20"
                      : "border-line bg-white",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setActive(s.slug)}
                    onMouseEnter={() => setActive(s.slug)}
                    onFocus={() => setActive(s.slug)}
                    aria-expanded={isActive}
                    className="flex w-full items-center gap-3.5 p-3.5 text-left"
                  >
                    <span
                      className={cn(
                        "flex h-10 w-10 flex-none items-center justify-center rounded-xl transition-colors",
                        isActive
                          ? "bg-white/12 text-accent-light"
                          : "bg-accent/10 text-accent",
                      )}
                    >
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <span
                      className={cn(
                        "min-w-0 flex-1 font-display text-[15px] font-semibold leading-tight sm:text-base",
                        isActive ? "text-white" : "text-navy",
                      )}
                    >
                      {s.name}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-[18px] w-[18px] flex-none transition-transform duration-300",
                        isActive ? "rotate-180 text-accent-light" : "text-muted",
                      )}
                    />
                  </button>

                  {/* text-only dropdown (pure-CSS grid-rows height transition) */}
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-3.5 pb-3.5 pl-[3.7rem] text-sm leading-relaxed text-white/70">
                        {s.short}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
