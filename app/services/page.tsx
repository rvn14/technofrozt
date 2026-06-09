import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { iconMap } from "@/components/icon-map";
import { seoKeywords, site } from "@/data/site";
import { faqs, serviceDeals, services } from "@/data/services";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore TECHNOFROST A/C installation, refrigerator repair, deep freezer repair, washing machine repair, motor rewinding, auto A/C repair, and spare parts services.",
  keywords: seoKeywords,
  openGraph: {
    title: "TECHNOFROST Services",
    description:
      "A/C, refrigeration, washing machine, motor rewinding, auto A/C, and spare parts service support in Kalpitiya.",
    siteName: "TECHNOFROST",
    locale: "en_LK",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-brand-foreground">
      <PageHero
        eyebrow="Services"
        title="Book cooling, refrigeration, and appliance repair support"
        description="A complete service catalog for home customers, shop owners, small businesses, and vehicle owners around Kalpitiya."
        primaryLabel="Request Service"
        primaryHref="/contact"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto w-full max-w-420">
          <SectionHeader
            eyebrow="Full Service Grid"
            title="Choose the service category you need"
            description="Each category has a clear booking path and practical details so customers can choose quickly."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto w-full max-w-420">
          <SectionHeader
            eyebrow="Service Details"
            title="What each service can include"
            description="Inspection scope depends on the appliance condition, brand, and parts availability. Contact TECHNOFROST for the right next step."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.slug} id={service.slug} className="scroll-mt-36">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto w-full max-w-420">
          <SectionHeader
            eyebrow="Popular Requests"
            title="Fast booking service bundles"
            description="Use these as starting points when you call or message TECHNOFROST."
            actionLabel="Contact Now"
            actionHref="/contact"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {serviceDeals.map((deal) => {
              const Icon = iconMap[deal.icon];
              return (
                <article key={deal.title} className="rounded-md bg-white p-5 shadow-[0_14px_42px_rgba(4,20,43,0.08)]">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <Icon className="size-7 text-brand-blue" aria-hidden="true" />
                    <span className="rounded-md bg-brand-light px-2.5 py-1 text-xs font-black text-brand-deep">
                      {deal.badge}
                    </span>
                  </div>
                  <h3 className="font-black text-brand-title">{deal.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{deal.details}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy px-4 py-16 text-white sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto grid w-full max-w-420 gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-brand-ice">FAQ</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Common service questions</h2>
            <p className="mt-4 text-base leading-8 text-brand-ice-light">
              Quick answers for customers booking A/C, refrigeration, appliance repair, and spare
              parts support.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
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
            </div>
          </div>

          <div className="grid gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-md bg-white/8 p-5 shadow-[0_14px_44px_rgba(0,0,0,0.14)] open:bg-white/12"
              >
                <summary className="cursor-pointer list-none text-base font-black text-white">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-brand-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
