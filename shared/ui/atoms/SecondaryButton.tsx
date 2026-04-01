import type { ReactNode } from "react";

type SecondaryButtonProps = {
  children: ReactNode;
};

export function SecondaryButton({ children }: SecondaryButtonProps) {
  return (
    <button className="rounded-xl border border-slate-700 bg-surface px-8 py-3 font-semibold text-white transition hover:bg-slate-800">
      {children}
    </button>
  );
}
