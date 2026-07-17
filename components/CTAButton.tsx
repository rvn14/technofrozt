import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: CTAButtonVariant;
  className?: string;
  icon?: ReactNode;
  external?: boolean;
};

type CTAButtonContentProps = {
  children: ReactNode;
  icon?: ReactNode;
};

export type CTAButtonVariant = "primary" | "secondary";

const variants: Record<CTAButtonVariant, string> = {
  primary:
    "border-transparent bg-brand-whatsapp-dark text-white! shadow-[0_12px_28px_rgba(21,155,126,0.26)] after:bg-brand-whatsapp hover:text-brand-navy! hover:shadow-[0_16px_34px_rgba(21,155,126,0.32)] focus-visible:text-brand-navy! focus-visible:ring-brand-whatsapp/35",
  secondary:
    "border-brand-blue/40 bg-transparent text-brand-blue! ring-1 ring-brand-blue/25 after:bg-brand-blue hover:text-white! hover:ring-brand-blue/50 focus-visible:text-white! focus-visible:ring-brand-blue/35",
};

export function ctaButtonClasses(
  variant: CTAButtonVariant = "primary",
  className?: string,
) {
  return cn(
    "group/button relative isolate inline-flex min-h-12 max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-full border px-6 py-3 text-center text-sm font-bold transition-[box-shadow,transform,color] duration-300 ease-in-out after:absolute after:inset-y-0 after:left-1/2 after:-z-10 after:w-0 after:-translate-x-1/2 after:content-[''] after:transition-[width] after:duration-400 after:ease-in-out hover:after:w-full focus-visible:outline-none focus-visible:ring-3 focus-visible:after:w-full active:translate-y-px disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none motion-reduce:after:transition-none",
    variants[variant],
    className,
  );
}

export function CTAButtonContent({ children, icon }: CTAButtonContentProps) {
  return (
    <span className="relative z-10 inline-flex min-w-0 items-center justify-center gap-2.5 whitespace-nowrap group-hover/button:animate-[cta-scale-up_0.3s_ease-in-out] group-focus-visible/button:animate-[cta-scale-up_0.3s_ease-in-out] motion-reduce:animate-none">
      {icon ? (
        <span className="grid size-5 shrink-0 place-items-center" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span>{children}</span>
    </span>
  );
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className,
  icon,
  external,
}: CTAButtonProps) {
  const content = <CTAButtonContent icon={icon}>{children}</CTAButtonContent>;
  const classes = ctaButtonClasses(variant, className);

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
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
