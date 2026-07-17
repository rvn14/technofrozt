import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { site } from "@/data/site";

type MapPreviewProps = {
  className?: string;
};

export default function MapPreview({ className = "" }: MapPreviewProps) {
  return (
    <a
      href={site.directionsHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${site.address} in Google Maps`}
      className={`group relative block min-h-88 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_12px_32px_rgba(4,20,43,0.08)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-blue/35 ${className}`}
    >
      <Image
        src="/images/technofrost-map-preview.png"
        alt="Map preview showing the TECHNOFROST location near Kalpitiya"
        fill
        sizes="(max-width: 1024px) 100vw, 58vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.015] group-focus-visible:scale-[1.015] motion-reduce:transition-none"
      />

      <div className="absolute inset-0 bg-linear-to-t from-brand-navy/18 via-transparent to-transparent" />

      <span className="absolute bottom-4 right-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-navy px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-colors group-hover:bg-brand-blue group-focus-visible:bg-brand-blue">
        Open in Google Maps
        <ExternalLink className="size-4" aria-hidden="true" />
      </span>
    </a>
  );
}
