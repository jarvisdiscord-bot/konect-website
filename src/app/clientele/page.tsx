import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { clientLogos } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Clients — 90+ Mumbai Organisations",
  description:
    "From Amazon, Reliance, Tata Power and Samsung to Mumbai societies, hospitals, schools and restaurants — the organisations that trust Konect for security & surveillance.",
  alternates: { canonical: "/clientele" },
};

export default function ClientelePage() {
  return (
    <>
      <PageHero
        eyebrow="Clientele"
        title="Trusted across Mumbai"
        subtitle="Corporates, housing societies, hospitals, schools, hotels and restaurants — 90+ organisations rely on Konect for CCTV, access control and AMC."
        crumbs={[{ label: "Home", href: "/" }, { label: "Clientele" }]}
      />

      <section className="relative overflow-hidden bg-navy py-16 md:py-20">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <Container className="relative">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {clientLogos.map((cl) => (
              <div
                key={cl.name}
                className="flex h-28 items-center justify-center rounded-xl border border-line bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <Image
                  src={cl.src}
                  alt={cl.name}
                  width={170}
                  height={80}
                  className="max-h-16 w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Join 400+ Konect customers"
        subtitle="Book a free site survey and we'll show you exactly how we'd secure your facility."
      />
    </>
  );
}
