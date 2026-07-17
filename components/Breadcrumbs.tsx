import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbsProps = {
  currentPage: string;
};

export default function Breadcrumbs({ currentPage }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm font-semibold text-white/72">
        <li>
          <Link
            href="/"
            className="rounded-full transition-colors hover:text-brand-ice focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-ice/50"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="size-4 text-white/42" />
        </li>
        <li aria-current="page" className="text-white">
          {currentPage}
        </li>
      </ol>
    </nav>
  );
}
