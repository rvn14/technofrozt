import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: CTAButtonVariant;
  className?: string;
  icon?: ReactNode;
  external?: boolean;
};

export type CTAButtonVariant = "red" | "navy" | "ice" | "outline" | "white" | "whatsapp";

const variants: Record<CTAButtonVariant, { button: string; icon: string; label: string }> = {
  red: {
    button: "bg-brand-red text-white shadow-lg shadow-brand-red/20 hover:bg-brand-red-dark",
    icon: "bg-brand-red-dark text-white group-active/button:bg-[#a7061a]",
    label: "text-white!",
  },
  navy: {
    button: "bg-brand-navy text-white shadow-lg shadow-brand-navy/20 hover:bg-brand-deep",
    icon: "bg-brand-deep text-white group-active/button:bg-brand-panel",
    label: "text-white!",
  },
  ice: {
    button: "bg-brand-ice text-white shadow-lg shadow-brand-ice/20 hover:bg-brand-blue",
    icon: "bg-brand-blue text-white group-active/button:bg-brand-blue-dark",
    label: "text-white!",
  },
  outline: {
    button: "bg-white text-brand-navy shadow-sm hover:bg-brand-navy",
    icon: "bg-brand-navy text-white group-active/button:bg-brand-deep",
    label: "text-brand-navy",
  },
  white: {
    button: "bg-white text-brand-navy shadow-lg shadow-black/10 hover:bg-brand-ice-light",
    icon: "bg-brand-ice-light text-brand-navy group-active/button:bg-brand-ice",
    label: "text-brand-navy",
  },
  whatsapp: {
    button: "bg-brand-whatsapp text-white shadow-lg shadow-brand-whatsapp/25 hover:bg-brand-whatsapp-dark",
    icon: "bg-brand-whatsapp-dark text-white group-active/button:bg-[#0f766e]",
    label: "text-white!",
  },
};

export default function CTAButton({
  href,
  children,
  variant = "navy",
  className,
  icon,
  external,
}: CTAButtonProps) {
  const content = (
    <>
      <span
        className={cn(
          "relative z-10 min-w-0 truncate transition-opacity duration-300 ease-in-out group-hover/button:opacity-0 group-focus-visible/button:opacity-0",
          variants[variant].label,
        )}
      >
        {children}
      </span>
      <span
        className={cn(
          "absolute inset-y-0 right-0 z-20 flex w-11 items-center justify-center transition-[width,background-color] duration-300 ease-in-out group-hover/button:w-full group-focus-visible/button:w-full",
          variants[variant].icon,
        )}
        aria-hidden="true"
      >
        <span className="grid size-5 place-items-center transition-transform duration-300 group-hover/button:scale-110 group-focus-visible/button:scale-110">
          {icon ?? <ArrowRight className="size-4" />}
        </span>
      </span>
    </>
  );

  const classes = cn(
    "group/button relative isolate inline-flex min-h-11 max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-md py-2.5 pl-4 pr-14 text-center text-sm font-bold uppercase tracking-[1.5px] transition-[background-color,box-shadow,transform] duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-ice/50 active:translate-y-px",
    variants[variant].button,
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
