import { Snowflake, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

type VisualPlaceholderProps = {
  label: string;
  className?: string;
  priority?: boolean;
};

export default function VisualPlaceholder({ label, className }: VisualPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative isolate flex min-h-96 overflow-hidden rounded-lg bg-brand-navy p-6 text-white shadow-[0_24px_80px_rgba(4,20,43,0.18)]",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-brand-bg via-brand-navy to-brand-deep" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(133,217,255,0.11)_1px,transparent_1px),linear-gradient(180deg,rgba(133,217,255,0.09)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="absolute -right-18 -top-18 size-56 rounded-full border border-brand-ice/20" />
      <div className="absolute -bottom-16 left-8 size-44 rounded-full border border-brand-blue/30" />

      <div className="mt-auto w-full rounded-md bg-white/10 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] ring-1 ring-white/10 backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="grid size-12 place-items-center rounded-md bg-brand-ice text-brand-navy">
            <Snowflake className="size-6" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-black uppercase tracking-normal text-brand-ice">
              TECHNOFROST
            </span>
            <span className="mt-1 block text-xl font-black">{label}</span>
          </span>
        </div>
        <div className="mt-5 flex items-center gap-3 rounded-md bg-brand-bg/55 px-4 py-3 text-sm font-semibold text-brand-ice-light">
          <Wrench className="size-5 shrink-0 text-brand-ice" aria-hidden="true" />
          Cooling, refrigeration, and appliance service support.
        </div>
      </div>
    </div>
  );
}
