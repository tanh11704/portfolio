import Link from "next/link";
import type { ReactNode } from "react";

type SecondaryButtonProps = {
  children: ReactNode;
  href?: string;
  download?: boolean;
  target?: string;
  rel?: string;
};

export function SecondaryButton({
  children,
  href,
  download = false,
  target,
  rel,
}: SecondaryButtonProps) {
  const className =
    "inline-flex rounded-xl border border-slate-700 bg-surface px-8 py-3 font-semibold text-white transition hover:bg-slate-800";

  if (href) {
    return (
      <Link href={href} download={download} className={className} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}
