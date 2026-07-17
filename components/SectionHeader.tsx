import CTAButton from "@/components/CTAButton";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between",
        align === "center" && "mx-auto max-w-3xl text-center md:items-center",
        className,
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
        {eyebrow ? (
          <p className="mb-3 text-sm font-extrabold uppercase tracking-normal text-brand-blue">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-black tracking-normal text-brand-title sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
        ) : null}
      </div>

    </div>
  );
}
