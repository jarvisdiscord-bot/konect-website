import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "./ProjectCard";
import { projects, type Project } from "@/lib/projects";

/** The six written-up case studies, in presentation order. */
const caseStudySlugs = [
  "rajasthani-sammelan",
  "raheja-imperia",
  "navjiwan-society",
  "umrao-hospitals",
  "splendor-complex",
  "styrotech-industries",
];

const items = caseStudySlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is Project => Boolean(p));

export function FeaturedProjects() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Case studies"
            title="Societies and facilities we keep running"
            subtitle="From a 32-society township to a 406-camera tower — real Konect deployments, still maintained today."
          />
          <Button href="/projects" variant="ghost" withArrow className="shrink-0">
            All case studies
          </Button>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
