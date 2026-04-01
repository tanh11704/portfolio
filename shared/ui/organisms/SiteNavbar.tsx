import { BrandLogo } from "@/shared/ui/atoms/BrandLogo";
import { PrimaryButton } from "@/shared/ui/atoms/PrimaryButton";
import { NavbarLinks, type NavbarLink } from "@/shared/ui/molecules/NavbarLinks";

type SiteNavbarProps = {
  brandName: string;
  role: string;
  links: NavbarLink[];
};

export function SiteNavbar({ brandName, role, links }: SiteNavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <BrandLogo name={brandName} role={role} />
        <NavbarLinks links={links} />
        <PrimaryButton>Contact</PrimaryButton>
      </div>
    </header>
  );
}
