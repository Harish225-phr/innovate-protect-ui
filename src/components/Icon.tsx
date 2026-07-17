import {
  Code, Play, Cpu, ShieldCheck, Hammer, Settings, Sparkles,
  Heart, Banknote, GraduationCap, Factory, ShoppingBag, Trophy,
  Film, Hotel, Building2, Truck, type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  code: Code,
  play: Play,
  cpu: Cpu,
  shield: ShieldCheck,
  hammer: Hammer,
  settings: Settings,
  sparkles: Sparkles,
  heart: Heart,
  banknote: Banknote,
  graduation: GraduationCap,
  factory: Factory,
  shopping: ShoppingBag,
  trophy: Trophy,
  film: Film,
  hotel: Hotel,
  building: Building2,
  truck: Truck,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = MAP[name] ?? Sparkles;
  return <C className={className} />;
}
