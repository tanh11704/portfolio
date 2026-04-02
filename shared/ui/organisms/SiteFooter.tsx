import Link from "next/link";

type SiteFooterProps = {
  name: string;
  role: string;
  year: number;
};

export function SiteFooter({ name, role, year }: SiteFooterProps) {
  return (
    <footer className="scroll-mt-28 border-t border-slate-800 lg:scroll-mt-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4 sm:justify-end">
          <Link href="/contact" className="font-medium text-slate-300 transition hover:text-brand">
            Contact
          </Link>
          <span className="hidden text-slate-600 sm:inline" aria-hidden>
            ·
          </span>
          <p className="text-slate-500">{role}</p>
        </div>
      </div>
    </footer>
  );
}
