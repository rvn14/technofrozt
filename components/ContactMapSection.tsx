import { Navigation, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import CTAButton from "@/components/CTAButton";
import MapPreview from "@/components/MapPreview";
import { site } from "@/data/site";

export default function ContactMapSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
      <div className="mx-auto grid w-full max-w-420 gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="rounded-2xl p-6 lg:p-7">
          <p className="text-sm font-black uppercase tracking-normal text-brand-blue">
            Serving Kalpitiya and nearby areas
          </p>
          <h2 className="mt-3 text-2xl font-black leading-tight text-brand-title sm:text-3xl">
            {site.address}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Contact us for AC installation, servicing, appliance repairs, auto A/C support and spare-part enquiries.
          </p>
          <div className="mt-7 flex flex-col items-start gap-4">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <CTAButton
                href={site.whatsappHref}
                variant="primary"
                external
                icon={<FaWhatsapp className="size-4" />}
              >
                Chat on WhatsApp
              </CTAButton>
              <CTAButton
                href={site.directionsHref}
                variant="secondary"
                external
                icon={<Navigation className="size-4" />}
              >
                Get Directions
              </CTAButton>
            </div>

            <div className="inline-flex min-h-10 items-center gap-2 text-sm text-slate-600">
              <Phone className="size-4 text-brand-blue" aria-hidden="true" />
              <span>Prefer calling?</span>
              <a
                href={site.primaryPhoneHref}
                className="rounded-full font-bold text-brand-navy! decoration-brand-blue/50 underline-offset-4 transition-colors duration-200 hover:text-brand-blue! hover:underline! focus-visible:text-brand-blue! focus-visible:underline! focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-ice/50"
                aria-label="Call TECHNOFROST on 076 780 1583"
              >
                076 780 1583
              </a>
            </div>
          </div>
        </div>

        <MapPreview className="lg:min-h-104" />
      </div>
    </section>
  );
}
