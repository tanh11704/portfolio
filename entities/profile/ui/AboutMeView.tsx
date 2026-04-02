"use client";

import type { AboutValue } from "@/entities/profile/model/profile.data";
import { motion, useReducedMotion } from "framer-motion";
import { useClientMotionReady } from "@/shared/lib/useClientMotionReady";
import { ValueCard } from "@/shared/ui/molecules/ValueCard";

type AboutMeViewProps = {
  title: string;
  description: string;
  values: AboutValue[];
};

export function AboutMeView({ title, description, values }: AboutMeViewProps) {
  const motionReady = useClientMotionReady();
  const prefersReducedMotion = useReducedMotion() ?? false;
  const animate = motionReady && !prefersReducedMotion;

  const colA = animate
    ? {
        initial: { opacity: 0, x: -12 } as const,
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: "-10% 0px" } as const,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
      }
    : {};

  const colB = animate
    ? {
        initial: { opacity: 0, y: 18 } as const,
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-10% 0px" } as const,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const, delay: 0.05 },
      }
    : {};

  const gridProps = animate
    ? {
        initial: "hidden" as const,
        whileInView: "show" as const,
        viewport: { once: true, margin: "-8% 0px" } as const,
        variants: {
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        },
      }
    : {};

  const itemVariants = animate
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
    <section className="mt-24 grid gap-10 border-t border-slate-800 pt-16 lg:grid-cols-2">
      <motion.div {...colA}>
        <h2 className="text-4xl font-bold text-white">{title}</h2>
        <span className="mt-3 block h-1 w-14 rounded-full bg-brand" />
      </motion.div>

      <motion.div {...colB}>
        <p className="text-xl leading-relaxed text-slate-300">{description}</p>

        <motion.div className="mt-10 grid gap-5 sm:grid-cols-2" {...gridProps}>
          {values.map((value) => (
            <motion.div key={value.title} {...itemVariants}>
              <ValueCard
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
