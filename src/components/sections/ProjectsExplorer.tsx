"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/cn";
import { projects, activeVerticals, type Vertical } from "@/lib/projects";

type Filter = "All" | Vertical;

export function ProjectsExplorer() {
  const filters: Filter[] = ["All", ...activeVerticals()];
  const [active, setActive] = useState<Filter>("All");
  const shown =
    active === "All" ? projects : projects.filter((p) => p.vertical === active);

  return (
    <Container>
      <div className="flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === f
                ? "border-accent bg-accent text-white"
                : "border-line bg-white text-navy hover:border-accent/40 hover:text-accent",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </Container>
  );
}
