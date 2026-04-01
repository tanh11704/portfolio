type SectionBadgeProps = {
  text: string;
};

export function SectionBadge({ text }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 text-brand text-xs font-bold tracking-[0.2em] uppercase">
      <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
      {text}
    </div>
  );
}
