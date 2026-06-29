"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { ScrollToTop } from "./ScrollToTop";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";

/** Wraps marketing pages in the site chrome. The Keystatic admin (/keystatic)
 *  renders bare so its full-screen UI isn't boxed in by the header/footer. */
export function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/keystatic")) {
    return <>{children}</>;
  }
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}
