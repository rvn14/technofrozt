import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import type { IconName } from "@/data/services";
import { iconMap } from "@/components/icon-map";
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
  const whatsapp = actionVariant === "primary";

  const content = (
    <>
      <div
        className={cn(
          "mb-5 grid size-12 place-items-center rounded-xl transition-colors",
          whatsapp
            ? "bg-emerald-50 text-brand-whatsapp-dark ring-1 ring-emerald-200"
            : "bg-brand-light text-brand-blue ring-1 ring-brand-blue/10",
        )}
      >
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-black text-brand-title">{title}</h3>
      <div className="mt-3 flex-1 text-sm leading-6 text-slate-600">{description}</div>
      {actionLabel ? (
        <span
          className={cn(
            "mt-5 inline-flex items-center gap-2 text-sm font-bold",
            whatsapp ? "text-brand-whatsapp-dark" : "text-brand-blue",
          )}
        >
          {actionIcon ? <span aria-hidden="true">{actionIcon}</span> : null}
          {actionLabel}
          <ArrowUpRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      ) : null}
    </>
  );

  const classes = cn(
    "group flex h-full flex-col rounded-2xl border bg-white p-6 shadow-[0_10px_30px_rgba(4,20,43,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(4,20,43,0.10)] focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-ice/60",
    whatsapp ? "border-emerald-200" : "border-slate-200",
    className,
  );

  if (actionHref) {
    return (
      <a
        href={actionHref}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={`${actionLabel ?? title}${external ? " (opens in a new tab)" : ""}`}
      >
        {content}
      </a>
    );
  }

  return <article className={classes}>{content}</article>;
}
