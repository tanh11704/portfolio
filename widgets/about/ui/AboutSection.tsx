import { profileData } from "@/entities/profile/model/profile.data";
import { AboutMeView } from "@/entities/profile/ui/AboutMeView";

export function AboutSection() {
  return (
    <AboutMeView
      title={profileData.aboutTitle}
      description={profileData.aboutDescription}
      values={profileData.aboutValues}
    />
  );
}
