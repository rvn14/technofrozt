import type { ReactNode } from "react";
import type { IconName } from "@/data/services";
import { iconMap } from "@/components/icon-map";
import CTAButton from "@/components/CTAButton";
import type { CTAButtonVariant } from "@/components/CTAButton";
import { cn } from "@/lib/utils";

type ContactCardProps = {
  title: string;
  description: ReactNode;
  icon: IconName;
  actionLabel?: string;
  actionHref?: string;
  actionIcon?: ReactNode;
  actionVariant?: CTAButtonVariant;
  external?: boolean;
  className?: string;
};

export default function ContactCard({
  title,
  description,
  icon,
  actionLabel,
  actionHref,
  actionIcon,
  actionVariant,
  external,
  className,
}: ContactCardProps) {
  const Icon = iconMap[icon];

  return (
    <article
      className={cn(
        "rounded-md bg-white p-6 shadow-[0_18px_50px_rgba(4,20,43,0.08)]",
        className,
      )}
    >
      <div
        className={cn(
          "mb-5 grid size-12 place-items-center rounded-md",
          actionVariant === "primary" ? "bg-brand-whatsapp-dark text-white" : "bg-brand-navy text-brand-ice",
        )}
      >
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-black text-brand-title">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-slate-600">{description}</div>
      {actionLabel && actionHref ? (
        <CTAButton
          href={actionHref}
          variant={actionVariant ?? "secondary"}
          external={external}
          icon={actionIcon}
          className="mt-5 w-full"
        >
          {actionLabel}
        </CTAButton>
      ) : null}
    </article>
  );
}
