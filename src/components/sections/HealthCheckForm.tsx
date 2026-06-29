"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, ShieldCheck, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { site, waLink } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const fieldCls =
  "w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-navy placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";
const labelCls = "mb-1.5 block text-sm font-medium text-white/90";

const benefits = [
  "Camera-by-camera status report",
  "DVR / NVR diagnostics",
  "Coverage & blind-spot analysis",
  "AMC cost comparison vs your current vendor",
];

export function HealthCheckForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", site.web3formsKey);
    data.append("subject", "Free CCTV Consultation request — konect.in");
    data.append("from_name", "Konect Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="health-check"
      className="relative overflow-hidden bg-navy py-16 text-white md:py-20"
    >
      <div className="absolute inset-0 bg-grid opacity-20" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Pitch */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
              <ShieldCheck className="h-4 w-4 text-gold" />
              Free · No obligation
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Book a free CCTV consultation for your society
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-white/70">
              A Konect engineer visits your society, checks every camera and
              recorder, and gives you a written report — plus an AMC proposal
              within 24 hours. No charge, no pressure.
            </p>
            <ul className="mt-7 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-white/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-light" />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={waLink(
                "Hi Konect, our society would like a free CCTV consultation.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" />
              Or WhatsApp us — {site.whatsappDisplay}
            </a>
          </div>

          {/* Form */}
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-accent-light" />
              <h3 className="mt-4 font-display text-xl font-semibold">
                Request received
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Thanks — we&apos;ll call to schedule your society&apos;s free
                consultation, usually within one business day.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-5 text-sm font-medium text-accent-light hover:underline"
              >
                Submit another society
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="society" className={labelCls}>
                    Society name
                  </label>
                  <input
                    id="society"
                    name="society"
                    required
                    className={fieldCls}
                    placeholder="e.g. Splendor Complex"
                  />
                </div>
                <div>
                  <label htmlFor="contact" className={labelCls}>
                    Contact person
                  </label>
                  <input
                    id="contact"
                    name="contact_person"
                    required
                    className={fieldCls}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className={labelCls}>
                    Mobile number
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    className={fieldCls}
                    placeholder="+91 ..."
                  />
                </div>
                <div>
                  <label htmlFor="cameras" className={labelCls}>
                    Number of cameras
                  </label>
                  <input
                    id="cameras"
                    name="cameras"
                    type="number"
                    min="1"
                    className={fieldCls}
                    placeholder="Approx."
                  />
                </div>
                <div>
                  <label htmlFor="vendor" className={labelCls}>
                    Existing vendor{" "}
                    <span className="text-white/40">(optional)</span>
                  </label>
                  <input
                    id="vendor"
                    name="existing_vendor"
                    className={fieldCls}
                    placeholder="If any"
                  />
                </div>
                <div>
                  <label htmlFor="visit" className={labelCls}>
                    Preferred visit date{" "}
                    <span className="text-white/40">(optional)</span>
                  </label>
                  <input
                    id="visit"
                    name="preferred_date"
                    type="date"
                    className={fieldCls}
                  />
                </div>
              </div>

              {status === "error" && (
                <p className="mt-4 text-sm text-red-300">
                  Something went wrong. Please call or WhatsApp us instead —{" "}
                  {site.phoneDisplay}.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-accent/30 transition-colors hover:bg-accent-dark disabled:opacity-70"
              >
                {status === "submitting" && (
                  <Loader2 className="h-4 w-4 animate-spin" />
                )}
                {status === "submitting"
                  ? "Sending…"
                  : "Book my free consultation"}
              </button>
              <p className="mt-3 text-center text-xs text-white/50">
                We&apos;ll only use these details to schedule your consultation.
              </p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
