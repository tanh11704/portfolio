type PhilosophyItemCardProps = {
  title: string;
  description: string;
};

export function PhilosophyItemCard({ title, description }: PhilosophyItemCardProps) {
  return (
    <article className="h-full rounded-2xl border border-slate-800 border-l-4 border-l-brand/90 bg-surface/30 p-5 transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-slate-700 hover:shadow-lg hover:shadow-brand/5">
      <div className="mb-3 flex items-center gap-3">
        <div className="h-2.5 w-2.5 rounded-full bg-brand" />
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-slate-400">{description}</p>
    </article>
  );
}
