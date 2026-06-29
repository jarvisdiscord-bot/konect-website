import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatsBand } from "@/components/sections/StatsBand";
import { WhyUs } from "@/components/sections/WhyUs";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Konect — Mumbai Security Company Since 2010",
  description:
    "Konect has secured Mumbai since 2010 — growing from residential societies to schools, hospitals and factories. 400+ customers, 200+ active AMCs, one standard.",
  alternates: { canonical: "/about" },
};

const quickFacts = [
  { value: "2010", label: "Founded" },
  { value: "Mumbai", label: "Headquartered" },
  { value: "8", label: "Services" },
  { value: "6", label: "Industries" },
];

const timeline = [
  {
    year: "2010",
    title: "It starts with the societies",
    body: "Konect begins by securing Mumbai's residential societies — with a simple promise: install security that actually keeps working.",
  },
  {
    year: "2011",
    title: "Into healthcare & industry",
    body: "A 120-camera hospital project at Umrao Hospitals (entrusted by Voltas) and early manufacturing installs like GM Fabrics broaden the work.",
  },
  {
    year: "2014",
    title: "Education, at scale",
    body: "497 cameras across 15 institutes at Rajasthani Sammelan — a flagship that's still running over a decade later.",
  },
  {
    year: "Growth",
    title: "300+ societies and beyond",
    body: "Word spreads building to building. Konect expands into commercial landmarks and MIDC industrial zones across the MMR.",
  },
  {
    year: "Today",
    title: "400+ customers, 200+ AMCs",
    body: "Still surveying every site ourselves, still backing every install with maintenance that keeps it recording for years.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Securing Mumbai since 2010"
        subtitle="A trusted neighbourhood expert that happens to handle 400-camera projects."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our story"
                title="The expert that grew up with Mumbai"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                <p>
                  Konect started in 2010 with a simple promise to Mumbai&apos;s
                  residential societies: install security that actually keeps
                  working. Word spread. Societies referred us to neighbouring
                  complexes, and within a few years we were securing schools,
                  hospitals and factories across the city and the wider MMR.
                </p>
                <p>
                  Today Konect looks after 400+ customers and more than 200
                  active maintenance contracts — but the promise hasn&apos;t
                  changed. We still survey every site ourselves, plan the wiring
                  to save you money, and back every installation with maintenance
                  that keeps it recording for years. The 497-camera system we
                  installed at Rajasthani Sammelan in 2014 still runs at 94%
                  uptime. That&apos;s the standard.
                </p>
              </div>
              <Button href="/projects" className="mt-7" withArrow>
                See our work
              </Button>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-light to-navy p-8 text-white">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="relative grid grid-cols-2 gap-6">
                {quickFacts.map((f) => (
                  <div key={f.label}>
                    <div className="font-display text-3xl font-bold text-gold">
                      {f.value}
                    </div>
                    <div className="mt-1 text-sm text-white/60">{f.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StatsBand />

      <section className="bg-surface py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Our journey" title="16 years, one standard" />
          <ol className="mx-auto mt-12 max-w-3xl">
            {timeline.map((t, i) => (
              <li key={t.year} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="mt-1 flex h-4 w-4 shrink-0 rounded-full bg-accent ring-4 ring-surface" />
                  {i < timeline.length - 1 && (
                    <span className="w-px flex-1 bg-line" />
                  )}
                </div>
                <div className="pb-10">
                  <div className="font-display text-sm font-bold text-accent">
                    {t.year}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-semibold text-navy">
                    {t.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {t.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <WhyUs />
      <CTASection />
    </>
  );
}
