import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { verticals } from "@/lib/site";

export function Verticals() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Industries we serve"
          title="Built for every kind of Mumbai facility"
          subtitle="Societies, schools, hospitals, factories and landmarks — each with security shaped to how it actually operates."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {verticals.map((v, i) => (
            <Reveal key={v.slug} delay={i * 0.05} className="h-full">
              <Link
                href={`/industries#${v.slug}`}
                className="group relative flex h-[200px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-light via-navy to-navy-dark p-6 text-white transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-navy/20"
              >
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="relative">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20 text-accent-light">
                    <Icon name={v.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold">
                    {v.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{v.stat}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
