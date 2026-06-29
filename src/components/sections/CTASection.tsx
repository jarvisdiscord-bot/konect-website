import { Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { site, waLink } from "@/lib/site";

export function CTASection({
  title = "Ready to secure your facility?",
  subtitle = "Get a free site assessment from Mumbai's trusted security partner. No obligation — just honest advice on what your building actually needs.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-accent">
      <Container className="py-16 md:py-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-xl leading-relaxed text-white/85">{subtitle}</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Button href="/contact" variant="secondary" size="lg" withArrow>
              Request a Quote
            </Button>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <a
              href={waLink("Hi Konect, I'd like a free security assessment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-7 py-3.5 text-base font-medium text-white transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
