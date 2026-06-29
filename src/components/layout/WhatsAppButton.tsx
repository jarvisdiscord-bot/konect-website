"use client";

import { MessageCircle } from "lucide-react";
import { waLink, site } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={waLink("Hi Konect, I'd like a quote for a security system.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Konect on WhatsApp at ${site.whatsappDisplay}`}
      className="no-print fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform hover:scale-105"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}
