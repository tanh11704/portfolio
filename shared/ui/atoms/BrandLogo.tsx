type BrandLogoProps = {
  name: string;
  role: string;
};

export function BrandLogo({ name, role }: BrandLogoProps) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/15 font-mono text-base font-semibold leading-none text-brand ring-1 ring-brand/25"
        aria-hidden
      >
        &gt;_
      </span>
      <div className="min-w-0">
        <span className="block truncate text-lg font-semibold text-white">{name}</span>
        <span className="block truncate text-xs uppercase tracking-[0.25em] text-slate-500">
          {role}
        </span>
      </div>
    </div>
  );
}
