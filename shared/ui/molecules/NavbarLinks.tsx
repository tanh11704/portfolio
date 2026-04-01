import { NavItem } from "@/shared/ui/atoms/NavItem";

export type NavbarLink = {
  href: string;
  label: string;
};

type NavbarLinksProps = {
  links: NavbarLink[];
};

export function NavbarLinks({ links }: NavbarLinksProps) {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      {links.map((link) => (
        <NavItem key={link.href} href={link.href} label={link.label} />
      ))}
    </nav>
  );
}
