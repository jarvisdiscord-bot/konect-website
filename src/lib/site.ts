/**
 * Global site constants. Editable content (company/contact details, stats,
 * services, clients, verticals) now comes from the Keystatic CMS via the
 * generated `content-data` module. Structural bits that don't need editing
 * (primary nav, the service-showcase image map, the AMC "why us" list, proof
 * images) stay in code here.
 */
import {
  siteData,
  statsData,
  servicesData,
  verticalsData,
  clientsData,
} from "./content-data";

export const site = {
  name: siteData.name,
  tagline: siteData.tagline,
  url: siteData.url,
  logo: "/images/existing/logo/konect-logo.png",
  foundedYear: 2010,
  description: siteData.description,

  phoneDisplay: siteData.phoneDisplay,
  phoneTel: siteData.phoneTel,
  whatsappDisplay: siteData.whatsappDisplay,
  whatsappNumber: siteData.whatsappNumber,
  email: siteData.email,
  hours: siteData.hours,
  owner: {
    name: "Karan Grover",
    phoneDisplay: "+91 96196 97796",
    phoneTel: "+919619697796",
  },
  web3formsKey: siteData.web3formsKey,

  address: {
    street: siteData.addressStreet,
    locality: siteData.addressLocality,
    region: siteData.addressRegion,
    postalCode: siteData.addressPostalCode,
    country: "IN",
  },
  geo: { lat: 19.1898756, lng: 72.8383905 },
  mapsLink: siteData.mapsLink,
  mapsEmbed: siteData.mapsEmbed,

  socials: { facebook: siteData.facebook },
};

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Hero / stats-bar headline numbers. */
export const stats = statsData;

export interface ServiceLink {
  slug: string;
  name: string;
  short: string; // one-liner for cards
  icon: string; // lucide-react icon name
  image?: string | null; // editable showcase photo (CMS); falls back to serviceImages
  keywords: string[];
}

export const services: ServiceLink[] = servicesData as ServiceLink[];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

/** Why housing societies trust Konect — AMC-focused trust section. */
export const whyUs = [
  {
    icon: "Headset",
    title: "Dedicated Helpdesk",
    body: "A real support desk that logs and routes every society complaint — not a number that rings out.",
  },
  {
    icon: "CalendarClock",
    title: "Quarterly Preventive Maintenance",
    body: "Scheduled visits to clean, focus and test every camera before a fault becomes a blind spot.",
  },
  {
    icon: "PhoneCall",
    title: "Call Tracking System",
    body: "Every service call is logged and tracked to resolution, so nothing slips through the cracks.",
  },
  {
    icon: "History",
    title: "Service History on Record",
    body: "A full maintenance and fault history for your society — proof of what was done, and when.",
  },
  {
    icon: "PackageCheck",
    title: "Standby Equipment Support",
    body: "Spare cameras, DVRs and power gear on hand to swap in fast and keep you recording.",
  },
  {
    icon: "Zap",
    title: "Fast Response Team",
    body: "A dedicated team that responds quickly when a society can't wait for the next business day.",
  },
];

/** Verticals served — homepage cards + industries page anchors. */
export interface VerticalInfo {
  slug: string;
  name: string;
  icon: string;
  stat: string;
  image?: string | null;
}
export const verticals = verticalsData as VerticalInfo[];

/** Full client roster — sourced from the CMS, rendered on white chips. */
export interface ClientLogo {
  name: string;
  src: string;
}

export const clientLogos: ClientLogo[] = clientsData as ClientLogo[];

/** Service-showcase photos, keyed by service slug. */
export const serviceImages: Record<string, string> = {
  cctv: "/images/existing/services/showcase/cctv.webp",
  "access-control": "/images/existing/services/showcase/access-control.webp",
  "time-attendance": "/images/existing/services/showcase/time-attendance.webp",
  "video-door-phone": "/images/existing/services/showcase/video-door-phone.webp",
  intercom: "/images/existing/services/showcase/intercom.webp",
  "pa-system": "/images/existing/services/showcase/pa-system.webp",
  "home-automation": "/images/existing/services/showcase/home-automation.webp",
  wireless: "/images/existing/services/showcase/wireless.webp",
};

/** Authentic proof photos pulled from Konect's real installs. */
export const proofImages = {
  controlRoom: "/images/projects/controlroom.webp",
  rack: "/images/projects/rack.webp",
  helpdesk: "/images/projects/helpdesk.webp",
};

/** Primary navigation. */
export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Clientele", href: "/clientele" },
  { label: "Industries", href: "/industries" },
  { label: "AMC", href: "/amc" },
] as const;
