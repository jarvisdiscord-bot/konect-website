import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  X,
  CalendarClock,
  Headset,
  PhoneCall,
  History,
  Workflow,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "CCTV AMC in Mumbai — Annual Maintenance Contracts",
  description:
    "Keep your cameras recording. Konect's CCTV AMC in Mumbai covers preventive maintenance, a dedicated helpdesk, on-call support and tracked resolution — 200+ active contracts.",
  alternates: { canonical: "/amc" },
};

const included = [
  {
    icon: CalendarClock,
    title: "Preventive maintenance",
    body: "Scheduled health checks catch a failing camera before it becomes a blind spot.",
  },
  {
    icon: Headset,
    title: "Dedicated helpdesk",
    body: "A real support desk to log and route every issue — not a number that rings out.",
  },
  {
    icon: PhoneCall,
    title: "On-call support",
    body: "Engineers on call for the situations that can't wait for the next business day.",
  },
  {
    icon: History,
    title: "Tracked resolution history",
    body: "Every call is logged, so recurring faults get permanently fixed — not patched again and again.",
  },
  {
    icon: Workflow,
    title: "Systematic servicing",
    body: "The same planned, methodical approach we bring to installation, applied to upkeep.",
  },
  {
    icon: ShieldCheck,
    title: "Verified uptime",
    body: "Maintained systems that stay live — like Rajasthani Sammelan's 94% over 10+ years.",
  },
];

const withoutAmc = [
  "Cameras fail silently — you find out when you need the footage",
  "Blind spots go unnoticed for months",
  "No record of past issues, so the same fault keeps returning",
  "Slow, ad-hoc fixes from whoever's available",
  "Footage gaps at the worst possible moment",
];

const withAmc = [
  "Scheduled checks catch faults early",
  "Dedicated helpdesk + on-call engineers",
  "Full resolution history — problems fixed for good",
  "Priority response for AMC clients",
  "Verified, dependable uptime",
];

const checklist = [
  "Quarterly preventive maintenance",
  "Camera cleaning",
  "Focus & angle adjustment",
  "Recording verification",
  "Backup & storage check",
  "Network & power check",
  "Written health report",
];

const plans = [
  {
    name: "Basic",
    tagline: "Essential upkeep for smaller societies",
    features: [
      "Quarterly preventive maintenance",
      "Camera cleaning, focus & angle checks",
      "Recording & backup verification",
      "Health report every visit",
      "Helpdesk support (business hours)",
    ],
    featured: false,
  },
  {
    name: "Standard",
    tagline: "Our most popular society cover",
    features: [
      "Everything in Basic",
      "Network, DVR/NVR & power health checks",
      "Priority response on logged faults",
      "Call tracking & full service history",
      "Standby equipment on request",
    ],
    featured: true,
  },
  {
    name: "Comprehensive",
    tagline: "Maximum uptime for large complexes",
    features: [
      "Everything in Standard",
      "More frequent scheduled checks",
      "Same-day priority response",
      "Minor part replacements included",
      "Annual review + dedicated account manager",
    ],
    featured: false,
  },
];

export default function AmcPage() {
  return (
    <>
      <PageHero
        eyebrow="Annual Maintenance Contracts"
        title="Your cameras are only as good as their maintenance"
        subtitle="200+ Mumbai facilities trust Konect to keep their systems recording. An AMC is the difference between footage when you need it — and a blind spot you didn't know you had."
        crumbs={[{ label: "Home", href: "/" }, { label: "AMC" }]}
      />

      {/* Proof band */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-surface p-8 text-center">
              <div className="font-display text-5xl font-bold text-accent">
                200+
              </div>
              <p className="mt-2 text-sm font-medium text-muted">
                Active AMCs running across Mumbai right now
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-8 text-center">
              <div className="font-display text-5xl font-bold text-gold">94%</div>
              <p className="mt-2 text-sm font-medium text-muted">
                Verified uptime at Rajasthani Sammelan over 10+ years
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What's included */}
      <section className="bg-surface py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="What's included"
            title="More than a phone number to call when it breaks"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Every visit covers */}
      <section className="relative overflow-hidden bg-navy py-16 md:py-20">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <Container className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="Every quarterly visit"
            title="What's included in a Konect maintenance visit"
          />
          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <Check className="h-5 w-5 shrink-0 text-accent-light" />
                <span className="text-sm font-medium text-white">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* AMC plans */}
      <section className="bg-surface py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="AMC plans"
            title="Pick the cover that fits your society"
            subtitle="Every plan is right-sized to your camera count and building — these are the typical tiers. Pricing is shared in your proposal."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "flex flex-col rounded-2xl border p-7",
                  plan.featured
                    ? "border-accent bg-navy text-white shadow-xl shadow-navy/20"
                    : "border-line bg-white",
                )}
              >
                {plan.featured && (
                  <span className="mb-3 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    Most popular
                  </span>
                )}
                <h3
                  className={cn(
                    "font-display text-2xl font-bold",
                    plan.featured ? "text-white" : "text-navy",
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    plan.featured ? "text-white/70" : "text-muted",
                  )}
                >
                  {plan.tagline}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={cn(
                        "flex gap-3 text-sm",
                        plan.featured ? "text-white/85" : "text-muted",
                      )}
                    >
                      <Check
                        className={cn(
                          "h-5 w-5 shrink-0",
                          plan.featured ? "text-accent-light" : "text-accent",
                        )}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={cn(
                    "mt-7 inline-flex items-center justify-center gap-1.5 rounded-lg px-5 py-3 text-sm font-semibold transition-colors",
                    plan.featured
                      ? "bg-accent text-white hover:bg-accent-dark"
                      : "border border-line text-navy hover:border-accent/40 hover:text-accent",
                  )}
                >
                  Request proposal
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Without vs With */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="The difference"
            title="Without an AMC vs with Konect"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-surface p-7">
              <h3 className="font-display text-lg font-semibold text-navy">
                Without an AMC
              </h3>
              <ul className="mt-5 space-y-3">
                {withoutAmc.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-muted">
                    <X className="h-5 w-5 shrink-0 text-red-500" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-accent/30 bg-navy p-7 text-white">
              <h3 className="font-display text-lg font-semibold">
                With a Konect AMC
              </h3>
              <ul className="mt-5 space-y-3">
                {withAmc.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-white/80">
                    <Check className="h-5 w-5 shrink-0 text-accent-light" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <Link
              href="/projects/rajasthani-sammelan"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40"
            >
              <p className="text-sm font-medium text-navy">
                See how a Konect AMC kept 497 cameras running at 94% uptime for
                over a decade.
              </p>
              <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-accent">
                Read case study
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </Container>
      </section>

      <CTASection
        title="Request an AMC quote"
        subtitle="Already have cameras — from us or someone else? We'll assess your system and propose an AMC that keeps it recording."
      />
    </>
  );
}
