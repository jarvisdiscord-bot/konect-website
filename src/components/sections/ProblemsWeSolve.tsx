import {
  CameraOff,
  HardDriveDownload,
  ArrowDownUp,
  MoonStar,
  CalendarX,
  Clock,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const problems = [
  {
    icon: CameraOff,
    title: "Cameras not recording",
    body: "You only discover a dead camera when you actually need the footage — and it isn't there.",
  },
  {
    icon: HardDriveDownload,
    title: "DVR / NVR failures",
    body: "Recorders quietly stop writing or overwrite too soon, leaving gaps no one notices for months.",
  },
  {
    icon: ArrowDownUp,
    title: "Elevator cameras dead",
    body: "The lift cameras committees care about most are often the first to fail and the last to be fixed.",
  },
  {
    icon: MoonStar,
    title: "Poor night vision",
    body: "Grainy, washed-out night footage that can't identify a face, a vehicle or a number plate.",
  },
  {
    icon: CalendarX,
    title: "No preventive maintenance",
    body: "Nobody cleans, focuses or tests the system until something has already gone wrong.",
  },
  {
    icon: Clock,
    title: "Frequent vendor delays",
    body: "Slow, ad-hoc support from whoever's free — days of follow-ups for a single fault.",
  },
];

export function ProblemsWeSolve() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Problems we solve"
          title="The CCTV headaches every society committee knows"
          subtitle="If your building runs cameras without a real maintenance contract, you've probably seen at least three of these."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
