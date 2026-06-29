# Konect Website Modernization — Complete Build Guide

## Project Overview

You are building a modern, high-converting B2B website for **Konect** (konect.in), a Mumbai-based security and surveillance solutions company founded in 2010. They are NOT a startup — they have 400+ customers, 300+ society installations, and 200+ active maintenance contracts. The current website is outdated and sits behind aggressive Cloudflare challenges. We are replacing it entirely.

**Goal:** A sleek, modern, trust-forward website that positions Konect as Mumbai's premier security solutions provider. Think premium B2B — not flashy, not cheap. Clean, authoritative, professional with enough personality to stand out from the generic CCTV installer sites.

**Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, Framer Motion for animations. Static export for deployment. No CMS needed initially — content is hardcoded for speed.

---

## Company Intelligence (USE THIS DATA EVERYWHERE)

### Core Services
| Service | Description |
|---------|-------------|
| **CCTV Implementation & Support** | End-to-end IP camera systems — design, installation, wiring, NVR config, remote monitoring. Projects from 16 to 497 cameras. |
| **Biometrics & Access Control** | Fingerprint, face recognition, card-based access. Corporate and residential. |
| **Time Attendance Systems** | Employee attendance tracking integrated with biometrics. |
| **Video Door Phones** | Residential and commercial intercom + video door entry. |
| **Intercom Systems** | Multi-building, multi-floor communication networks. |
| **Public Address (PA) Systems** | Campus-wide, hospital, and industrial PA installations. |
| **Home Automation** | Smart device integration, lighting control, automated security. |
| **Wireless Camera Systems** | Pole-mounted wireless networks, no-wiring solutions. |

### Hard Numbers (use these prominently)
- **400+ customers** served
- **300+ residential societies** installed
- **200+ running AMCs** (Annual Maintenance Contracts) — recurring trust
- **Founded 2010** — 16 years in business
- **94% uptime** on maintained systems (verified over 6+ years at Rajasthani Sammelan)

### Verticals Served
Education, Healthcare, Logistics, Hospitality, Manufacturing, Commercial Complexes, Residential Societies

### Key Project Case Studies (BUILD DEDICATED SECTIONS FOR THESE)

**Education — Rajasthani Sammelan (Flagship)**
- 497 cameras across 15 institutes
- Installed 2014, still running after 10+ years
- 94% uptime verified through AMC records
- Other education: SNDT Santacruz, KAPOLE Schools, NL College, Bhavans College, Gyankendra College

**Healthcare — Umrao Hospitals**
- Mira Road location
- Project offloaded to Konect by Voltas (major trust signal — Voltas trusted them)
- 120 cameras installed (2011)

**Residential — Navjiwan Chembur Sindhi Society**
- 32-society complex
- 8 NVRs, 110 cameras, centrally controlled
- Intelligent loop planning saved significant wiring
- Underground wiring for inter-society connectivity

**Residential — Splendor Complex JVLR**
- AMC of 250+ cameras
- 28 elevator cameras newly installed
- 40 new cameras added and counting (growing account)

**Premium Residential — Raheja Imperia, Lower Parel**
- 58 floors, 2 wings, 4 cameras per floor
- 406 cameras total
- Premium South Mumbai address

**Residential — Marathon Icon, Lower Parel**
- 149 cameras

**Manufacturing — GM Fabrics (2011)**
- Industrial surveillance

**Manufacturing — Shubhada Polymers, Lonavala**
- 4 plants, 32 cameras each (128 total)
- Full planning, wiring, and execution by Konect

**Manufacturing — Styrotech Industries, Ranjangaon**
- 64 IP cameras
- MIDC industrial zone
- All cameras visible at Mumbai office (remote monitoring showcase)
- Designed to save wiring and maintenance costs

**Manufacturing — Mandev Tubes, Umbergaon**
- Plant 1: 78 cameras, Plant 2: 48 cameras (126 total)

**Commercial — Roshan Spaces, Bandra**
- Asia's largest hoarding — marquee project

**Sports/Recreation — KGS Grounds, Jogeshwari East**
- Fully wireless camera network
- Wireless access point on every pole

**Other Societies:** 200+ residential complexes including Laxmi Industries, Oshiwara estates, VIP Plaza, Shri Krishna Premises, and more.

### Competitive Advantages (Page 22 of their profile)
- Systematic approach
- Helpdesk support system
- Call solving history (tracked resolution)
- Preventive maintenance programs
- On-call support system

---

## Site Architecture

```
/                       → Home (hero + stats + services overview + case studies + CTA)
/about                  → Company story, team, values, timeline since 2010
/services               → Services hub (card grid linking to individual service pages)
/services/cctv          → CCTV Implementation & Support
/services/access-control → Biometrics & Access Control
/services/time-attendance → Time Attendance Systems
/services/video-door-phone → Video Door Phones
/services/intercom      → Intercom Systems
/services/pa-system     → Public Address Systems
/services/home-automation → Home Automation
/services/wireless      → Wireless Camera Systems
/projects               → Case studies / portfolio grid
/projects/[slug]        → Individual case study pages
/industries             → Verticals served with relevant projects
/amc                    → Annual Maintenance Contract info (big selling point)
/contact                → Contact form, phone, email, Mumbai office address, Google Maps embed
```

---

## Design Direction

