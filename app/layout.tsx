import type { Metadata } from "next";
import { Bebas_Neue, Bonbon, Geist, Geist_Mono, Inter } from "next/font/google";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";
import NavBar from "../components/NavBar";
import "./globals.css";
import ReactLenis from "lenis/react";
import { cn } from "@/lib/utils";
import { seoKeywords, site } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const bonny = Bonbon({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bonny",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TECHNOFROST | A/C, Refrigeration & Appliance Repair in Kalpitiya",
    template: "%s | TECHNOFROST",
  },
  description:
    "TECHNOFROST provides A/C installation, refrigeration repair, washing machine repair, motor rewinding, auto A/C support, and spare parts around Kalpitiya.",
  keywords: seoKeywords,
  openGraph: {
    title: "TECHNOFROST | Cooling & Appliance Service Support",
    description: site.description,
    siteName: "TECHNOFROST",
    locale: "en_LK",
    type: "website",
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
        bonny.variable,
        bebasNeue.variable,
        geistSans.variable,
        geistMono.variable,
      )}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full bg-white text-slate-950">
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
