import Link from "next/link";
import type { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  href?: string;
  download?: boolean;
  target?: string;
  rel?: string;
};

const className =
  "inline-flex items-center justify-center rounded-xl bg-brand px-8 py-3 font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-blue-700";

export function PrimaryButton({ children, href, download, target, rel }: PrimaryButtonProps) {
  if (href) {
    return (
      <Link href={href} className={className} download={download} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return <button type="button" className={className}>{children}</button>;
}
