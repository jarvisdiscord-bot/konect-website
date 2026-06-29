import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Security Services in Mumbai — CCTV, Access Control & More",
  description:
    "CCTV, biometric access control, intercom, PA systems, home automation and wireless surveillance — designed, installed and maintained across Mumbai by Konect.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything that keeps a building secure"
        subtitle="From cameras and access control to intercom, PA and home automation — designed, installed and maintained in-house by one team."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <ServicesShowcase showHeading />
      <CTASection
        title="Not sure which you need?"
        subtitle="Book a free site survey and we'll recommend exactly what your building needs — and nothing it doesn't."
      />
    </>
  );
}
