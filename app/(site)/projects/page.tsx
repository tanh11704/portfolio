import { ProjectsPageSection } from "@/widgets/projects-page/ui/ProjectsPageSection";

export default function ProjectsPage() {
  return (
    <main id="projects-page" className="overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
        <ProjectsPageSection />
      </div>
    </main>
  );
}
