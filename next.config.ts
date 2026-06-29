import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Runs as a full Next app on Vercel (server runtime) so the Keystatic CMS
  // admin (/keystatic) + its API route can run. Marketing pages still prerender
  // as static/SSG; this also enables on-demand content updates.
  // No `trailingSlash` — Keystatic's admin router needs slash-less URLs.
  images: { unoptimized: true },
};

export default nextConfig;
