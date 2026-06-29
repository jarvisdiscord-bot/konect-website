import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Container } from "./Container";
import { nav, services, site, waLink } from "@/lib/site";

const company = nav.filter((n) =>
  ["About", "Projects", "Clientele", "Industries", "AMC", "Contact"].includes(
    n.label,
  ),
);

// Konect's only social account is Facebook — inline simple-icons path.
const facebookPath =
  "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Image
              src={site.logo}
              alt="KONECT - Training and Technical Services"
              width={240}
              height={70}
              className="h-10 w-auto md:h-12"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              {site.description}
            </p>
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 py-2 pl-2 pr-4 text-sm font-medium text-white/85 transition-colors hover:bg-accent hover:text-white"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d={facebookPath} />
                </svg>
              </span>
              Follow us on Facebook
            </a>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug} className="text-sm text-white/65">
                  {s.name}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-4 inline-block text-sm font-medium text-accent-light transition-colors hover:underline"
            >
              View all services →
            </Link>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-white/65 transition-colors hover:text-accent-light"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
                <a
                  href={site.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent-light"
                >
                  {site.address.street}, {site.address.locality},{" "}
                  {site.address.region} {site.address.postalCode}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-accent-light"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent-light" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-accent-light"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent-light" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={waLink("Hi Konect, I'd like to know more about your services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-accent-light"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-accent-light" />
                  WhatsApp {site.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-accent-light" />
                {site.hours}
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Securing Mumbai since {site.foundedYear}.</p>
        </Container>
      </div>
    </footer>
  );
}
