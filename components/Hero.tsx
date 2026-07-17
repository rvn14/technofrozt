import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, PackageCheck, Phone, Snowflake, Wrench, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/data/site";

const trustItems = [
  {
    icon: Zap,
    label: "Responsive Support",
  },
  {
    icon: Wrench,
    label: "Technical Experience",
  },
  {
    icon: PackageCheck,
    label: "Parts Guidance",
  },
  {
    icon: MapPin,
    label: "Local Service Coverage",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-bg text-white">
      <div className="relative min-h-155 sm:min-h-160 lg:min-h-132">
        <Image
          src="/images/hero.webp"
          alt="TECHNOFROST air conditioning units for supply, installation, servicing, and repair"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[66%_center] sm:object-[64%_center] lg:object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,20,43,0.94)_0%,rgba(4,20,43,0.78)_58%,rgba(4,20,43,0.92)_100%)] lg:bg-[linear-gradient(90deg,rgba(4,20,43,0.99)_0%,rgba(4,20,43,0.92)_38%,rgba(4,20,43,0.34)_68%,rgba(4,20,43,0.12)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,126,214,0.05)_0%,rgba(4,20,43,0.02)_55%,rgba(4,20,43,0.26)_100%)]" />

        <div className="relative mx-auto flex min-h-155 w-full max-w-420 items-center px-4 py-14 sm:min-h-160 sm:px-6 lg:min-h-132 lg:px-10 lg:py-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] bg-white/5 py-2 px-4 rounded-full text-brand-ice sm:text-xs">
              <Snowflake className="size-4 shrink-0" aria-hidden="true" />
              <span>AC supply · Installation · Service · Repair</span>
              <Snowflake className="size-4 shrink-0" aria-hidden="true" />
            </div>

            <h1 className="mt-5 max-w-2xl text-4xl font-black leading-[1.04] tracking-[-0.035em] text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.28)] sm:text-[3.25rem] lg:text-7xl">
              <span className="text-brand-ice">Cooling Solutions</span>
              <span className="mt-1 block">for Homes &amp; Businesses</span>
            </h1>

            <p className="mt-5 max-w-xl text-base font-medium leading-7 text-white/78 sm:text-lg sm:leading-8">
              From choosing the right air conditioner to professional installation, routine
              servicing, and reliable repairs, we provide complete cooling support across Kalpitiya
              and nearby areas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-brand-whatsapp-dark px-6 text-sm font-bold text-white! shadow-[0_14px_32px_rgba(21,155,126,0.28)] transition-[background-color,box-shadow,transform] duration-200 hover:bg-brand-whatsapp hover:shadow-[0_18px_38px_rgba(21,155,126,0.34)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-ice/50 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
              >
                <FaWhatsapp className="size-5" aria-hidden="true" />
                Get a Quote
              </a>

              <Link
                href="/services"
                className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/7 px-6 text-sm font-bold text-white! backdrop-blur-sm transition-[background-color,border-color,transform] duration-200 hover:border-white/45 hover:bg-white/13 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-ice/40 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
              >
                Explore Services
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-5 inline-flex min-h-11 items-center gap-2.5 rounded-full px-4 text-xs font-semibold text-white/68 backdrop-blur-sm sm:text-sm">
              <Phone className="size-3.5 text-brand-red-soft" aria-hidden="true" />
              <span>Prefer calling?</span>
              <a
                href={site.primaryPhoneHref}
                className="rounded-full font-bold text-white! decoration-brand-red-soft/60 underline-offset-4 transition-colors duration-200 hover:text-brand-red-soft! hover:underline! focus-visible:text-brand-red-soft! focus-visible:underline! focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-ice/40"
                aria-label="Call TECHNOFROST on 076 780 1583"
              >
                076 780 1583
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-brand-deep/94 backdrop-blur-md">
        <div className="mx-auto grid w-full max-w-420 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex min-h-16 items-center justify-center gap-3 bg-brand-deep/96 px-4 py-3 text-center sm:px-5"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-blue/12 text-brand-ice ring-1 ring-brand-blue/22">
                <Icon className="size-4.5" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold text-white/92">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
