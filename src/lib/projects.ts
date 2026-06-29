/**
 * Case-study data — now sourced from the Keystatic CMS (src/content/projects)
 * via the generated `content-data` module. Edit projects in the /keystatic
 * admin; this file just exposes the typed array + lookup helpers.
 */
import { projectsData } from "./content-data";

export type Vertical =
  | "Education"
  | "Healthcare"
  | "Manufacturing"
  | "Residential"
  | "Commercial"
  | "Sports & Recreation";

export interface Project {
  slug: string;
  name: string;
  vertical: Vertical;
  location: string;
  year?: number;
  /** Short stat string for cards, e.g. "497 cameras · 15 institutes". */
  statHighlight: string;
  /** One/two-line card summary. */
  summary: string;
  featured?: boolean;
  /** Unique hero/card photo. Omitted → branded stat panel instead. */
  heroImage?: string;
  /** Related service slugs (match lib/site.ts service slugs). */
  services: string[];
  challenge: string;
  solution: string;
  result: string;
  /** Key facts shown as a stat strip on the case-study page. */
  facts: { label: string; value: string }[];
  /** Optional extra photos shown in a gallery on the case-study page. */
  gallery?: string[];
}

export const projects = projectsData as unknown as Project[];

export const verticalOrder: Vertical[] = [
  "Education",
  "Healthcare",
  "Manufacturing",
  "Residential",
  "Commercial",
  "Sports & Recreation",
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function featuredProjects() {
  return projects.filter((p) => p.featured);
}

export function projectsByVertical(vertical: Vertical) {
  return projects.filter((p) => p.vertical === vertical);
}

/** Verticals that actually have at least one project (for filter chips). */
export function activeVerticals(): Vertical[] {
  return verticalOrder.filter((v) => projects.some((p) => p.vertical === v));
}
