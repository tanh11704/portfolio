import { profileData } from "@/entities/profile/model/profile.data";
import { ProfileHeroView } from "@/entities/profile/ui/ProfileHeroView";

export function HomeHeroSection() {
  const stats = [
    profileData.specialization,
    profileData.coreStack,
    profileData.approach,
  ];

  return (
    <ProfileHeroView
      availabilityText={profileData.availabilityText}
      title={profileData.heroTitle}
      description={profileData.heroDescription}
      stats={stats}
      avatarSrc={profileData.avatarSrc}
      avatarAlt={`${profileData.name} Avatar`}
      reliabilityLabel={profileData.reliabilityLabel}
      reliabilityValue={profileData.reliabilityValue}
      resumeFile={profileData.resumeFile}
    />
  );
}
