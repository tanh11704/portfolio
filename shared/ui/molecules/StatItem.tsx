type StatItemProps = {
  label: string;
  value: string;
};

export function StatItem({ label, value }: StatItemProps) {
  return (
    <div>
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
        {label}
      </p>
      <p className="font-medium text-slate-200">{value}</p>
    </div>
  );
}
