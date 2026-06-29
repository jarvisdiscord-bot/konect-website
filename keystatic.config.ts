import { config, fields, collection, singleton } from "@keystatic/core";

const VERTICALS = [
  "Education",
  "Healthcare",
  "Manufacturing",
  "Residential",
  "Commercial",
  "Sports & Recreation",
] as const;

const SERVICE_OPTIONS = [
  { label: "CCTV Implementation & Support", value: "cctv" },
  { label: "Biometrics & Access Control", value: "access-control" },
  { label: "Time Attendance Systems", value: "time-attendance" },
  { label: "Video Door Phones", value: "video-door-phone" },
  { label: "Intercom Systems", value: "intercom" },
  { label: "Public Address Systems", value: "pa-system" },
  { label: "Home Automation", value: "home-automation" },
  { label: "Wireless Camera Systems", value: "wireless" },
];

export default config({
  // Local files while developing (fast, no login); Keystatic Cloud on the live
  // site so editors sign in via Cloud and edits commit to the repo + auto-deploy.
  storage:
    process.env.NODE_ENV === "development"
      ? { kind: "local" }
      : { kind: "cloud" },
  cloud: { project: "konect/konect-website" },
  ui: {
    brand: { name: "Konect CMS" },
    navigation: {
      Content: ["projects", "services", "clients", "testimonials"],
      "Site settings": ["siteSettings", "stats", "homeHero", "verticals"],
    },
  },
  collections: {
    projects: collection({
      label: "Projects / Case studies",
      slugField: "name",
      path: "src/content/projects/*",
      format: { data: "json" },
      columns: ["name", "vertical", "location"],
      schema: {
        name: fields.slug({
          name: { label: "Name" },
          slug: {
            label: "URL slug",
            description:
              "Used in the page address /projects/<slug>. Avoid changing it later.",
          },
        }),
        order: fields.integer({
          label: "Sort order",
          description: "Lower numbers appear first.",
          defaultValue: 100,
        }),
        vertical: fields.select({
          label: "Industry",
          options: VERTICALS.map((v) => ({ label: v, value: v })),
          defaultValue: "Residential",
        }),
        location: fields.text({ label: "Location", defaultValue: "Mumbai" }),
        year: fields.integer({
          label: "Year installed",
          validation: { isRequired: false },
        }),
        statHighlight: fields.text({
          label: "Headline stat (shown on the card)",
          description: 'e.g. "497 cameras · 15 institutes · 94% uptime"',
        }),
        summary: fields.text({ label: "Card summary (1–2 lines)", multiline: true }),
        featured: fields.checkbox({
          label: "Feature on the homepage",
          defaultValue: false,
        }),
        heroImage: fields.image({
          label: "Hero / card photo",
          description: "Optional — leave empty to show a branded stat panel instead.",
          directory: "public/images/projects",
          publicPath: "/images/projects/",
          validation: { isRequired: false },
        }),
        gallery: fields.array(
          fields.image({
            label: "Photo",
            directory: "public/images/projects",
            publicPath: "/images/projects/",
          }),
          { label: "More photos (gallery)", itemLabel: () => "Photo" },
        ),
        services: fields.array(
          fields.select({
            label: "Service",
            options: SERVICE_OPTIONS,
            defaultValue: "cctv",
          }),
          { label: "Services used", itemLabel: (p) => p.value },
        ),
        challenge: fields.text({ label: "Challenge", multiline: true }),
        solution: fields.text({ label: "Solution", multiline: true }),
        result: fields.text({ label: "Result", multiline: true }),
        facts: fields.array(
          fields.object({
            label: fields.text({ label: "Label" }),
            value: fields.text({ label: "Value" }),
          }),
          {
            label: "Key facts (stat strip)",
            itemLabel: (p) => `${p.fields.label.value}: ${p.fields.value.value}`,
          },
        ),
      },
    }),

    services: collection({
      label: "Services",
      slugField: "name",
      path: "src/content/services/*",
      format: { data: "json" },
      columns: ["name"],
      schema: {
        name: fields.slug({
          name: { label: "Name" },
          slug: {
            label: "URL slug",
            description: "Stable id used to link services to projects.",
          },
        }),
        order: fields.integer({
          label: "Sort order",
          description: "Lower numbers appear first.",
          defaultValue: 100,
        }),
        short: fields.text({ label: "One-line description", multiline: true }),
        image: fields.image({
          label: "Showcase photo",
          description: "Shown for this service on the /services page.",
          directory: "public/images/existing/services/showcase",
          publicPath: "/images/existing/services/showcase/",
          validation: { isRequired: false },
        }),
        icon: fields.text({
          label: "Icon name",
          description:
            "Lucide icon name, e.g. Cctv, Fingerprint, CalendarClock, Video, Network, Megaphone, House, RadioTower.",
        }),
        keywords: fields.array(fields.text({ label: "Keyword" }), {
          label: "SEO keywords",
          itemLabel: (p) => p.value,
        }),
      },
    }),

    clients: collection({
      label: "Clients (logos)",
      slugField: "name",
      path: "src/content/clients/*",
      format: { data: "json" },
      columns: ["name"],
      schema: {
        name: fields.slug({ name: { label: "Client name" } }),
        order: fields.integer({
          label: "Sort order",
          description: "Lower numbers appear first (recognisable brands lead the marquee).",
          defaultValue: 100,
        }),
        logo: fields.image({
          label: "Logo",
          directory: "public/images/existing/clients",
          publicPath: "/images/existing/clients/",
          validation: { isRequired: true },
        }),
      },
    }),

    testimonials: collection({
      label: "Testimonials",
      slugField: "label",
      path: "src/content/testimonials/*",
      format: { data: "json" },
      columns: ["label", "role"],
      schema: {
        label: fields.slug({
          name: { label: "Reference label" },
          slug: { description: "Internal id only — not shown on the site." },
        }),
        order: fields.integer({
          label: "Sort order",
          description: "Lower numbers appear first.",
          defaultValue: 100,
        }),
        quote: fields.text({ label: "Quote", multiline: true }),
        role: fields.text({ label: "Attributed role" }),
        area: fields.text({ label: "Area / location" }),
      },
    }),
  },

  singletons: {
    siteSettings: singleton({
      label: "Company & contact details",
      path: "src/content/settings/site",
      format: { data: "json" },
      schema: {
        name: fields.text({ label: "Company name", defaultValue: "Konect" }),
        tagline: fields.text({ label: "Tagline" }),
        url: fields.url({ label: "Site URL" }),
        description: fields.text({ label: "Meta description", multiline: true }),
        phoneDisplay: fields.text({ label: "Phone (display)" }),
        phoneTel: fields.text({ label: "Phone (tel: format)" }),
        whatsappDisplay: fields.text({ label: "WhatsApp (display)" }),
        whatsappNumber: fields.text({ label: "WhatsApp number (wa.me, no +)" }),
        email: fields.text({ label: "Email" }),
        hours: fields.text({ label: "Business hours" }),
        web3formsKey: fields.text({
          label: "Web3Forms access key",
          description: "From web3forms.com — powers the contact + enquiry forms.",
        }),
        addressStreet: fields.text({ label: "Address — street" }),
        addressLocality: fields.text({ label: "Address — city" }),
        addressRegion: fields.text({ label: "Address — state" }),
        addressPostalCode: fields.text({ label: "Address — postcode" }),
        mapsLink: fields.url({ label: "Google Maps link" }),
        mapsEmbed: fields.text({ label: "Google Maps embed URL", multiline: true }),
        facebook: fields.url({ label: "Facebook URL" }),
      },
    }),

    stats: singleton({
      label: "Headline stats (counters)",
      path: "src/content/settings/stats",
      format: { data: "json" },
      schema: {
        items: fields.array(
          fields.object({
            value: fields.integer({ label: "Number" }),
            suffix: fields.text({ label: "Suffix", defaultValue: "+" }),
            label: fields.text({ label: "Label" }),
          }),
          {
            label: "Stats",
            itemLabel: (p) => `${p.fields.value.value}${p.fields.suffix.value} ${p.fields.label.value}`,
          },
        ),
      },
    }),

    homeHero: singleton({
      label: "Homepage hero",
      path: "src/content/settings/home-hero",
      format: { data: "json" },
      schema: {
        badge: fields.text({ label: "Badge text" }),
        headlinePrefix: fields.text({ label: "Headline (start)" }),
        headlineAccent: fields.text({ label: "Headline (highlighted part)" }),
        subhead: fields.text({ label: "Sub-headline", multiline: true }),
        strip: fields.array(
          fields.object({
            image: fields.image({
              label: "Photo",
              directory: "public/images/projects",
              publicPath: "/images/projects/",
            }),
            alt: fields.text({ label: "Alt text" }),
          }),
          { label: "Photo strip (3 images)", itemLabel: (p) => p.fields.alt.value },
        ),
      },
    }),

    verticals: singleton({
      label: "Industries (verticals)",
      path: "src/content/settings/verticals",
      format: { data: "json" },
      schema: {
        items: fields.array(
          fields.object({
            slug: fields.text({ label: "Slug (anchor id)" }),
            name: fields.text({ label: "Name" }),
            icon: fields.text({ label: "Icon name (Lucide)" }),
            stat: fields.text({ label: "One-line stat" }),
            image: fields.image({
              label: "Photo (optional)",
              directory: "public/images/industries",
              publicPath: "/images/industries/",
              validation: { isRequired: false },
            }),
          }),
          { label: "Industries", itemLabel: (p) => p.fields.name.value },
        ),
      },
    }),
  },
});
