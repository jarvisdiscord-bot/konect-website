import { Container } from "@/components/layout/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/site";

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-navy py-16">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <Container className="relative">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-bold text-gold md:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
