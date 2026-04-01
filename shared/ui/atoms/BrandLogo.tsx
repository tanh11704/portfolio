type BrandLogoProps = {
  name: string;
  role: string;
};

export function BrandLogo({ name, role }: BrandLogoProps) {
  return (
    <div className="flex flex-col">
      <span className="text-lg font-semibold text-white">{name}</span>
      <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
        {role}
      </span>
    </div>
  );
}
