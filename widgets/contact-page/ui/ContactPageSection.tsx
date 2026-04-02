import { profileData } from "@/entities/profile/model/profile.data";
import { ContactView } from "@/entities/profile/ui/ContactView";

export function ContactPageSection() {
  return (
    <ContactView
      badge={profileData.contactPageBadge}
      title={profileData.contactPageTitle}
      description={profileData.contactPageDescription}
      email={profileData.email}
      phone={profileData.phone}
      location={profileData.location}
      githubUrl={profileData.githubUrl}
      linkedinUrl={profileData.linkedinUrl}
      resumeFile={profileData.resumeFile}
    />
  );
}
