import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";
import { projects, getProject } from "@/lib/projects";
import { getService } from "@/lib/site";
import { caseStudySchema, breadcrumbSchema } from "@/lib/schema";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.statHighlight}`,
    description: p.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${p.name} | Konect`,
      description: p.summary,
      url: `/projects/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const relatedServices = project.services
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const others = [
    ...projects.filter(
      (p) => p.slug !== slug && p.vertical === project.vertical,
    ),
    ...projects.filter(
      (p) => p.slug !== slug && p.vertical !== project.vertical,
    ),
  ].slice(0, 3);

  const blocks = [
    { label: "The challenge", body: project.challenge },
    { label: "Our solution", body: project.solution },
    { label: "The result", body: project.result },
  ];

  return (
    <>
      <JsonLd
        data={[
          caseStudySchema(project),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.name, path: `/projects/${slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow={project.vertical}
        title={project.name}
        subtitle={project.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.name },
        ]}
      />

      {/* Full-width hero — real photo, or a branded stat panel when no unique
          photo is available (no photo is ever reused across the site). */}
      <section className="bg-white pt-10 md:pt-12">
        <Container>
          {project.heroImage ? (
            <div className="relative h-[320px] w-full overflow-hidden rounded-2xl md:h-[460px]">
              <Image
                src={project.heroImage}
                alt={`${project.name} — CCTV installation by Konect`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent" />
            </div>
          ) : (
            <div className="relative flex h-[280px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy-light via-navy to-navy-dark md:h-[400px]">
              <div className="absolute inset-0 bg-grid opacity-50" />
              <p className="relative px-6 text-center font-display text-3xl font-bold text-white md:text-5xl">
                {project.statHighlight}
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* Meta + facts */}
      <section className="bg-white py-12 md:py-14">
        <Container>
          <p className="text-sm font-medium text-muted">
            {project.location}
            {project.year ? ` · Installed ${project.year}` : ""}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {project.facts.map((f) => (
              <div key={f.label} className="bg-white px-4 py-6 text-center">
                <div className="font-display text-2xl font-bold text-navy md:text-3xl">
                  {f.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="bg-white pb-8 md:pb-10">
          <Container>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((src, i) => (
                <div
                  key={src + i}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line"
                >
                  <Image
                    src={src}
                    alt={`${project.name} — photo ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Challenge / Solution / Result */}
      <section className="bg-surface py-16 md:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {blocks.map((b, i) => (
              <div
                key={b.label}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <span className="font-display text-4xl font-bold text-accent/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 font-display text-xl font-semibold text-navy">
                  {b.label}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {b.body}
                </p>
              </div>
            ))}
          </div>

          {relatedServices.length > 0 && (
            <div className="mt-12">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Services used
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {relatedServices.map((s) => (
                  <span
                    key={s.slug}
                    className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-navy"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* More projects */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-2xl font-bold text-navy">
              More projects
            </h2>
            <Button href="/projects" variant="ghost" withArrow>
              All projects
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {others.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Want results like these?"
        subtitle="Book a free site survey and we'll show you exactly how we'd secure your facility."
      />
    </>
  );
}
