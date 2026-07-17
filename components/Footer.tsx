import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { navLinks, site } from "@/data/site";
import { services } from "@/data/services";

const footerServiceSlugs = [
  "ac-installation-service",
  "refrigerator-repair",
  "deep-freezer-repair",
  "washing-machine-repair",
  "auto-ac-repair",
];

const footerServices = footerServiceSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is (typeof services)[number] => Boolean(service));

export default function Footer() {
  return (
    <footer className="bg-brand-bg text-white">
      <div className="mx-auto grid w-full max-w-420 gap-10 px-4 py-12 pb-28 sm:px-6 lg:grid-cols-[1.25fr_0.8fr_1fr_1fr] lg:px-10 lg:pb-12">
        <div>
          <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={site.logo}
            alt="TECHNOFROST logo"
            width={64}
            height={64}
            priority
            className="size-12 rounded-lg object-contain sm:size-14"
          />
          <span className="hidden text-2xl font-extrabold tracking-normal text-white sm:inline lg:text-4xl uppercase font-bebas-neue">
            Techno<span className="text-brand-red-dark">Frost</span>
          </span>
        </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-brand-muted">{site.description}</p>
        </div>

        <FooterColumn title="Company">
          {navLinks.map((link) => (
            <FooterLink key={link.href} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Services">
          {footerServices.map((service) => (
            <FooterLink key={service.slug} href={`/services#${service.slug}`}>
              {service.title}
            </FooterLink>
          ))}
        </FooterColumn>

        <div>
          <h2 className="text-sm font-black uppercase tracking-normal text-brand-ice">Contact</h2>
          <div className="mt-5 space-y-4 text-sm leading-6 text-brand-muted">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-brand-ice" aria-hidden="true" />
              <span>{site.address}</span>
            </p>
            <p className="flex gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-brand-ice" aria-hidden="true" />
              <span>{site.phones.join(" / ")}</span>
            </p>
            <p className="flex gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-brand-ice" aria-hidden="true" />
              <span>{site.email}</span>
            </p>
          </div>

          <h2 className="mt-8 text-sm font-black uppercase tracking-normal text-brand-ice">
            Quick Actions
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-brand-muted">
            <FooterLink href={site.primaryPhoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              Call Now
            </FooterLink>
            <FooterLink href={site.whatsappHref} external>
              <FaWhatsapp className="size-4 text-brand-whatsapp" aria-hidden="true" />
              WhatsApp
            </FooterLink>
            <FooterLink href={site.directionsHref} external>
              <MapPin className="size-4" aria-hidden="true" />
              Google Map
            </FooterLink>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-420 flex-col gap-3 px-4 py-5 text-xs text-brand-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>Copyright 2026 TECHNOFROST. All Rights Reserved.</p>
          <p>Cooling, refrigeration, and appliance service support in Kalpitiya.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-black uppercase tracking-normal text-brand-ice">{title}</h2>
      <div className="mt-5 grid gap-3 text-sm text-brand-muted">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const classes =
    "inline-flex items-center gap-2 transition hover:text-white focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-ice/40";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
