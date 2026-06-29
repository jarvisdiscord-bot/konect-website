import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { whyUs } from "@/lib/site";

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white md:py-20">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <Container className="relative">
        <SectionHeading
          tone="dark"
          eyebrow="Why Konect"
          title="Why 300+ societies trust Konect"
          subtitle="An AMC is only as good as the team behind it — this is what every society on a Konect contract gets."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-light">
                  <Icon name={w.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {w.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
