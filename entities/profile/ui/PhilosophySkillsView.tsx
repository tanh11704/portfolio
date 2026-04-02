"use client";

import type { PhilosophyItem, SkillItem } from "@/entities/profile/model/profile.data";
import { motion, useReducedMotion } from "framer-motion";
import { useClientMotionReady } from "@/shared/lib/useClientMotionReady";
import { SectionBadge } from "@/shared/ui/atoms/SectionBadge";
import { SectionHeading } from "@/shared/ui/atoms/SectionHeading";
import { SkillChip } from "@/shared/ui/atoms/SkillChip";
import { PhilosophyItemCard } from "@/shared/ui/molecules/PhilosophyItemCard";

type PhilosophySkillsViewProps = {
  badge: string;
  title: string;
  description: string;
  skillsTitle: string;
  skillsVersion: string;
  skills: SkillItem[];
  philosophyTitle: string;
  philosophyItems: PhilosophyItem[];
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

export function PhilosophySkillsView({
  badge,
  title,
  description,
  skillsTitle,
  skillsVersion,
  skills,
  philosophyTitle,
  philosophyItems,
}: PhilosophySkillsViewProps) {
  const motionReady = useClientMotionReady();
  const prefersReducedMotion = useReducedMotion() ?? false;
  const animate = motionReady && !prefersReducedMotion;

  const block = (delay = 0) =>
    animate
      ? {
          initial: { opacity: 0, y: 16 } as const,
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-12% 0px" } as const,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const, delay },
        }
      : {};

  const skillsBlockTop = animate
    ? {
        initial: { opacity: 0, y: 12 } as const,
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-10% 0px" } as const,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const, delay: 0.05 },
      }
    : {};

  const gridProps = animate
    ? {
        variants: container,
        initial: "hidden" as const,
        whileInView: "show" as const,
        viewport: { once: true, margin: "-8% 0px" } as const,
      }
    : {};

  const itemFade = animate
    ? {
        variants: {
          hidden: { opacity: 0, y: 14 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
          },
        },
      }
    : {};

  return (
    <section className="scroll-mt-28 border-t border-slate-800 pt-16 lg:scroll-mt-24" id="skills">
      <motion.div {...block(0)}>
        <SectionBadge text={badge} />

        <div className="mt-5 max-w-3xl">
          <SectionHeading title={title} />
          <p className="mt-5 text-lg leading-relaxed text-slate-400">{description}</p>
        </div>
      </motion.div>

      <motion.div className="mt-12" {...skillsBlockTop}>
        <div className="mb-4 flex items-end justify-between gap-3 border-b border-slate-800 pb-4">
          <h3 className="text-2xl font-bold text-white">{skillsTitle}</h3>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{skillsVersion}</span>
        </div>

        <motion.div className="grid grid-cols-2 gap-4 md:grid-cols-4" {...gridProps}>
          {skills.map((skill) => (
            <motion.div key={skill.name} {...itemFade}>
              <SkillChip name={skill.name} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-14 scroll-mt-28 lg:scroll-mt-24"
        id="philosophy"
        {...block(0)}
      >
        <h3 className="mb-4 text-2xl font-bold text-white">{philosophyTitle}</h3>
        <motion.div className="grid gap-4" {...gridProps}>
          {philosophyItems.map((item) => (
            <motion.div key={item.title} {...itemFade}>
              <PhilosophyItemCard title={item.title} description={item.description} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
