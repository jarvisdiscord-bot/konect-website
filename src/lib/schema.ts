/** Schema.org JSON-LD builders (India-localised). */
import { site } from "./site";
import type { Project } from "./projects";

const ORG_ID = `${site.url}/#organization`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": ORG_ID,
    name: site.name,
    url: site.url,
    image: `${site.url}/og.png`,
    logo: `${site.url}${site.logo}`,
    description: site.description,
    telephone: site.phoneDisplay,
    email: site.email,
    foundingDate: String(site.foundedYear),
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: [
      { "@type": "City", "name": "Mumbai" },
      { "@type": "State", "name": "Maharashtra" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    sameAs: [site.socials.facebook],
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.name,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "City", "name": "Mumbai" },
    url: `${site.url}/services/${opts.slug}`,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

export function caseStudySchema(p: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${p.name} — ${p.statHighlight}`,
    about: p.vertical,
    description: p.summary,
    creator: { "@id": ORG_ID },
    url: `${site.url}/projects/${p.slug}`,
  };
}
