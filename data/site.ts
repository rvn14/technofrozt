const quoteWhatsappMessage = [
  "Hello TECHNOFROST 👋",
  "",
  "I would like a quotation for:",
  "",
  "Service:",
  "Appliance / AC:",
  "Requirement:",
  "Location:",
  "Preferred date:",
].join("\n");

const serviceWhatsappMessage = [
  "Hello TECHNOFROST 👋",
  "",
  "I need help with a service.",
  "",
  "Service needed:",
  "Appliance / AC brand and model:",
  "Issue or requirement:",
  "Location:",
  "Preferred visit date:",
  "",
  "I can send photos if needed.",
].join("\n");

export const site = {
  name: "TECHNOFROST",
  displayName: "TechnoFrost",
  tagline: "Premium cooling, refrigeration, and appliance service support.",
  description:
    "TECHNOFROST provides reliable A/C, refrigeration, washing machine, hot water shower, and spare parts services for homes and businesses around Kalpitiya.",
  address: "TECHNOFROST – Kurakkanhena, Main Street, Kalpitiya",
  email: "techno_frost@yahoo.com",
  phones: ["0767801583", "0712801584"],
  whatsappNumber: "94767801583",
  primaryPhoneHref: "tel:+94767801583",
  secondaryPhoneHref: "tel:+94712801584",
  emailHref: "mailto:techno_frost@yahoo.com",
  whatsappHref: `https://wa.me/94767801583?text=${encodeURIComponent(serviceWhatsappMessage)}`,
  quoteWhatsappHref: `https://wa.me/94767801583?text=${encodeURIComponent(quoteWhatsappMessage)}`,
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=6PCX%2BGQG%2C%20Kurakkanhena%2C%20Main%20Street%2C%20Kalpitiya%2061354",
  mapEmbedHref:
    "https://www.google.com/maps?q=6PCX%2BGQG%2C%20Kurakkanhena%2C%20Main%20Street%2C%20Kalpitiya%2061354&output=embed",
  logo: "/images/logo.png",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const seoKeywords = [
  "TECHNOFROST",
  "TechnoFrost Kalpitiya",
  "AC service Sri Lanka",
  "air conditioner repair Kalpitiya",
  "refrigerator repair Kalpitiya",
  "deep freezer repair",
  "washing machine repair",
  "hot water shower repair",
  "appliance spare parts Sri Lanka",
];
