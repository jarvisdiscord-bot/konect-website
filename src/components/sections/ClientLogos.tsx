import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { clientLogos } from "@/lib/site";

/** A single auto-scrolling logo row (duplicated for a seamless loop). */
function Marquee({
  items,
  reverse = false,
}: {
  items: typeof clientLogos;
  reverse?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div className="marquee-mask flex overflow-hidden">
      <div
        className="flex w-max shrink-0 animate-marquee items-center gap-4 hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {row.map((cl, i) => (
          <div
            key={`${cl.name}-${i}`}
            className="flex h-20 w-36 shrink-0 items-center justify-center rounded-xl border border-line bg-white px-5 shadow-sm"
          >
            <Image
              src={cl.src}
              alt={cl.name}
              width={140}
              height={64}
              className="max-h-12 w-auto max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClientLogos() {
  const featured = clientLogos.slice(0, 36);
  const half = Math.ceil(featured.length / 2);
  return (
    <section className="overflow-hidden border-y border-line bg-white py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Trusted By
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-navy md:text-3xl">
            90+ Mumbai organisations rely on Konect
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            From Amazon, Reliance and Tata Power to societies, hospitals,
            schools and restaurants across the city.
          </p>
        </div>
      </Container>

      <div className="mt-12 space-y-4">
        <Marquee items={featured.slice(0, half)} />
        <Marquee items={featured.slice(half)} reverse />
      </div>

      <Container>
        <div className="mt-10 flex justify-center">
          <Link
            href="/clientele"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-accent/40 hover:text-accent"
          >
            View all clients
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
