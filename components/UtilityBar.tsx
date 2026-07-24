import { MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const displayPhone = site.phones[0].replace(
  /^(\d{3})(\d{3})(\d{4})$/,
  "$1 $2 $3",
);

export default function UtilityBar({ collapsed }: { collapsed: boolean }) {
  return (
    <div
      aria-hidden={collapsed || undefined}
      className={cn(
        "hidden overflow-hidden bg-brand-navy text-white transition-[max-height,opacity] duration-200 motion-reduce:transition-none lg:block",
        collapsed
          ? "pointer-events-none max-h-0 opacity-0"
          : "max-h-10 opacity-100",
      )}
    >
      <div className="mx-auto flex min-h-10 w-full  items-center justify-between gap-6 px-8 text-xs font-medium">
        <a
          href={site.directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={collapsed ? -1 : undefined}
          className="inline-flex min-h-9 items-center gap-2 rounded-md text-brand-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-ice"
        >
          <MapPin className="size-4 text-brand-ice" aria-hidden="true" />
          AC and appliance services across Kalpitiya and nearby areas
          <span className="sr-only"> (opens in a new tab)</span>
        </a>

        <a
          href={site.primaryPhoneHref}
          tabIndex={collapsed ? -1 : undefined}
          className="inline-flex min-h-9 items-center gap-2 rounded-md font-semibold text-white transition-colors hover:text-brand-ice focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-ice"
        >
          <Phone className="size-4" aria-hidden="true" />
          {displayPhone}
        </a>
      </div>
    </div>
  );
}
