import Image from "next/image";
import type { IconName } from "@/data/services";
import { iconMap } from "@/components/icon-map";

type TrustBadgeProps = {
  title: string;
  description: string;
  icon: IconName;
  image?: string;
};

export default function TrustBadge({ title, description, icon, image }: TrustBadgeProps) {
  const Icon = iconMap[icon];

  return (
    <article className="group rounded-md bg-linear-to-b from-brand-ice-light via-white to-brand-ice-light p-4 text-center ">
      <div className="bg-white pb-2 user-select-none pointer-events-none">
        <div className="relative mb-5 aspect-[1.56] overflow-hidden rounded-md user-select-none pointer-events-none">
        {image ? (
          <Image
            src={image}
            alt={`${title} service illustration`}
            fill
            sizes="(max-width: 768px) 86vw, (max-width: 1280px) 42vw, 22vw"
            className="object-contain px-4 py-3 transition duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="grid h-full place-items-center text-brand-blue">
            <Icon className="size-12" aria-hidden="true" />
          </div>
        )}
      </div>
      <div className="user-select-none pointer-events-none">
        <h3 className="text-xl font-black tracking-normal text-brand-title">{title}</h3>
      <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-brand-red-dark">
        <span className="mx-auto block h-1 w-1 translate-x-6 rounded-full bg-brand-red-dark" />
      </div>
      <p className="mx-auto mt-4 max-w-65 text-sm leading-6 text-slate-600">{description}</p>
      </div>
      </div>
    </article>
  );
}
