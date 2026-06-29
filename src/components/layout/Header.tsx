"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkCls =
    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy/95 shadow-lg shadow-navy/20 backdrop-blur"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center" aria-label="Konect — home">
          <Image
            src={site.logo}
            alt="Konect"
            width={200}
            height={58}
            className="h-8 w-auto md:h-9"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={linkCls}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/85 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <Button href="/contact" size="sm">
            Get a Quote
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </Container>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-navy-dark/70 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[84%] max-w-sm flex-col bg-navy shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <Image
              src={site.logo}
              alt="Konect"
              width={200}
              height={58}
              className="h-8 w-auto"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md p-2 text-white"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-3 text-base font-medium text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-3 border-t border-white/10 px-5 py-5">
            <a
              href={`tel:${site.phoneTel}`}
              className="flex items-center gap-2 text-sm font-medium text-white/85"
            >
              <Phone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <Button href="/contact" className="w-full">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
