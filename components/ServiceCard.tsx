import Image from "next/image";
import type { Service } from "@/data/services";
import { iconMap } from "@/components/icon-map";
import CTAButton from "@/components/CTAButton";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  compact?: boolean;
  className?: string;
};

export default function ServiceCard({ service, compact, className }: ServiceCardProps) {
  const Icon = iconMap[service.icon];
  const imageSrc = service.image ?? "/ac-service-hero.jpg";

  if (compact) {
    return (
      <article
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-md bg-white p-2.5 shadow-[0_18px_46px_rgba(4,20,43,0.09)] transition duration-200 hover:shadow-[0_24px_70px_rgba(4,20,43,0.14)] hover:ring-brand-blue/28",
          className,
        )}
      >
        <div className="relative aspect-[2.18] overflow-hidden rounded-t-md bg-brand-light">
          <Image
            src={imageSrc}
            alt={`${service.title} service image`}
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 24vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-brand-navy/10 via-transparent to-white/6" />
        </div>

        <div className="relative flex flex-1 flex-col px-2 pb-2 pt-7">
          <div className="absolute -top-7 left-2 grid size-14 place-items-center rounded-md bg-white text-brand-blue ">
            <Icon className="size-7" aria-hidden="true" />
          </div>

          <h3 className="text-lg font-black leading-snug tracking-normal text-brand-title">
            {service.title}
          </h3>
          <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">
            {service.shortDescription}
          </p>

          <div className="mt-auto pt-4">
            <CTAButton href={service.href} variant="ice" className="w-full">
              Book Service
            </CTAButton>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-md bg-linear-to-br from-white to-brand-light/60 p-5 shadow-[0_18px_50px_rgba(4,20,43,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(4,20,43,0.13)]",
        className,
      )}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="grid size-13 place-items-center rounded-md bg-brand-light text-brand-blue ring-1 ring-brand-blue/10 transition group-hover:bg-brand-navy group-hover:text-brand-ice">
          <Icon className="size-7" aria-hidden="true" />
        </div>
        <span className="rounded-md bg-brand-ice-light/80 px-2.5 py-1 text-xs font-black text-brand-deep">
          {service.mark}
        </span>
      </div>

      <h3 className="text-xl font-black tracking-normal text-brand-title">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>

      <ul className="mt-5 space-y-2 text-sm text-slate-600">
        {service.details.map((detail) => (
          <li key={detail} className="flex gap-2">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-blue" aria-hidden="true" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <CTAButton href={service.href} variant="navy" className="w-full">
          Book Service
        </CTAButton>
      </div>
    </article>
  );
}
