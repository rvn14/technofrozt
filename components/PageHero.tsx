import CTAButton from "@/components/CTAButton";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 bg-linear-to-br from-brand-bg via-brand-navy to-brand-deep" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(133,217,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(133,217,255,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-brand-ice/40 to-transparent" />
      <div className="relative mx-auto w-full max-w-420 px-4 py-18 sm:px-6 lg:px-10 lg:py-22">
        <p className="text-sm font-black uppercase tracking-normal text-brand-ice">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-normal sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-brand-ice-light sm:text-lg">
          {description}
        </p>
        {primaryLabel && primaryHref ? (
          <CTAButton href={primaryHref} variant="red" className="mt-8">
            {primaryLabel}
          </CTAButton>
        ) : null}
      </div>
    </section>
  );
}
