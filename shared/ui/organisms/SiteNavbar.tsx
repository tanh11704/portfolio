import Link from "next/link";
import { BrandLogo } from "@/shared/ui/atoms/BrandLogo";
import { PrimaryButton } from "@/shared/ui/atoms/PrimaryButton";
import { NavbarLinks, type NavbarLink } from "@/shared/ui/molecules/NavbarLinks";

type SiteNavbarProps = {
  brandName: string;
  role: string;
  links: NavbarLink[];
  ctaHref: string;
  ctaLabel: string;
  ctaDownload?: boolean;
};

export function SiteNavbar({
  brandName,
  role,
  links,
  ctaHref,
  ctaLabel,
  ctaDownload,
}: SiteNavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/#home" className="min-w-0 shrink transition-opacity hover:opacity-90">
          <BrandLogo name={brandName} role={role} />
        </Link>
        <NavbarLinks links={links} />
        <PrimaryButton href={ctaHref} download={ctaDownload}>
          {ctaLabel}
        </PrimaryButton>
      </div>
    </header>
  );
}
