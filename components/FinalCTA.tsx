import { FaWhatsapp } from "react-icons/fa";
import CTAButton from "@/components/CTAButton";

type FinalCTAProps = {
  title: string;
  description: string;
  href: string;
  label?: string;
};

export default function FinalCTA({
  title,
  description,
  href,
  label = "Chat on WhatsApp",
}: FinalCTAProps) {
  return (
    <section className="px-5 py-14 sm:px-6 lg:px-10 lg:py-18">
      <div className="mx-auto flex w-full max-w-420 flex-col items-start justify-between gap-7 rounded-2xl bg-brand-navy px-6 py-8 text-white shadow-[0_18px_50px_rgba(4,20,43,0.12)] sm:px-8 lg:flex-row lg:items-center lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-brand-ice">
            Need help?
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 text-base leading-7 text-brand-ice-light">{description}</p>
        </div>
        <CTAButton
          href={href}
          variant="primary"
          external
          icon={<FaWhatsapp className="size-5" />}
          className="w-full shrink-0 sm:w-auto"
        >
          {label}
        </CTAButton>
      </div>
    </section>
  );
}
