import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Konect — Security & CCTV in Mumbai",
  description:
    "Talk to Konect about CCTV, access control or AMC for your Mumbai facility. Call, WhatsApp, email or send an enquiry — free site survey available.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const details = [
    {
      icon: MapPin,
      label: "Office",
      value: `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`,
      href: undefined,
    },
    { icon: Phone, label: "Phone", value: site.phoneDisplay, href: `tel:${site.phoneTel}` },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: site.whatsappDisplay,
      href: waLink("Hi Konect, I'd like to enquire about your services."),
    },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Clock, label: "Hours", value: site.hours, href: undefined },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's secure your facility"
        subtitle="Tell us about your building and we'll get back within one business day — or reach us directly by phone or WhatsApp."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-surface py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy">
                Send us an enquiry
              </h2>
              <p className="mt-2 text-sm text-muted">
                No obligation — just honest advice on what your site needs.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy">
                Reach us directly
              </h2>
              <ul className="mt-6 space-y-4">
                {details.map((d) => (
                  <li
                    key={d.label}
                    className="flex gap-4 rounded-2xl border border-line bg-white p-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a
                          href={d.href}
                          target={d.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            d.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="mt-0.5 block font-medium text-navy transition-colors hover:text-accent"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 font-medium text-navy">{d.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 overflow-hidden rounded-2xl border border-line">
                <iframe
                  src={site.mapsEmbed}
                  title="Konect office location on Google Maps"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
