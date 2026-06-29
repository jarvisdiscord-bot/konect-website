import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Konect — Security & Surveillance",
    short_name: "Konect",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0A1628",
    theme_color: "#0A1628",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
