import Image from "next/image";
import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTAButton from "@/components/CTAButton";

type PageHeroProps = {
  currentPage: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  primaryIcon?: ReactNode;
  primaryExternal?: boolean;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryIcon?: ReactNode;
  secondaryExternal?: boolean;
};

export default function PageHero({
  currentPage,
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  primaryIcon,
  primaryExternal,
  secondaryLabel,
  secondaryHref,
  secondaryIcon,
  secondaryExternal,
}: PageHeroProps) {
  return (
    <section className="relative isolate flex min-h-96 items-center overflow-hidden bg-brand-navy text-white">
      <Image
        src="/images/technofrost-hero-desktop.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[66%_center] sm:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,20,43,0.94)_0%,rgba(4,20,43,0.86)_100%)] sm:bg-[linear-gradient(90deg,rgba(4,20,43,0.98)_0%,rgba(4,20,43,0.92)_42%,rgba(4,20,43,0.42)_72%,rgba(4,20,43,0.10)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-ice/40 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-9">
        <Breadcrumbs currentPage={currentPage} />
        <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.08em] text-brand-ice sm:mt-5">
          {eyebrow}
        </p>
        <h1 className="mt-1 max-w-3xl text-3xl font-black leading-tight tracking-tight sm:mt-2 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-2 max-w-2xl text-base leading-6 text-white/78 sm:mt-3 sm:text-lg sm:leading-7">
          {description}
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:items-center">
          <CTAButton
            href={primaryHref}
            variant="primary"
            external={primaryExternal}
            icon={primaryIcon}
            className="w-full sm:w-auto"
          >
            {primaryLabel}
          </CTAButton>
          {secondaryLabel && secondaryHref ? (
            <CTAButton
              href={secondaryHref}
              variant="secondary"
              external={secondaryExternal}
              icon={secondaryIcon}
              className="w-full border-white/40 text-white! ring-white/20 after:bg-white hover:text-brand-navy! focus-visible:text-brand-navy! sm:w-auto"
            >
              {secondaryLabel}
            </CTAButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
