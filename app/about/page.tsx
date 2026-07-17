import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import VisualPlaceholder from "@/components/VisualPlaceholder";
import { iconMap } from "@/components/icon-map";
import { seoKeywords, site } from "@/data/site";
import { stats, trustBenefits } from "@/data/services";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TECHNOFROST, a Kalpitiya service company for A/C, refrigeration, washing machine, motor rewinding, auto A/C, and spare parts support.",
  keywords: seoKeywords,
  openGraph: {
    title: "About TECHNOFROST",
    description: site.description,
    siteName: "TECHNOFROST",
    locale: "en_LK",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white text-brand-foreground">
      <PageHero
        eyebrow="About Us"
        title="Reliable cooling and appliance service for Kalpitiya homes and businesses"
        description="TECHNOFROST combines technical repair knowledge with a clear, modern service experience for customers who need dependable cooling and appliance support."
        primaryLabel="Contact TECHNOFROST"
        primaryHref="/contact"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto grid w-full max-w-420 gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Company Intro"
              title="Practical service support with a premium customer experience"
              description={site.description}
              className="mb-6"
            />
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                From A/C service and refrigeration repair to washing machines, motor rewinding,
                auto A/C checks, and spare parts guidance, TECHNOFROST is built for customers
                who want clear communication and dependable technical work.
              </p>
              <p>
                The brand focuses on clean service visits, accurate issue explanation, and quick
                contact through phone or WhatsApp so customers can arrange support without a
                complicated process.
              </p>
            </div>
          </div>
          <VisualPlaceholder label="TECHNOFROST workshop and service visual" className="min-h-110" priority />
        </div>
      </section>

      <section className="bg-brand-light px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto grid w-full max-w-420 gap-6 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <article
                key={stat.label}
                className="rounded-md bg-white p-6 shadow-[0_18px_50px_rgba(4,20,43,0.08)]"
              >
                <div className="mb-5 grid size-12 place-items-center rounded-md bg-brand-navy text-brand-ice">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <p className="text-3xl font-black text-brand-title">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-slate-600">{stat.label}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto grid w-full max-w-420 gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div className="rounded-md bg-brand-navy p-7 text-white shadow-[0_24px_80px_rgba(4,20,43,0.18)]">
            <p className="text-sm font-black uppercase tracking-normal text-brand-ice">Mission</p>
            <h2 className="mt-3 text-3xl font-black">Keep equipment reliable, efficient, and repairable.</h2>
            <p className="mt-5 text-base leading-8 text-brand-ice-light">
              Our mission is to give home and business customers clear service guidance,
              dependable technical support, and practical repair options for cooling and
              appliance systems.
            </p>
          </div>

          <div>
            <SectionHeader
              eyebrow="Why Customers Trust Us"
              title="Built around response, skill, and honest guidance"
              description="The service experience is shaped around the signals customers look for when choosing a repair company."
              className="mb-6"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {trustBenefits.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <article key={item.title} className="rounded-md bg-white p-5 shadow-[0_14px_40px_rgba(4,20,43,0.07)]">
                    <Icon className="mb-4 size-6 text-brand-blue" aria-hidden="true" />
                    <h3 className="font-black text-brand-title">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-10 lg:pb-22">
        <div className="mx-auto rounded-md bg-brand-light p-6 shadow-inner lg:max-w-420 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-normal text-brand-blue">
                Ready to Book?
              </p>
              <h2 className="mt-3 text-3xl font-black text-brand-title">
                Speak with TECHNOFROST about your repair or service need.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href={site.primaryPhoneHref} variant="secondary" icon={<Phone className="size-4" />}>
                Call Now
              </CTAButton>
              <CTAButton
                href={site.whatsappHref}
                variant="primary"
                external
                icon={<FaWhatsapp className="size-4" />}
              >
                WhatsApp
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
