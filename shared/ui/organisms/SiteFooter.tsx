type SiteFooterProps = {
  name: string;
  role: string;
  year: number;
};

export function SiteFooter({ name, role, year }: SiteFooterProps) {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {name}. All rights reserved.
        </p>
        <p>{role}</p>
      </div>
    </footer>
  );
}
