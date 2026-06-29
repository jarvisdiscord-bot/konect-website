import { Quote } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonialsData as testimonials } from "@/lib/content-data";

export function Testimonials() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="What committees say"
          title="Trusted by society chairmen and secretaries"
          subtitle="The people who sign the cheques and answer to their residents — on what changed after switching to Konect."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.area} delay={i * 0.06} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-7">
                <Quote className="h-7 w-7 text-accent/30" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-line pt-4">
                  <span className="block text-sm font-semibold text-navy">
                    {t.role}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted">
                    {t.area}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
