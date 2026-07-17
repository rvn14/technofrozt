import type { Metadata } from "next";
import { ArrowDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import FinalCTA from "@/components/FinalCTA";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { seoKeywords, site } from "@/data/site";
import { faqs, services } from "@/data/services";
import StructuredData from "@/components/StructuredData";
import { siteUrl, socialImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore TECHNOFROST A/C installation, refrigerator repair, deep freezer repair, washing machine repair, motor rewinding, auto A/C repair, and spare parts services.",
  keywords: seoKeywords,
  alternates: { canonical: "/services" },
  openGraph: {
    title: "TECHNOFROST Services",
    description:
      "A/C, refrigeration, washing machine, motor rewinding, auto A/C, and spare parts service support in Kalpitiya.",
    siteName: "TECHNOFROST",
    locale: "en_LK",
    type: "website",
    url: "/services",
    images: [{ url: socialImage, alt: "TECHNOFROST repair and maintenance services" }],
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "TECHNOFROST Services",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${siteUrl}/services#${service.slug}`,
    name: service.title,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-brand-foreground">
      <StructuredData data={[servicesSchema, faqSchema]} />
      <PageHero
        currentPage="Services"
        eyebrow="Cooling & Appliance Services"
        title="Choose the right service for your equipment"
        description="Explore installation, maintenance, repair, and spare-part support for homes, businesses, and vehicles around Kalpitiya."
        primaryLabel="Chat on WhatsApp"
        primaryHref={site.whatsappHref}
        primaryExternal
        primaryIcon={<FaWhatsapp className="size-5" />}
        secondaryLabel="Browse Services"
        secondaryHref="#service-categories"
        secondaryIcon={<ArrowDown className="size-4" />}
      />

      <section id="service-categories" className="scroll-mt-28 px-5 py-14 sm:px-6 lg:px-10 lg:py-18">
        <div className="mx-auto w-full max-w-7xl">
          <SectionHeader
            eyebrow="Service Categories"
            title="Choose the service category you need"
            description="Select a category to jump directly to its scope and common service requirements."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light px-5 py-14 sm:px-6 lg:px-10 lg:py-18">
        <div className="mx-auto w-full max-w-7xl">
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

      <section className="bg-brand-navy px-5 py-14 text-white sm:px-6 lg:px-10 lg:py-18">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-brand-ice">FAQ</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Common service questions</h2>
            <p className="mt-4 text-base leading-8 text-brand-ice-light">
              Quick answers for customers booking A/C, refrigeration, appliance repair, and spare
              parts support.
            </p>
          </div>

          <Accordion type="single" collapsible className="gap-3 overflow-visible border-0">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/8 transition-colors data-[state=open]:bg-white/12"
              >
                <AccordionTrigger className="min-h-16 cursor-pointer px-5 py-4 text-base font-black text-white hover:no-underline focus-visible:border-brand-ice/70 focus-visible:ring-3 focus-visible:ring-brand-ice/25 [&_svg]:text-brand-ice">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-1 pb-5 text-sm leading-7 text-brand-muted">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <FinalCTA
        title="Need help choosing a service?"
        description="Send the appliance type, issue, and location through WhatsApp. Photos can help us understand the requirement faster."
        href={site.whatsappHref}
      />
    </main>
  );
}