### Visual Identity
- **Color Palette:** Dark navy (#0A1628) as primary, electric blue (#2563EB) as accent, white/light gray for content areas, subtle gold (#D4A853) for premium touches on stats/awards
- **Typography:** Inter or Plus Jakarta Sans for body, Clash Display or Cabinet Grotesk for headings — clean, modern, professional
- **Photography style:** If using stock, choose dark/dramatic CCTV and security imagery. Real project photos where available (can be added later)

### Design Principles
1. **Trust-first:** Every section should build credibility. Numbers, client logos, project photos, uptime stats
2. **Scannable:** B2B buyers skim. Use stat blocks, icon grids, short paragraphs
3. **Premium but accessible:** Not a SaaS website. This is a service company. Warm professionalism
4. **Mobile-first:** Mumbai market is heavily mobile. Every page must work beautifully on phone
5. **Micro-interactions:** Subtle scroll animations, counter animations on stats, hover effects on project cards. NOT flashy — refined
6. **No stock photo heroes:** Use gradient/abstract backgrounds or real photos. Generic stock security guard photos scream cheap

### Hero Section (Homepage)
- Bold headline: something like "Securing Mumbai Since 2010" or "400+ Facilities. Zero Compromises."
- Animated stat counters: 400+ Customers | 300+ Societies | 200+ Active AMCs | 16 Years
- Single clear CTA: "Get a Free Security Audit" or "Request a Quote"
- NO carousel/slider — they're conversion killers

### Key UX Patterns
- Sticky header with transparent-to-solid scroll transition
- Service cards with icons (use Lucide or Phosphor icons)
- Project portfolio as a filterable masonry/grid by vertical
- Testimonial/case study sections with real numbers
- WhatsApp floating button (essential for Indian B2B)
- Footer with services sitemap, contact info, social links

---

## SEO Requirements

### Technical SEO
- All pages must have unique `<title>` tags and `<meta description>` tags
- Proper heading hierarchy (single H1 per page, H2/H3 structure)
- Schema.org LocalBusiness structured data on every page
- Schema.org Service structured data on service pages
- Open Graph and Twitter Card meta tags
- Canonical URLs
- XML sitemap generation
- robots.txt
- Image alt tags on ALL images
- Lazy loading on below-fold images
- Core Web Vitals optimized (LCP < 2.5s, CLS < 0.1, INP < 200ms)

### Content SEO — Target Keywords
- "CCTV installation Mumbai"
- "security camera installation Mumbai"
- "CCTV AMC Mumbai"
- "biometric access control Mumbai"
- "society CCTV installation"
- "IP camera installation services"
- "CCTV maintenance contract Mumbai"
- "home automation Mumbai"
- "PA system installation"
- "video door phone installation"

Each service page should naturally target its relevant keywords. Write actual helpful content, not keyword-stuffed garbage.

### Local SEO
- Google Business Profile integration
- NAP (Name, Address, Phone) consistency across the site
- Mumbai neighborhood mentions where relevant (Powai, Lower Parel, Bandra, Jogeshwari, Andheri, Chembur, etc.)
- Embed Google Maps on contact page

---

## Component Library (Build These)

```
components/
├── layout/
│   ├── Header.tsx          — Sticky nav, transparent→solid, mobile hamburger
│   ├── Footer.tsx          — Services sitemap, contact, social links
│   └── Container.tsx       — Max-width wrapper
├── sections/
│   ├── Hero.tsx            — Homepage hero with animated stats
│   ├── StatsBar.tsx        — Animated counter row (400+, 300+, 200+, 16yrs)
│   ├── ServicesGrid.tsx    — Icon cards linking to service pages
│   ├── ProjectCard.tsx     — Case study preview card
│   ├── ProjectGrid.tsx     — Filterable portfolio grid
│   ├── TestimonialSlider.tsx — Client testimonials
│   ├── CTASection.tsx      — Full-width call to action band
│   ├── ClientLogos.tsx     — Scrolling client logo bar
│   └── WhyUs.tsx           — Competitive advantages section
├── ui/
│   ├── Button.tsx          — Primary/secondary/outline variants
│   ├── Badge.tsx           — Service category badges
│   ├── AnimatedCounter.tsx — Number counter animation on scroll
│   └── SectionHeading.tsx  — Consistent heading + subtitle pattern
└── forms/
    └── ContactForm.tsx     — Name, email, phone, service interest, message
```

---

## Content Guidelines

- **Tone:** Professional but warm. Not corporate-stiff. Think "trusted neighborhood expert who happens to handle 400-camera projects"
- **No jargon without explanation:** If you mention NVR, briefly explain what it does
- **Numbers over adjectives:** "497 cameras across 15 institutes" beats "extensive camera network"
- **Mumbai-local language:** Reference neighborhoods, mention MIDC zones for industrial, mention "society" (Indian term for residential complex)
- **CTAs on every page:** Always give the visitor a next action — call, WhatsApp, contact form
- **Hindi/Marathi consideration:** Content in English but consider bilingual CTAs if appropriate

---

## Performance Requirements

- Lighthouse Performance score: 90+
- Lighthouse Accessibility score: 95+
- Lighthouse SEO score: 100
- First Contentful Paint: < 1.5s
- Total page weight: < 500KB (excluding images)
- All images: WebP format, responsive srcset, lazy loaded
- Fonts: Self-hosted, display:swap, subset to Latin
- Zero layout shift on load

---

## Deployment

- Static export via `next export` or Vercel
- Domain: konect.in
- SSL: Required (fix the current mixed HTTP/HTTPS issue)
- Remove aggressive Cloudflare challenge or whitelist legitimate traffic

---

## Quality Checks Before Delivery

- [ ] All pages responsive (test at 375px, 768px, 1024px, 1440px)
- [ ] All links work (no 404s)
- [ ] Contact form submits correctly
- [ ] WhatsApp button opens correct number
- [ ] All stat numbers match company data
- [ ] Schema.org validates (test with Google Rich Results Test)
- [ ] Open Graph previews look correct (test with opengraph.xyz)
- [ ] Lighthouse scores meet targets
- [ ] All images have alt text
- [ ] Sitemap generates correctly
- [ ] No console errors
- [ ] Dark mode support (nice to have, not required)
