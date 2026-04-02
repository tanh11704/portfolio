import { profileData } from "@/entities/profile/model/profile.data";
import { projects } from "@/entities/project/model/project.data";
import { ProjectsListView } from "@/entities/project/ui/ProjectsListView";

export function ProjectsPageSection() {
  return (
    <ProjectsListView
      badge="Portfolio"
      title="Personal projects"
      description={`Hands-on work from ${profileData.name}'s practice in backend design, APIs, and dependable delivery.`}
      items={projects}
    />
  );
}
