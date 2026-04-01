import Link from "next/link";

type NavItemProps = {
  href: string;
  label: string;
};

export function NavItem({ href, label }: NavItemProps) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-slate-300 transition hover:text-brand"
    >
      {label}
    </Link>
  );
}
