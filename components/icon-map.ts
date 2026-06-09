import {
  AirVent,
  BadgeCheck,
  Building2,
  CalendarCheck,
  Car,
  ClipboardCheck,
  Clock3,
  Cog,
  Gauge,
  Mail,
  MapPin,
  Navigation,
  PackageCheck,
  Phone,
  Refrigerator,
  SearchCheck,
  ShieldCheck,
  ShowerHead,
  Snowflake,
  Sparkles,
  Truck,
  WashingMachine,
  Wrench,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import type { IconName } from "@/data/services";

type IconComponent = LucideIcon | IconType;

export const iconMap: Record<IconName, IconComponent> = {
  airVent: AirVent,
  refrigerator: Refrigerator,
  washingMachine: WashingMachine,
  cog: Cog,
  car: Car,
  calendarCheck: CalendarCheck,
  packageCheck: PackageCheck,
  wrench: Wrench,
  showerHead: ShowerHead,
  clock: Clock3,
  shield: ShieldCheck,
  mapPin: MapPin,
  badge: BadgeCheck,
  snowflake: Snowflake,
  clipboard: ClipboardCheck,
  search: SearchCheck,
  sparkles: Sparkles,
  building: Building2,
  truck: Truck,
  gauge: Gauge,
  phone: Phone,
  message: FaWhatsapp,
  mail: Mail,
  navigation: Navigation,
};
