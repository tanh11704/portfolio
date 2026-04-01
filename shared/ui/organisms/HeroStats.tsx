import type { HeroStat } from "@/entities/profile/model/profile.data";
import { StatItem } from "@/shared/ui/molecules/StatItem";

type HeroStatsProps = {
  items: HeroStat[];
};

export function HeroStats({ items }: HeroStatsProps) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-8 border-t border-slate-800 pt-12 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <StatItem key={item.label} label={item.label} value={item.value} />
      ))}
    </div>
  );
}
