import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark to-navy" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <Container className="relative flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
        <p className="font-display text-7xl font-bold text-accent-light">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
          This page went off the grid
        </h1>
        <p className="mt-4 max-w-md text-white/70">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back to safety.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" withArrow>
            Back to home
          </Button>
          <Button href="/services" variant="outline">
            Browse services
          </Button>
        </div>
      </Container>
    </section>
  );
}
