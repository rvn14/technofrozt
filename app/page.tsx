import type { Metadata } from "next";
import { CheckCircle2, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ContactMapSection from "@/components/ContactMapSection";
import CTAButton from "@/components/CTAButton";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import TrustBadge from "@/components/TrustBadge";
import { iconMap } from "@/components/icon-map";
import { seoKeywords, site } from "@/data/site";
import {
  processSteps,
  services,
  trustBenefits,
} from "@/data/services";
import Image from "next/image";

export const metadata: Metadata = {
  description:
    "TECHNOFROST provides premium A/C service, refrigeration repair, washing machine repair, auto A/C repair, motor rewinding, and spare parts support in Kalpitiya.",
  keywords: seoKeywords,
  openGraph: {
    title: "TECHNOFROST | A/C, Refrigeration & Appliance Repair in Kalpitiya",
    description: site.description,
    siteName: "TECHNOFROST",
    locale: "en_LK",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="w-full bg-white text-brand-foreground">
      <Hero />

      <section className="relative z-10 mt-10 px-4 pb-14 sm:px-6 lg:px-10">
        <div className="mx-auto grid w-full max-w-420 gap-4 rounded-lg sm:grid-cols-2 lg:grid-cols-4">
          {trustBenefits.map((benefit) => (
            <TrustBadge key={benefit.title} {...benefit} />
          ))}
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto w-full max-w-420">
          <SectionHeader
            eyebrow="Service Categories"
            title="Choose the repair or cooling service you need"
            description="A premium service catalog with fast booking paths for home appliances, refrigeration systems, auto A/C, and spare parts support."
            actionLabel="View All Services"
            actionHref="/services"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto grid w-full max-w-420 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/banner1.webp"
              alt="Cooling, refrigeration, and appliance service visual"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <SectionHeader
              eyebrow="Why Choose TECHNOFROST"
              title="Technical service with clear communication"
              description="A clean, trustworthy repair experience for customers who need cooling systems and appliances back in working condition."
              className="mb-6"
            />
            <div className="grid gap-3">
              {[
                "Experienced refrigeration and appliance technicians",
                "Reliable repair and maintenance for daily-use equipment",
                "Support for home and business customers",
                "Clean, professional service visits",
                "Quick contact through call or WhatsApp",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-md bg-brand-light px-4 py-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-blue" aria-hidden="true" />
                  <span className="text-sm font-semibold leading-6 text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={site.primaryPhoneHref} variant="red" icon={<Phone className="size-4" />}>
                Call {site.phones[0]}
              </CTAButton>
              <CTAButton
                href={site.whatsappHref}
                variant="whatsapp"
                external
                icon={<FaWhatsapp className="size-4" />}
              >
                WhatsApp Us
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-navy px-4 py-16 text-white sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto w-full max-w-420">
          <SectionHeader
            eyebrow="How It Works"
            title="A simple repair process from first message to completion"
            description="No confusing steps. Share the issue, arrange a visit, and get practical service guidance."
            align="center"
            className="[&_h2]:text-white [&_p]:text-brand-ice-light [&_.text-brand-blue]:text-brand-ice"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <article
                  key={step.title}
                  className="relative overflow-hidden rounded-lg bg-white/8 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur transition hover:bg-white/12"
                >
                  <div className="absolute right-4 top-2 text-7xl font-black leading-none text-white/5">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="relative grid size-12 place-items-center rounded-md bg-brand-ice text-brand-navy">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="relative mt-5 text-xl font-black">{step.title}</h3>
                  <p className="relative mt-3 text-sm leading-7 text-brand-muted">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <ContactMapSection />


      {/* <section className="px-4 pb-16 sm:px-6 lg:px-10 lg:pb-22">
        <div className="mx-auto w-full max-w-420">
          <SectionHeader
            eyebrow="Customer Trust"
            title="Straightforward reviews from common service situations"
            description="Short, realistic notes from the kinds of customers TECHNOFROST supports."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-lg bg-white p-6 shadow-[0_18px_55px_rgba(4,20,43,0.08)]"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <Quote className="size-7 text-brand-blue" aria-hidden="true" />
                  <div className="flex gap-1 text-brand-red-dark" aria-label="Five star review">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="size-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-7 text-slate-600">&quot;{testimonial.text}&quot;</p>
                <p className="mt-5 font-black text-brand-title">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section> */}

    </main>
  );
}
