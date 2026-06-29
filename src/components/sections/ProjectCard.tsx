import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Reveal delay={index * 0.06} className="h-full">
      <Link
        href={`/projects/${project.slug}`}
        className="group relative flex h-full min-h-[20rem] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 text-white transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-navy/30"
      >
        {project.heroImage ? (
          <>
            {/* Real installation photo */}
            <Image
              src={project.heroImage}
              alt={`${project.name} — CCTV installation by Konect`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/25 transition-opacity duration-300 group-hover:opacity-75" />
          </>
        ) : (
          <>
            {/* Branded stat panel (no photo reuse) */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-light via-navy to-navy-dark" />
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="absolute right-5 top-5 text-accent/30">
              <ShieldCheck className="h-12 w-12" />
            </div>
            <p className="absolute left-6 right-6 top-6 font-display text-2xl font-bold leading-tight text-white/90">
              {project.statHighlight}
            </p>
          </>
        )}

        <div className="relative p-6">
          <div className="flex items-center justify-between gap-3">
            <Badge className="bg-accent/25 text-white backdrop-blur-sm">
              {project.vertical}
            </Badge>
            <span className="text-xs text-white/70">{project.location}</span>
          </div>
          <h3 className="mt-4 font-display text-xl font-semibold">
            {project.name}
          </h3>
          {project.heroImage && (
            <p className="mt-2 text-sm font-semibold text-gold">
              {project.statHighlight}
            </p>
          )}
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            {project.summary}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-light">
            View case study
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
