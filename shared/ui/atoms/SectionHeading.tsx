type SectionHeadingProps = {
  title: string;
  underline?: boolean;
};

export function SectionHeading({ title, underline = false }: SectionHeadingProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {underline && (
        <span className="mt-3 block h-1 w-14 rounded-full bg-brand" />
      )}
    </div>
  );
}
