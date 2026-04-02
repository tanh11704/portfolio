import { profileData } from "@/entities/profile/model/profile.data";
import { SiteNavbar } from "@/shared/ui/organisms/SiteNavbar";
import type { NavbarLink } from "@/shared/ui/molecules/NavbarLinks";

const navLinks: NavbarLink[] = [
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/stack", label: "Stack" },
  { href: "/contact", label: "Contact" },
];

export function NavbarSection() {
  return (
    <SiteNavbar
      brandName={profileData.name}
      role={profileData.role}
      links={navLinks}
      ctaHref={profileData.resumeFile}
      ctaLabel="Download CV"
      ctaDownload
    />
  );
}
