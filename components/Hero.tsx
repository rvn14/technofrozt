import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  ShieldCheck,
  Snowflake,
  Wrench,
} from "lucide-react";

const benefits = [
  {
    icon: Snowflake,
    title: "Premium Cooling",
    description: "Top-quality AC products",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description: "Professional support",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description: "Fast and dependable",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-150 overflow-hidden bg-brand-bg text-white sm:min-h-165">
      <Image
        src="/images/hero.webp"
        alt="TECHNOFROST air conditioning and cooling service hero visual"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />

      <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-brand-bg to-transparent" />

      <div className="relative mx-auto flex min-h-140 w-full max-w-420 items-center px-4 py-12 sm:min-h-155 sm:px-6 lg:px-10">
        <div className="max-w-2xl pt-4">
          <div className="inline-flex min-h-10 items-center gap-2 rounded-md bg-white/8 px-4 text-xs font-black uppercase tracking-normal text-brand-ice shadow-[0_14px_45px_rgba(0,0,0,0.18)] ring-1 ring-white/10 backdrop-blur sm:text-sm">
            <Snowflake className="size-5 text-brand-ice" aria-hidden="true" />
            Cooling comfort. Smarter solutions.
          </div>

          <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[0.92] tracking-normal text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.32)] sm:text-7xl lg:text-8xl">
            Stay Cool.
            <br />
            Spend{" "}
            <span className="text-brand-blue">
              Less.
            </span>
          </h1>

          <div className="mt-5 flex h-1 w-36 overflow-hidden rounded-full bg-brand-blue">
            <span className="h-full w-12 bg-brand-red-dark" />
          </div>

          <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-brand-muted sm:text-xl">
            Premium AC products, expert installation, and reliable repairs customized for your
            comfort and budget.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-brand-red-dark px-7 text-base font-black text-white shadow-[0_18px_45px_rgba(238,10,36,0.28)] transition hover:bg-brand-red focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-red/30"
            >
              <CalendarCheck className="size-5" aria-hidden="true" />
              Book a Service
              <ArrowRight className="size-5 transition group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-brand-bg/40 px-7 text-base font-black text-white shadow-[0_16px_40px_rgba(0,0,0,0.16)] ring-1 ring-brand-blue/70 backdrop-blur transition hover:bg-brand-blue/14 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-ice/35"
            >
              Explore Services
              <ArrowRight className="size-5 transition group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="flex min-h-20 items-center gap-4 rounded-md bg-white/8 px-5 py-4 shadow-[0_14px_45px_rgba(0,0,0,0.16)] ring-1 ring-white/8 backdrop-blur"
              >
                <Icon className="size-8 shrink-0 text-brand-ice" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-black leading-5 text-white">{title}</span>
                  <span className="mt-1 block text-xs font-medium leading-5 text-brand-muted">
                    {description}
                  </span>
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
