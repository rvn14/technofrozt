import Link from "next/link";
import { BriefcaseBusiness, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function MobileStickyCTA() {
  return (
    <nav
      aria-label="Quick mobile actions"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-blue/20 bg-white/95 px-3 py-2 shadow-[0_-14px_40px_rgba(4,20,43,0.14)] backdrop-blur lg:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <ActionLink href={site.primaryPhoneHref} label="Call" icon={<Phone className="size-5" />} />
        <ActionLink
          href={site.whatsappHref}
          label="WhatsApp"
          icon={<FaWhatsapp className="size-5" />}
          variant="whatsapp"
          external
        />
        <ActionLink
          href="/services"
          label="Services"
          icon={<BriefcaseBusiness className="size-5" />}
        />
      </div>
    </nav>
  );
}

function ActionLink({
  href,
  label,
  icon,
  variant = "default",
  external,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  variant?: "default" | "whatsapp";
  external?: boolean;
}) {
  const classes = cn(
    "flex min-h-12 flex-col items-center justify-center gap-1 rounded-md text-xs font-black transition active:translate-y-px",
    variant === "whatsapp"
      ? "bg-brand-whatsapp text-white shadow-lg shadow-brand-whatsapp/20"
      : "bg-brand-light text-brand-navy",
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {icon}
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {icon}
      {label}
    </Link>
  );
}
