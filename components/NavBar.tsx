"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import CTAButton from "@/components/CTAButton";
import MobileNavigation from "@/components/MobileNavigation";
import UtilityBar from "@/components/UtilityBar";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    let animationFrame = 0;

    const updateHeader = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
      });
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur transition-shadow duration-200 motion-reduce:transition-none",
          scrolled && "shadow-[0_8px_24px_rgba(4,20,43,0.08)]",
        )}
      >
        <UtilityBar collapsed={scrolled} />

        <div
          className={cn(
            "mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 transition-[height] duration-200 motion-reduce:transition-none sm:px-6 lg:px-8",
            scrolled ? "h-16" : "h-18 lg:h-20",
          )}
        >
          <Link
            href="/"
            className="flex min-w-0 shrink-0 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-ice"
          >
            <Image
              src={site.logo}
              alt=""
              width={52}
              height={52}
              priority
              sizes="52px"
              className={cn(
                "rounded-xl object-contain transition-[width,height] duration-200 motion-reduce:transition-none",
                scrolled ? "size-11" : "size-12 lg:size-13",
              )}
            />
            <span className="font-bebas-neue text-[1.7rem] leading-none tracking-[0.035em] text-brand-navy sm:text-3xl font-black">
              Techno<span className="text-brand-red-dark">Frost</span>
            </span>
          </Link>

          <div className="hidden items-center gap-3 lg:flex">
            <nav aria-label="Primary navigation">
              <ul className="flex items-center gap-1">
                {navLinks.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "relative inline-flex min-h-11 items-center rounded-lg px-3.5 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-brand-light hover:text-brand-blue focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-ice",
                          active && "bg-brand-light text-brand-blue",
                        )}
                      >
                        {item.label}
                        {active ? (
                          <span
                            className="absolute inset-x-3.5 bottom-1.5 h-0.5 rounded-full bg-brand-blue"
                            aria-hidden="true"
                          />
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <span data-navbar-whatsapp className="inline-flex">
              <CTAButton
                href={site.whatsappHref}
                variant="primary"
                external
                icon={<FaWhatsapp className="size-5" />}
                className="h-12 min-w-42 px-5 py-2.5"
              >
                WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
              </CTAButton>
            </span>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2 lg:hidden">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp (opens in a new tab)"
              className="grid size-11 place-items-center rounded-full bg-brand-whatsapp-dark text-white! shadow-[0_8px_20px_rgba(21,155,126,0.24)] transition-colors hover:bg-brand-whatsapp focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-ice focus-visible:ring-offset-2"
            >
              <FaWhatsapp className="size-5" aria-hidden="true" />
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(true)}
              className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-brand-navy transition-colors hover:bg-brand-light focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-ice"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation
        open={menuOpen}
        onClose={closeMenu}
        isActive={isActive}
        returnFocusRef={menuButtonRef}
      />
    </>
  );
}
