import { Navigation, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import CTAButton from "@/components/CTAButton";
import { site } from "@/data/site";

export default function ContactMapSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
      <div className="mx-auto grid w-full max-w-420 gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
        <div className="rounded-lg bg-brand-light p-6 shadow-inner lg:p-8">
          <p className="text-sm font-black uppercase tracking-normal text-brand-blue">
            Service Area
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-title">
            {site.address}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Book service support around Kalpitiya and nearby areas for A/C, refrigeration,
            washing machine, auto A/C, motor rewinding, and spare parts needs.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <CTAButton href={site.primaryPhoneHref} variant="red" icon={<Phone className="size-4" />}>
              Call Now
            </CTAButton>
            <CTAButton
              href={site.whatsappHref}
              variant="whatsapp"
              external
              icon={<FaWhatsapp className="size-4" />}
            >
              WhatsApp
            </CTAButton>
            <CTAButton
              href={site.directionsHref}
              variant="outline"
              external
              icon={<Navigation className="size-4" />}
            >
              Get Directions
            </CTAButton>
          </div>
        </div>

        <div className="relative min-h-128 overflow-hidden rounded-lg bg-brand-navy p-2 shadow-[0_24px_80px_rgba(4,20,43,0.18)]">
          <iframe
            src={site.mapEmbedHref}
            title={`Google map showing ${site.address}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="min-h-full w-full rounded-md border-0"
          />
        </div>
      </div>
    </section>
  );
}
