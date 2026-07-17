import { services } from "@/data/services";
import { site } from "@/data/site";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://technofrozt.vercel.app";

export const siteUrl = configuredUrl.replace(/\/$/, "");
export const socialImage = "/images/technofrost-hero-desktop.webp";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": `${siteUrl}/#business`,
  name: site.name,
  url: siteUrl,
  logo: `${siteUrl}${site.logo}`,
  image: `${siteUrl}${socialImage}`,
  description: site.description,
  telephone: "+94 76 780 1583",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "6PCX+GQG, Kurakkanhena, Main Street",
    addressLocality: "Kalpitiya",
    postalCode: "61354",
    addressCountry: "LK",
  },
  areaServed: {
    "@type": "City",
    name: "Kalpitiya",
  },
  hasMap: site.directionsHref,
  sameAs: [site.directionsHref],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+94 76 780 1583",
    contactType: "customer service",
    areaServed: "LK",
    availableLanguage: ["English", "Sinhala", "Tamil"],
  },
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.shortDescription,
      areaServed: "Kalpitiya, Sri Lanka",
    },
  })),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: site.name,
  description: site.description,
  publisher: { "@id": `${siteUrl}/#business` },
  inLanguage: "en-LK",
};
