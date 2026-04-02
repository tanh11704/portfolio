import { profileData } from "@/entities/profile/model/profile.data";
import { PhilosophySkillsView } from "@/entities/profile/ui/PhilosophySkillsView";

export function PhilosophySkillsSection() {
  return (
    <PhilosophySkillsView
      badge={profileData.philosophyBadge}
      title={profileData.philosophyTitle}
      description={profileData.philosophyDescription}
      skillsTitle={profileData.skillsTitle}
      skillsVersion={profileData.skillsVersion}
      skills={profileData.skills}
      philosophyTitle={profileData.engineeringPhilosophyTitle}
      philosophyItems={profileData.philosophyItems}
    />
  );
}
