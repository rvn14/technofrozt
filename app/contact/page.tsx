import type { Metadata } from "next";
import { CalendarDays, Camera, CheckCircle2, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";
import CTAButton from "@/components/CTAButton";
import FinalCTA from "@/components/FinalCTA";
import PageHero from "@/components/PageHero";
import MapPreview from "@/components/MapPreview";
import SectionHeader from "@/components/SectionHeader";
import { seoKeywords, site } from "@/data/site";
import { socialImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TECHNOFROST in Kalpitiya for A/C service, refrigeration repair, appliance repair, hot water shower repair, and spare-part enquiries.",
  keywords: seoKeywords,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact TECHNOFROST",
    description: "Call, WhatsApp, or submit a service request to TECHNOFROST in Kalpitiya.",
    siteName: "TECHNOFROST",
    locale: "en_LK",
    type: "website",
    url: "/contact",
    images: [{ url: socialImage, alt: "Contact TECHNOFROST in Kalpitiya" }],
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white text-brand-foreground">
      <PageHero
        currentPage="Contact"
        eyebrow="Contact & Service Support"
        title="Get help with your cooling or appliance service"
        description="Share the equipment, issue, and location for faster coordination around Kalpitiya and nearby areas."
        primaryLabel="Chat on WhatsApp"
        primaryHref={site.whatsappHref}
        primaryExternal
        primaryIcon={<FaWhatsapp className="size-5" />}
        secondaryLabel="Call 076 780 1583"
        secondaryHref={site.primaryPhoneHref}
        secondaryIcon={<Phone className="size-4" />}
      />

      <section className="px-5 py-14 sm:px-6 lg:px-10 lg:py-18">
        <div className="mx-auto w-full max-w-420">
          <SectionHeader
            eyebrow="Contact Options"
            title="Choose the easiest way to reach us"
            description="Use WhatsApp for the fastest coordination, call directly, email your enquiry, or open directions to the store."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <ContactCard
              title="WhatsApp"
              icon="message"
              description={<span>Send issue details, photos, and location for quick coordination.</span>}
              actionLabel="Chat on WhatsApp"
              actionHref={site.whatsappHref}
              actionIcon={<FaWhatsapp className="size-4" />}
              actionVariant="primary"
              external
            />
            <ContactCard
              title="Call"
              icon="phone"
              description={<span>{site.phones.join(" / ")}</span>}
              actionLabel="Call Now"
              actionHref={site.primaryPhoneHref}
              actionIcon={<Phone className="size-4" />}
            />
            <ContactCard
              title="Email"
              icon="mail"
              description={<span>{site.email}</span>}
              actionLabel="Send Email"
              actionHref={site.emailHref}
              actionIcon={<Mail className="size-4" />}
            />
            <ContactCard
              title="Location"
              icon="mapPin"
              description={<span>{site.address}</span>}
              actionLabel="Get Directions"
              actionHref={site.directionsHref}
              actionIcon={<Navigation className="size-4" />}
              external
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-light px-5 py-14 sm:px-6 lg:px-10 lg:py-18">
        <div className="mx-auto grid w-full max-w-420 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Service Request"
              title="Send your service details"
              description="Complete the short form and WhatsApp will open with your information ready to review. You choose when to send it."
              className="mb-6"
            />
            <ContactForm />
          </div>

          <aside className="rounded-2xl bg-brand-navy p-6 text-white shadow-[0_18px_50px_rgba(4,20,43,0.12)] sm:p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-brand-ice">
              What to prepare
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Help us understand the request</h2>
            <p className="mt-4 text-base leading-7 text-brand-ice-light">
              A few practical details help TECHNOFROST recommend the right next step before a visit.
            </p>
            <ul className="mt-7 grid gap-4 text-sm font-semibold text-white/88">
              {[
                { icon: CheckCircle2, text: "Service or appliance type" },
                { icon: Camera, text: "Brand, model, and useful photos" },
                { icon: MapPin, text: "Your location or nearby landmark" },
                { icon: CalendarDays, text: "Preferred visit date" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/8 text-brand-ice ring-1 ring-white/10">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6 lg:px-10 lg:py-18">
        <div className="mx-auto grid w-full max-w-420 gap-8 rounded-2xl border border-slate-200 bg-brand-light p-4 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div className="rounded-2xl p-6 lg:p-7">
            <p className="text-sm font-black uppercase tracking-normal text-brand-blue">Location</p>
            <h2 className="mt-3 text-3xl font-black text-brand-title">{site.address}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Open directions to find the TECHNOFROST store on Main Street in Kurakkanhena,
              Kalpitiya.
            </p>
            <CTAButton
              href={site.directionsHref}
              variant="secondary"
              external
              icon={<Navigation className="size-4" />}
              className="mt-6"
            >
              Get Directions
            </CTAButton>
          </div>
          <MapPreview className="lg:min-h-96" />
        </div>
      </section>

      <FinalCTA
        title="Ready to request service?"
        description="Send the equipment type, issue, and location through WhatsApp. Add photos if they help explain the problem."
        href={site.whatsappHref}
      />
    </main>
  );
}
