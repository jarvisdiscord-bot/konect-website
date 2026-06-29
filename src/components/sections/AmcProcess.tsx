import {
  ClipboardCheck,
  FileText,
  FileSignature,
  CalendarCheck,
  Headset,
  LineChart,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Site Audit",
    body: "We inspect every camera, recorder and cable on site — no charge, no obligation.",
  },
  {
    icon: FileText,
    title: "System Health Report",
    body: "A clear written report of what's working, what's failing and what's at risk.",
  },
  {
    icon: FileSignature,
    title: "AMC Proposal",
    body: "A right-sized maintenance plan with transparent, itemised pricing — within 24 hours.",
  },
  {
    icon: CalendarCheck,
    title: "Quarterly Maintenance",
    body: "Scheduled visits to clean, focus, test and back up your entire system.",
  },
  {
    icon: Headset,
    title: "Call Support",
    body: "Log a fault any time — it's tracked through our helpdesk to resolution.",
  },
  {
    icon: LineChart,
    title: "Annual Performance Review",
    body: "A yearly review of uptime, faults fixed and what to plan or upgrade next.",
  },
];

export function AmcProcess() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our AMC solution"
          title="How a Konect AMC keeps your cameras recording"
          subtitle="A simple, accountable process — from the first free audit to a yearly performance review."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-3xl font-bold text-accent/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
