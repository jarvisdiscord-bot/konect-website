"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="no-print fixed bottom-24 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white shadow-lg shadow-black/25 ring-1 ring-white/15 transition-transform hover:scale-105"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
