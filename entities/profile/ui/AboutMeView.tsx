import type { AboutValue } from "@/entities/profile/model/profile.data";
import { ValueCard } from "@/shared/ui/molecules/ValueCard";

type AboutMeViewProps = {
  title: string;
  description: string;
  values: AboutValue[];
};

export function AboutMeView({ title, description, values }: AboutMeViewProps) {
  return (
    <section className="mt-24 grid gap-10 border-t border-slate-800 pt-16 lg:grid-cols-2">
      <div>
        <h2 className="text-4xl font-bold text-white">{title}</h2>
        <span className="mt-3 block h-1 w-14 rounded-full bg-brand" />
      </div>

      <div>
        <p className="text-xl leading-relaxed text-slate-300">{description}</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {values.map((value) => (
            <ValueCard
              key={value.title}
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
