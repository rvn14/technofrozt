"use client";

import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import gsap from "gsap";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { iconMap } from "@/components/icon-map";
import { services, type IconName } from "@/data/services";

type CategoryItem = {
  label: string;
  icon: IconName;
  href: string;
};

const categoryItems: CategoryItem[] = [
  ...services.map((service) => ({
    label: service.title,
    icon: service.icon,
    href: `/services#${service.slug}`,
  })),
  { label: "Book a Service Visit", icon: "calendarCheck", href: "/contact" },
  { label: "Call or WhatsApp Support", icon: "message", href: "/contact" },
];

export default function BrandDropdown() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const lastPointerTypeRef = useRef<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const openMenu = useCallback(() => {
    clearCloseTimeout();
    setOpen(true);
  }, [clearCloseTimeout]);

  const closeMenu = useCallback(() => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 90);
  }, [clearCloseTimeout]);

  const handlePointerEnter = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (event.pointerType === "mouse") {
        openMenu();
      }
    },
    [openMenu],
  );

  const handlePointerLeave = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (event.pointerType === "mouse") {
        closeMenu();
      }
    },
    [closeMenu],
  );

  useEffect(() => {
    const menu = menuRef.current;

    if (!menu) {
      return;
    }

    gsap.killTweensOf(menu);

    if (open) {
      gsap.to(menu, {
        autoAlpha: 1,
        y: 0,
        duration: 0.22,
        ease: "power3.out",
        overwrite: true,
      });
      return;
    }

    gsap.to(menu, {
      autoAlpha: 0,
      y: -12,
      duration: 0.16,
      ease: "power2.in",
      overwrite: true,
    });
  }, [open]);

  useEffect(() => {
    const menu = menuRef.current;

    return () => {
      clearCloseTimeout();
      if (menu) {
        gsap.killTweensOf(menu);
      }
    };
  }, [clearCloseTimeout]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const root = rootRef.current;

      if (root && !root.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative shrink-0"
      onPointerDownCapture={(event) => {
        lastPointerTypeRef.current = event.pointerType;
      }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onFocusCapture={() => {
        if (lastPointerTypeRef.current !== "touch") {
          openMenu();
        }
      }}
      onBlurCapture={(event) => {
        if (lastPointerTypeRef.current === "touch") {
          return;
        }

        if (!event.currentTarget.contains(event.relatedTarget)) {
          closeMenu();
        }
      }}
      onKeyDown={(event) => {
        lastPointerTypeRef.current = null;

        if (event.key === "Escape") {
          setOpen(false);
        }
      }}
    >
      <Button
        type="button"
        variant="ghost"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={(e) => {
          e.preventDefault();

          if (lastPointerTypeRef.current === "mouse") {
            openMenu();
            return;
          }

          setOpen((current) => !current);
        }}
        className="h-12 w-72 cursor-pointer justify-start gap-4 rounded-full border-0 bg-brand-navy px-4 text-base ring-0 hover:bg-background hover:text-brand-navy focus:border-none focus:bg-transparent focus:text-background focus-visible:bg-transparent focus:ring-0 focus-visible:ring-0 aria-expanded:bg-background aria-expanded:text-brand-navy sm:w-80"
      >
        <Menu className="size-5 stroke-[2.2]" aria-hidden="true" />
        <span className="min-w-0  text-left">All Categories</span>
        <ChevronDown
          className={`size-4 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </Button>

      <div
        ref={menuRef}
        role="menu"
        aria-label="All categories"
        data-lenis-prevent
        data-lenis-prevent-touch
        data-lenis-prevent-wheel
        className={`invisible dropdownmenu absolute left-0 top-full z-50 mt-0 max-h-120 w-72 -translate-y-3 touch-pan-y overflow-y-auto overscroll-y-none bg-background py-2 text-[#5f6874]! opacity-0 sm:w-80 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {categoryItems.map(({ href, icon, label }) => {
          const Icon = iconMap[icon];

          return (
            <Link
              href={href}
              role="menuitem"
              className="flex min-h-12 items-center gap-4 px-4 text-base font-medium text-[#5f6874]! outline-none transition-colors hover:bg-black/5 hover:text-brand-navy! focus:bg-white focus:text-brand-navy!"
              key={label}
              onClick={() => setOpen(false)}
            >
              <span
                className="grid size-9 shrink-0 place-items-center text-brand-navy"
                aria-hidden="true"
              >
                <span className="grid size-7 place-items-center rounded border border-brand-navy text-brand-navy">
                  <Icon className="size-4" />
                </span>
              </span>
              <span className="min-w-0 truncate">{label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
