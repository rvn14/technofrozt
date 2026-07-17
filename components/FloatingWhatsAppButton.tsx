"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function FloatingWhatsAppButton() {
  const pathname = usePathname();
  const internalPage = pathname === "/services" || pathname === "/contact";
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const visible = !internalPage || scrolledPastHero;

  useEffect(() => {
    if (!internalPage) {
      return;
    }

    const updateVisibility = () => setScrolledPastHero(window.scrollY > 360);
    const animationFrame = window.requestAnimationFrame(updateVisibility);
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateVisibility);
    };
  }, [internalPage]);

  return (
    <a
      data-floating-whatsapp
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with TECHNOFROST on WhatsApp (opens in a new tab)"
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
      className={cn(
        "group/floating-whatsapp fixed bottom-5 right-5 z-40 flex h-14 w-14 overflow-hidden rounded-full bg-brand-whatsapp-dark p-0 text-white! shadow-[0_12px_30px_rgba(21,155,126,0.26)] transition-[width,background-color,box-shadow,transform,opacity] duration-300 ease-out hover:w-44 hover:bg-brand-whatsapp hover:shadow-[0_16px_34px_rgba(21,155,126,0.32)] focus-visible:w-44 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-ice focus-visible:ring-offset-2 active:translate-y-0 sm:bottom-6 sm:right-6 motion-reduce:transform-none motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <span
        className="absolute inset-y-0 right-0 grid w-14 shrink-0 place-items-center"
        aria-hidden="true"
      >
        <FaWhatsapp className="size-7" />
      </span>
      <span
        className="pointer-events-none absolute inset-y-0 left-0 right-14 flex items-center justify-center overflow-hidden whitespace-nowrap pl-3 text-sm font-semibold text-white opacity-0 transition-opacity duration-200 group-hover/floating-whatsapp:opacity-100 group-focus-visible/floating-whatsapp:opacity-100 motion-reduce:transition-none"
        aria-hidden="true"
      >
        WhatsApp Us!
      </span>
    </a>
  );
}
