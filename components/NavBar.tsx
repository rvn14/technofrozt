import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  CalendarCheck,
  MapPin,
  Phone,
  Search,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BrandDropdown from "./BrandDropdown";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

const secondaryLinks = [
  { label: "Spare Parts", href: "/services#spare-parts" },
  { label: "Repairs & Services", href: "/services" },
];

const navActionVariants = {
  whatsapp: {
    button: "bg-brand-whatsapp shadow-brand-whatsapp/20 hover:bg-brand-whatsapp-dark",
    icon: "bg-brand-whatsapp-dark group-active/nav-action:bg-[#0f766e]",
  },
  red: {
    button: "bg-brand-red shadow-brand-red/15 hover:bg-brand-red-dark",
    icon: "bg-brand-red-dark group-active/nav-action:bg-[#a7061a]",
  },
};

type NavActionLinkProps = {
  href: string;
  children: ReactNode;
  icon: ReactNode;
  variant: keyof typeof navActionVariants;
  external?: boolean;
};

function NavActionLink({
  href,
  children,
  icon,
  variant,
  external,
}: NavActionLinkProps) {
  const colors = navActionVariants[variant];

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "group/nav-action relative isolate inline-flex min-h-11 items-center justify-center overflow-hidden rounded-md py-2.5 pl-4 pr-13 text-sm font-bold text-white! shadow-lg transition-[background-color,box-shadow,transform] duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-ice/50 active:translate-y-px",
        colors.button,
      )}
    >
      <span className="relative z-10 whitespace-nowrap text-white! transition-opacity duration-300 ease-in-out group-hover/nav-action:opacity-0 group-focus-visible/nav-action:opacity-0">
        {children}
      </span>
      <span
        className={cn(
          "absolute inset-y-0 right-0 z-20 flex w-10 items-center justify-center text-white! transition-[width,background-color] duration-300 ease-in-out group-hover/nav-action:w-full group-focus-visible/nav-action:w-full",
          colors.icon,
        )}
        aria-hidden="true"
      >
        <span className="grid size-5 place-items-center transition-transform duration-300 group-hover/nav-action:scale-110 group-focus-visible/nav-action:scale-110">
          {icon}
        </span>
      </span>
    </Link>
  );
}

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <section className="mx-auto flex min-h-20 w-full max-w-420 items-center gap-2 px-4 py-2 sm:px-6 lg:gap-8 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={site.logo}
            alt="TECHNOFROST logo"
            width={64}
            height={64}
            priority
            className="size-12 rounded-lg object-contain sm:size-14"
          />
          <span className="hidden text-2xl font-extrabold tracking-normal text-brand-navy sm:inline lg:text-4xl uppercase font-bebas-neue">
            Techno<span className="text-brand-red-dark">Frost</span>
          </span>
        </Link>

        <form action="/services" className="flex min-w-0 flex-1 items-center overflow-hidden rounded-lg border bg-white">
          <label htmlFor="site-search" className="sr-only">
            Search products and services
          </label>
          <Input
            id="site-search"
            name="q"
            type="search"
            placeholder="Search services, parts, and repairs"
            className="h-10 flex-1 rounded-none border-0 bg-white px-4 text-sm text-slate-700 shadow-none focus-visible:ring-0 sm:h-10 sm:text-base"
          />
          <Button
            type="submit"
            size="icon-lg"
            aria-label="Search"
            className="h-10 w-12 border-0 cursor-pointer rounded-none bg-brand-red-dark text-white hover:bg-brand-red sm:h-10 sm:w-14"
          >
            <Search className="size-5" aria-hidden="true" />
          </Button>
        </form>

        <div className="hidden items-center gap-3 text-brand-navy lg:flex">
          <NavActionLink
            href={site.whatsappHref}
            variant="whatsapp"
            external
            icon={<FaWhatsapp className="size-5" />}
          >
            WhatsApp
          </NavActionLink>

          <NavActionLink
            href="/contact"
            variant="red"
            icon={<CalendarCheck className="size-5" />}
          >
            Book Service
          </NavActionLink>
        </div>
      </section>

      <section className="bg-brand-navy text-white">
        <div className="mx-auto flex min-h-10 w-full max-w-420 items-center gap-4 overflow-visible px-4 text-sm font-medium sm:px-6 lg:px-10">
          <BrandDropdown />

          <nav className="flex min-w-max items-center gap-6 lg:gap-10" aria-label="Primary navigation">
            {[...navLinks, ...secondaryLinks].map((item) => (
              <Link
                href={item.href}
                className="whitespace-nowrap transition-colors duration-200 ease-in-out hover:text-brand-ice"
                key={`${item.label}-${item.href}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden shrink-0 items-center gap-5 xl:flex">
            <Link href={site.directionsHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 whitespace-nowrap">
              <MapPin className="size-5" aria-hidden="true" />
              {site.address}
            </Link>
            <span className="h-8 w-px bg-white/50" aria-hidden="true" />
            <Link href={site.primaryPhoneHref} className="flex items-center gap-2 whitespace-nowrap">
              <Phone className="size-5 fill-white" aria-hidden="true" />
              {site.phones[0]}
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default NavBar;
