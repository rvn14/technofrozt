import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";
import NavBar from "../components/NavBar";
import "./globals.css";
import ReactLenis from "lenis/react";
import { cn } from "@/lib/utils";
import { seoKeywords, site } from "@/data/site";
import StructuredData from "@/components/StructuredData";
import { localBusinessSchema, siteUrl, socialImage, websiteSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TECHNOFROST | A/C, Refrigeration & Appliance Repair in Kalpitiya",
    template: "%s | TECHNOFROST",
  },
  description:
    "TECHNOFROST provides A/C installation, refrigeration repair, washing machine repair, motor rewinding, auto A/C support, and spare parts around Kalpitiya.",
  keywords: seoKeywords,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  category: "Home and appliance repair services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "TECHNOFROST | Cooling & Appliance Service Support",
    description: site.description,
    siteName: "TECHNOFROST",
    locale: "en_LK",
    type: "website",
    url: "/",
    images: [{ url: socialImage, alt: "TECHNOFROST cooling and appliance services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TECHNOFROST | Cooling & Appliance Services in Kalpitiya",
    description: site.description,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        inter.variable,
        bebasNeue.variable,
      )}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full bg-white text-slate-950">
        <StructuredData data={[localBusinessSchema, websiteSchema]} />
        <Preloader />
        <NavBar />
        <ReactLenis root>
          {children}
        </ReactLenis>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
