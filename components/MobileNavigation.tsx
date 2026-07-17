"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, X } from "lucide-react";
import { useEffect, useRef, type RefObject } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

type MobileNavigationProps = {
  open: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
};

export default function MobileNavigation({
  open,
  onClose,
  isActive,
  returnFocusRef,
}: MobileNavigationProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const returnFocusTarget = returnFocusRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => {
      firstLinkRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      const first = focusable[0];
      const last = focusable.at(-1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      returnFocusTarget?.focus();
    };
  }, [onClose, open, returnFocusRef]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close navigation menu"
        onClick={onClose}
        className="absolute inset-0 size-full cursor-default bg-brand-navy/45 backdrop-blur-[2px]"
      />

      <div
        ref={panelRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-navigation-title"
        className="absolute inset-y-0 right-0 flex w-[min(88vw,22rem)] flex-col overflow-y-auto bg-white p-5 shadow-[-24px_0_60px_rgba(2,9,22,0.2)] motion-safe:animate-in motion-safe:slide-in-from-right motion-safe:duration-200"
      >
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <Link
            href="/"
            onClick={onClose}
            className="flex min-w-0 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-ice"
          >
            <Image
              src={site.logo}
              alt=""
              width={44}
              height={44}
              sizes="44px"
              className="size-11 rounded-xl object-contain"
            />
            <span
              id="mobile-navigation-title"
              className="font-bebas-neue text-2xl leading-none tracking-[0.035em] text-brand-navy"
            >
              Techno<span className="text-brand-red-dark">Frost</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-slate-200 text-brand-navy transition-colors hover:bg-brand-light focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-ice"
            aria-label="Close navigation menu"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="py-6" aria-label="Mobile navigation">
          <ul className="grid gap-1">
            {navLinks.map((item, index) => {
              const active = isActive(item.href);

              return (
                <li key={item.href}>
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center justify-between rounded-xl px-4 text-base font-semibold text-brand-navy transition-colors hover:bg-brand-light focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-ice",
                      active && "bg-brand-light text-brand-blue",
                    )}
                  >
                    {item.label}
                    {active ? (
                      <span
                        className="size-2 rounded-full bg-brand-blue"
                        aria-hidden="true"
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto grid gap-3 border-t border-slate-200 pt-5">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-brand-whatsapp-dark px-4 text-sm font-semibold text-white! shadow-[0_10px_24px_rgba(21,155,126,0.22)] transition-colors hover:bg-brand-whatsapp focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-ice focus-visible:ring-offset-2"
          >
            <FaWhatsapp className="size-5" aria-hidden="true" />
            Chat on WhatsApp
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={site.primaryPhoneHref}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full text-sm font-semibold text-brand-navy underline-offset-4 hover:text-brand-blue hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-ice"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call {site.phones[0]}
          </a>
        </div>
      </div>
    </div>
  );
}
