import {
  Cctv,
  Fingerprint,
  CalendarClock,
  Video,
  Network,
  Megaphone,
  House,
  RadioTower,
  Workflow,
  Headset,
  History,
  ShieldCheck,
  PhoneCall,
  Award,
  GraduationCap,
  HeartPulse,
  Factory,
  Building2,
  Store,
  Trophy,
  Zap,
  PackageCheck,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";

/** Maps the icon-name strings stored in lib/site.ts to lucide components. */
const map: Record<string, ComponentType<LucideProps>> = {
  Cctv,
  Fingerprint,
  CalendarClock,
  Video,
  Network,
  Megaphone,
  House,
  RadioTower,
  Workflow,
  Headset,
  History,
  ShieldCheck,
  PhoneCall,
  Award,
  GraduationCap,
  HeartPulse,
  Factory,
  Building2,
  Store,
  Trophy,
  Zap,
  PackageCheck,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? ShieldCheck;
  return <Cmp className={className} aria-hidden="true" />;
}
