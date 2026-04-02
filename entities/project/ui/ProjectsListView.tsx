"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/entities/project/model/project.data";
import { SectionBadge } from "@/shared/ui/atoms/SectionBadge";
import { SectionHeading } from "@/shared/ui/atoms/SectionHeading";
import { useClientMotionReady } from "@/shared/lib/useClientMotionReady";

type ProjectsListViewProps = {
  badge: string;
  title: string;
  description: string;
  items: Project[];
};

const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  "in-progress": "In progress",
  archived: "Archived",
};

export function ProjectsListView({ badge, title, description, items }: ProjectsListViewProps) {
  const motionReady = useClientMotionReady();
  const prefersReducedMotion = useReducedMotion() ?? false;
  const animate = motionReady && !prefersReducedMotion;

  const headerMotion = animate
    ? {
        initial: { opacity: 0, y: 14 } as const,
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-12% 0px" } as const,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
      }
    : {};

  const gridProps = animate
    ? {
        variants: {
          hidden: {},
          show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
        },
        initial: "hidden" as const,
        whileInView: "show" as const,
        viewport: { once: true, margin: "-8% 0px" } as const,
      }
    : {};

  const cardVariants = animate
    ? {
        variants: {
          hidden: { opacity: 0, y: 16 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
          },
        },
      }
    : {};

  return (
    <div className="max-w-6xl">
      <motion.div {...headerMotion}>
        <SectionBadge text={badge} />
        <div className="mt-5">
          <SectionHeading title={title} />
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">{description}</p>
        </div>
      </motion.div>

      <motion.ul
        className="mt-12 grid gap-5 md:grid-cols-2"
        {...gridProps}
        role="list"
      >
        {items.map((project) => (
          <motion.li key={project.title} {...cardVariants}>
            <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-surface/35 p-6 shadow-[inset_0_0_0_1px_rgba(59,130,246,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-slate-700 hover:shadow-lg hover:shadow-brand/10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-0.5 text-xs font-medium text-slate-400">
                  {statusLabel[project.status]}
                </span>
                {project.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 3 ? (
                  <span className="text-xs text-slate-500">+{project.stack.length - 3}</span>
                ) : null}
              </div>

              <h3 className="mt-4 text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.summary}</p>

              <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-800/80 pt-4">
                {project.liveHref ? (
                  <Link
                    href={project.liveHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-brand transition hover:text-blue-400"
                  >
                    Live demo
                  </Link>
                ) : null}
                {project.repoHref ? (
                  <Link
                    href={project.repoHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-slate-300 transition hover:text-white"
                  >
                    Source
                  </Link>
                ) : null}
              </div>
            </article>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
