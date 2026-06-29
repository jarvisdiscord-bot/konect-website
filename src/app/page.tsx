import { Hero } from "@/components/sections/Hero";
import { ProblemsWeSolve } from "@/components/sections/ProblemsWeSolve";
import { WhyUs } from "@/components/sections/WhyUs";
import { AmcProcess } from "@/components/sections/AmcProcess";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ProjectMap } from "@/components/sections/ProjectMap";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Testimonials } from "@/components/sections/Testimonials";
import { HealthCheckForm } from "@/components/sections/HealthCheckForm";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemsWeSolve />
      <WhyUs />
      <AmcProcess />
      <FeaturedProjects />
      <ProjectMap />
      <ClientLogos />
      <Testimonials />
      <HealthCheckForm />
      <CTASection
        title="Get an AMC proposal within 24 hours"
        subtitle="Tell us about your society's cameras and we'll send a right-sized maintenance plan with transparent pricing."
      />
    </>
  );
}
