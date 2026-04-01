import { profileData } from "@/entities/profile/model/profile.data";
import { SiteFooter } from "@/shared/ui/organisms/SiteFooter";

export function FooterSection() {
  return (
    <SiteFooter
      name={profileData.name}
      role={profileData.role}
      year={new Date().getFullYear()}
    />
  );
}
