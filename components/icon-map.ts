import {
  AirVent,
  BadgeCheck,
  Car,
  ClipboardCheck,
  Cog,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Refrigerator,
  SearchCheck,
  ShowerHead,
  Snowflake,
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
  packageCheck: PackageCheck,
  wrench: Wrench,
  showerHead: ShowerHead,
  mapPin: MapPin,
  badge: BadgeCheck,
  snowflake: Snowflake,
  clipboard: ClipboardCheck,
  search: SearchCheck,
  phone: Phone,
  message: FaWhatsapp,
  mail: Mail,
};
