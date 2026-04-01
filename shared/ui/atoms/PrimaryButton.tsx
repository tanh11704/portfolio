import type { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
};

export function PrimaryButton({ children }: PrimaryButtonProps) {
  return (
    <button className="rounded-xl bg-brand px-8 py-3 font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-blue-700">
      {children}
    </button>
  );
}
