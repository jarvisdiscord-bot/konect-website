import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { CTASection } from "@/components/sections/CTASection";
import { Icon } from "@/components/ui/Icon";
import { verticals } from "@/lib/site";
import { projectsByVertical, type Vertical } from "@/lib/projects";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Industries We Serve — Mumbai Security by Sector",
  description:
    "Education, healthcare, manufacturing, residential, commercial and recreation — Konect tailors CCTV and security to how each Mumbai facility actually operates.",
  alternates: { canonical: "/industries" },
};

const info: Record<string, { blurb: string; also?: string }> = {
  education: {
    blurb:
      "From single schools to 15-institute campuses, Konect secures learning environments where coverage and uptime matter. Our flagship education deployment — 497 cameras at Rajasthani Sammelan — has run for over a decade.",
    also: "Also serving: SNDT Santacruz, Bhavans College, NL College, KAPOLE Schools and Gyankendra College.",
  },
  healthcare: {
    blurb:
      "Hospitals demand reliable, round-the-clock surveillance across patient, public and restricted areas. When Voltas needed a partner for Umrao Hospitals, they handed the project to Konect.",
    also: "Also serving: Kokilaben.",
  },
  manufacturing: {
    blurb:
      "Multi-plant industrial surveillance, often in MIDC zones, engineered to save wiring and let head office monitor remotely — like Styrotech's Ranjangaon plant, watched live from Mumbai.",
    also: "Also serving: GM Fabrics (2011).",
  },
  residential: {
    blurb:
      "Securing Mumbai's societies is where Konect started, and it's still our largest practice — from premium towers like Raheja Imperia to centrally-managed 32-society complexes.",
    also: "Plus 200+ societies including Laxmi Industries, Oshiwara estates, VIP Plaza and Shri Krishna Premises.",
  },
  commercial: {
    blurb:
      "Marquee commercial addresses and landmarks across Mumbai, including Roshan Spaces in Bandra — home to Asia's largest hoarding.",
  },
  "sports-recreation": {
    blurb:
      "Open grounds and recreational sites where conventional wiring isn't practical — covered with fully wireless networks, like KGS Grounds in Jogeshwari East.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Security shaped to how your facility works"
        subtitle="Every sector has different risks, layouts and rules. Here's how Konect secures each — with the real projects to back it up."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      {verticals.map((v, idx) => {
        const items = projectsByVertical(v.name as Vertical);
        const meta = info[v.slug];
        const dark = idx % 2 === 1;
        return (
          <section
            key={v.slug}
            id={v.slug}
            className={cn(
              "relative scroll-mt-24 overflow-hidden py-20 md:py-28",
              dark ? "bg-navy" : "bg-white",
            )}
          >
            {dark && <div className="absolute inset-0 bg-grid opacity-20" />}
            <Container className="relative">
              <div className="flex items-start gap-4">
                <span
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                    dark ? "bg-white/10 text-accent-light" : "bg-navy text-white",
                  )}
                >
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h2
                    className={cn(
                      "font-display text-2xl font-bold",
                      dark ? "text-white" : "text-navy",
                    )}
                  >
                    {v.name}
                  </h2>
                  <p
                    className={cn(
                      "mt-1 text-sm font-medium",
                      dark ? "text-accent-light" : "text-accent",
                    )}
                  >
                    {v.stat}
                  </p>
                </div>
              </div>

              <p
                className={cn(
                  "mt-5 max-w-3xl text-base leading-relaxed",
                  dark ? "text-white/70" : "text-muted",
                )}
              >
                {meta?.blurb}
              </p>

              {v.image && (
                <div className="relative mt-8 aspect-[16/6] overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={v.image}
                    alt={`${v.name} security by Konect`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-cover"
                  />
                  {dark && (
                    <div className="pointer-events-none absolute inset-0 bg-navy/20 mix-blend-multiply" />
                  )}
                </div>
              )}

              {items.length > 0 && (
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                  {items.map((p, i) => (
                    <ProjectCard key={p.slug} project={p} index={i} />
                  ))}
                </div>
              )}

              {meta?.also && (
                <p
                  className={cn(
                    "mt-6 text-sm",
                    dark ? "text-white/50" : "text-muted",
                  )}
                >
                  {meta.also}
                </p>
              )}
            </Container>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
