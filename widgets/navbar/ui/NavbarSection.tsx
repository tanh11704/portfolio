import { profileData } from "@/entities/profile/model/profile.data";
import { SiteNavbar } from "@/shared/ui/organisms/SiteNavbar";

const navbarLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function NavbarSection() {
  return (
    <SiteNavbar
      brandName={profileData.name}
      role={profileData.role}
      links={navbarLinks}
    />
  );
}
