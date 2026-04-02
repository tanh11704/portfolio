type SkillChipProps = {
  name: string;
};

export function SkillChip({ name }: SkillChipProps) {
  return (
    <div className="h-full rounded-xl border border-slate-800 bg-surface/40 px-4 py-4 text-sm font-semibold text-slate-100 shadow-[inset_0_0_0_1px_rgba(59,130,246,0.08)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-[0_0_0_1px_rgba(37,99,235,0.2),0_12px_40px_-24px_rgba(37,99,235,0.35)]">
      {name}
    </div>
  );
}
