import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { StatsBand } from "@/components/sections/StatsBand";
import { ProjectsExplorer } from "@/components/sections/ProjectsExplorer";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Projects & Case Studies — Mumbai Security Installations",
  description:
    "Real Konect deployments across Mumbai — from a 497-camera education campus to wireless coverage of open grounds. Filter case studies by industry.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Proof in numbers, across Mumbai"
        subtitle="Every figure below is from a real installation — societies, schools, hospitals, factories and landmarks we've secured since 2010."
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />
      <StatsBand />
      <section className="bg-surface py-20 md:py-28">
        <ProjectsExplorer />
      </section>
      <CTASection />
    </>
  );
}
