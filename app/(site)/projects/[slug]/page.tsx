import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/entities/project/model/project.data";

type ProjectDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

const statusLabel = {
  live: "Live",
  "in-progress": "In progress",
  archived: "Archived",
} as const;

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="overflow-hidden">
      <section className="mx-auto w-full max-w-6xl px-5 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
        >
          <span aria-hidden>←</span>
          Back to projects
        </Link>

        <header className="mt-6 rounded-3xl border border-slate-800 bg-surface/45 p-5 shadow-[inset_0_0_0_1px_rgba(59,130,246,0.06)] sm:p-7 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-semibold text-slate-300">
              {statusLabel[project.status]}
            </span>
            <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              {project.period}
            </span>
            <span className="rounded-full bg-slate-800/70 px-3 py-1 text-xs font-semibold text-slate-300">
              {project.role}
            </span>
          </div>

          <h1 className="mt-4 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveHref ? (
              <Link
                href={project.liveHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Live demo
              </Link>
            ) : null}
            {project.repoHref ? (
              <Link
                href={project.repoHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
              >
                Source code
              </Link>
            ) : null}
          </div>
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-slate-800 bg-surface/35 p-5 sm:p-6 lg:col-span-2">
            <h2 className="text-lg font-bold text-white sm:text-xl">Key highlights</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="rounded-2xl border border-slate-800 bg-surface/35 p-5 sm:p-6">
            <h2 className="text-lg font-bold text-white">Tech stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-800 bg-surface/35 p-5 sm:p-6">
            <h2 className="text-lg font-bold text-white sm:text-xl">Architecture decisions</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              {project.architecture.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-surface/35 p-5 sm:p-6">
            <h2 className="text-lg font-bold text-white sm:text-xl">Outcomes</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              {project.outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
