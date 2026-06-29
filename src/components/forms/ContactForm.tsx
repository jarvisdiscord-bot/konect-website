"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services, site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const fieldCls =
  "w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-navy placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", site.web3formsKey);
    data.append("subject", "New enquiry from konect.in");
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

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-line bg-surface p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-accent" />
        <h3 className="mt-4 font-display text-xl font-semibold text-navy">
          Thanks — we&apos;ll be in touch
        </h3>
        <p className="mt-2 text-sm text-muted">
          Your enquiry has reached the Konect team. We typically reply within one
          business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-medium text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
            Name
          </label>
          <input id="name" name="name" required className={fieldCls} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={fieldCls}
            placeholder="+91 ..."
          />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldCls}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="location" className="mb-1.5 block text-sm font-medium text-navy">
            Site location
          </label>
          <input
            id="location"
            name="location"
            required
            className={fieldCls}
            placeholder="Society / building & area — e.g. Lower Parel, Mumbai"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy">
          Service of interest
        </label>
        <select id="service" name="service" className={fieldCls} defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="AMC">Annual Maintenance Contract (AMC)</option>
          <option value="Not sure">Not sure / general enquiry</option>
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="existing" className="mb-1.5 block text-sm font-medium text-navy">
          Existing systems on site
        </label>
        <textarea
          id="existing"
          name="existing_setup"
          rows={3}
          className={fieldCls}
          placeholder="Any cameras, recorders, access control or intercom already installed — with an approximate count, age and current vendor. If it's a new site, please note that."
        />
        <p className="mt-1.5 text-xs text-muted">
          Brand, approximate camera count, age and any current vendor help us scope accurately.
        </p>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
          Your requirements
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          required
          className={fieldCls}
          placeholder="New installation, AMC, upgrade or expansion — including any timelines, budget or specific concerns."
        />
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">
          Something went wrong sending your message. Please call or WhatsApp us
          instead — details are on the right.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white shadow-sm shadow-accent/30 transition-colors hover:bg-accent-dark disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
      <p className="mt-3 text-center text-xs text-muted">
        Prefer to talk? Call or WhatsApp — we respond fastest there.
      </p>
    </form>
  );
}
