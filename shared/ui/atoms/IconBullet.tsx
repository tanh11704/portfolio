type IconBulletProps = {
  label: string;
};

export function IconBullet({ label }: IconBulletProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-surface/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
      <span className="h-2 w-2 rounded-full bg-brand" />
      {label}
    </div>
  );
}
