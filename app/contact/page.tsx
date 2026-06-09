import type { Metadata } from "next";
import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { seoKeywords, site } from "@/data/site";
import { Navigation, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TECHNOFROST at 6PCX+GQG, Kurakkanhena, Main Street, Kalpitiya 61354 for A/C service, refrigerator repair, freezer repair, washing machine repair, auto A/C, and spare parts.",
  keywords: seoKeywords,
  openGraph: {
    title: "Contact TECHNOFROST",
    description: "Call, WhatsApp, or submit a service request to TECHNOFROST in Kalpitiya.",
    siteName: "TECHNOFROST",
    locale: "en_LK",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white text-brand-foreground">
      <PageHero
        eyebrow="Contact"
        title="Request service support from TECHNOFROST"
        description="Send your appliance issue, call directly, or use WhatsApp for fast coordination around Kalpitiya."
        primaryLabel="Call 0767801583"
        primaryHref={site.primaryPhoneHref}
      />

      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto w-full max-w-420">
          <SectionHeader
            eyebrow="Contact Options"
            title="Choose the fastest way to reach us"
            description="Use direct call or WhatsApp for urgent cooling problems. The form is ready for frontend capture and marked for API/email integration."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <ContactCard
              title="Call"
              icon="phone"
              description={<span>{site.phones.join(" / ")}</span>}
              actionLabel="Call Now"
              actionHref={site.primaryPhoneHref}
            />
            <ContactCard
              title="WhatsApp"
              icon="message"
              description={<span>Send issue details, photos, and location for quick coordination.</span>}
              actionLabel="WhatsApp"
              actionHref={site.whatsappHref}
              actionIcon={<FaWhatsapp className="size-4" />}
              actionVariant="whatsapp"
              external
            />
            <ContactCard
              title="Email"
              icon="mail"
              description={<span>{site.email}</span>}
              actionLabel="Send Email"
              actionHref={site.emailHref}
            />
            <ContactCard
              title="Location"
              icon="mapPin"
              description={<span>{site.address}</span>}
              actionLabel="Get Directions"
              actionHref={site.directionsHref}
              external
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-light px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto grid w-full max-w-420 gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeader
              eyebrow="Service Request"
              title="Tell us what needs repair"
              description="Submit the basic details. This form currently validates on the frontend and includes a code TODO for route handler or email integration."
              className="mb-6"
            />
            <ContactForm />
          </div>

          <aside className="rounded-md bg-brand-navy p-6 text-white shadow-[0_24px_80px_rgba(4,20,43,0.18)]">
            <p className="text-sm font-black uppercase tracking-normal text-brand-ice">Quick Actions</p>
            <h2 className="mt-3 text-3xl font-black">Need urgent support?</h2>
            <p className="mt-4 text-sm leading-7 text-brand-ice-light">
              For urgent cooling problems, calling or sending a WhatsApp message is usually the
              quickest way to share your issue and location.
            </p>
            <div className="mt-7 grid gap-3">
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
                variant="ice"
                external
                icon={<Navigation className="size-4" />}
              >
                Get Directions
              </CTAButton>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-22">
        <div className="mx-auto grid w-full max-w-420 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-brand-blue">Map</p>
            <h2 className="mt-3 text-3xl font-black text-brand-title">{site.address}</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Use the pinned map to find the TECHNOFROST store location on Main Street in
              Kurakkanhena, Kalpitiya.
            </p>
          </div>
          <div className="relative min-h-96 overflow-hidden rounded-md bg-brand-navy p-2 shadow-[0_24px_80px_rgba(4,20,43,0.18)]">
            <iframe
              src={site.mapEmbedHref}
              title={`Google map showing ${site.address}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-96 w-full rounded-md border-0"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
