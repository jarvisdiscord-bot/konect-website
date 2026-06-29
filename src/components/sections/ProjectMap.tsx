"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const sites = [
  { name: "Rajasthani Sammelan", area: "15 institutes · Mumbai", stat: "497 cameras", desc: "Education-campus surveillance, 94% uptime over 10+ years.", slug: "rajasthani-sammelan", x: 140, y: 115 },
  { name: "Umrao Hospitals", area: "Mira Road", stat: "120 cameras", desc: "Hospital-wide CCTV, executed as project partner for Voltas.", slug: "umrao-hospitals", x: 132, y: 72 },
  { name: "KGS Grounds", area: "Jogeshwari East", stat: "Fully wireless", desc: "Pole-mounted wireless camera network across open grounds.", slug: "kgs-grounds", x: 126, y: 165 },
  { name: "Splendor Complex", area: "JVLR", stat: "250+ cameras · AMC", desc: "A growing AMC — 28 elevator and 40 new cameras added.", slug: "splendor-complex", x: 160, y: 188 },
  { name: "Roshan Spaces", area: "Bandra", stat: "Commercial landmark", desc: "Surveillance for a marquee Bandra commercial address.", slug: "roshan-spaces", x: 132, y: 238 },
  { name: "Navjiwan Society", area: "Chembur", stat: "110 cams · 32 societies", desc: "Centrally controlled across a 32-society township on 8 NVRs.", slug: "navjiwan-society", x: 188, y: 252 },
  { name: "Raheja Imperia", area: "Lower Parel", stat: "406 cameras · 58 floors", desc: "High-rise coverage across two towers, four cameras per floor.", slug: "raheja-imperia", x: 138, y: 332 },
  { name: "Marathon Icon", area: "Lower Parel", stat: "149 cameras", desc: "Full common-area coverage for a Lower Parel residential tower.", slug: "marathon-icon", x: 152, y: 356 },
];

export function ProjectMap() {
  const [sel, setSel] = useState(0);
  const p = sites[sel];
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white md:py-20">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <Container className="relative">
        <SectionHeading
          tone="dark"
          eyebrow="Our work across Mumbai"
          title="Securing societies and sites all over the city"
          subtitle="A few of the places Konect keeps recording — from Mira Road to Lower Parel. Tap a pin to see the project."
        />
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-[300px]">
            <svg viewBox="0 0 300 460" className="w-full">
              <path
                d="M150 50 C182 42 210 54 224 78 C239 102 241 128 233 150 C227 168 208 168 207 188 C206 208 225 216 219 240 C214 268 203 296 198 322 C193 348 189 367 177 385 C167 401 157 412 147 417 C140 420 133 416 129 404 C124 388 125 366 119 342 C113 316 106 294 107 268 C108 242 119 222 110 198 C103 176 96 156 102 134 C107 114 100 98 108 84 C113 73 104 64 113 58 C121 51 134 52 141 59 C145 50 147 50 150 50 Z"
                fill="#15294a"
                stroke="#33507f"
                strokeWidth="1.5"
              />
              {sites.map((s, i) => {
                const on = i === sel;
                return (
                  <g
                    key={s.slug}
                    className="cursor-pointer"
                    onClick={() => setSel(i)}
                  >
                    {on && (
                      <circle cx={s.x} cy={s.y} r="16" fill="#2563eb" opacity="0.25" />
                    )}
                    <circle
                      cx={s.x}
                      cy={s.y}
                      r={on ? 9 : 6}
                      fill={on ? "#d4a853" : "#3b82f6"}
                      stroke="#0a1628"
                      strokeWidth="1.5"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative h-48 w-full sm:h-52">
                <Image
                  key={p.slug}
                  src={`/images/projects/${p.slug}.webp`}
                  alt={`${p.name} — Konect installation in ${p.area}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
              </div>
              <div className="p-7 pt-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-light">
                {p.area}
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold">{p.name}</h3>
              <p className="mt-2 flex items-center gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-accent-light" />
                {p.area}
              </p>
              <span className="mt-4 inline-flex rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold text-accent-light">
                {p.stat}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {p.desc}
              </p>
              <Link
                href={`/projects/${p.slug}`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-light hover:underline"
              >
                View case study
                <ArrowRight className="h-4 w-4" />
              </Link>
              </div>
            </div>
            <p className="mt-4 text-xs text-white/40">
              8 of 300+ societies &amp; sites secured across Mumbai.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
