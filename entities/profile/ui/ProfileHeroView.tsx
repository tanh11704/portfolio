"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { HeroStat } from "@/entities/profile/model/profile.data";
import { useClientMotionReady } from "@/shared/lib/useClientMotionReady";
import { PrimaryButton } from "@/shared/ui/atoms/PrimaryButton";
import { SecondaryButton } from "@/shared/ui/atoms/SecondaryButton";
import { SectionBadge } from "@/shared/ui/atoms/SectionBadge";
import { HeroStats } from "@/shared/ui/organisms/HeroStats";

type ProfileHeroViewProps = {
  availabilityText: string;
  title: string;
  description: string;
  stats: HeroStat[];
  avatarSrc: string;
  avatarAlt: string;
  reliabilityLabel: string;
  reliabilityValue: string;
  resumeFile: string;
};

export function ProfileHeroView({
  availabilityText,
  title,
  description,
  stats,
  avatarSrc,
  avatarAlt,
  reliabilityLabel,
  reliabilityValue,
  resumeFile,
}: ProfileHeroViewProps) {
  const motionReady = useClientMotionReady();
  const prefersReducedMotion = useReducedMotion() ?? false;
  const animate = motionReady && !prefersReducedMotion;

  const left = animate
    ? {
        initial: { opacity: 0, y: 24 } as const,
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
      }
    : {};

  const right = animate
    ? {
        initial: { opacity: 0, y: 18 } as const,
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 },
      }
    : {};

  const badgeMotion = animate
    ? {
        initial: { opacity: 0, y: 24, scale: 0.95 } as const,
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.25 },
      }
    : {};

  return (
    <section className="grid gap-14 lg:grid-cols-2 lg:items-center">
      <motion.div className="min-w-0" {...left}>
        <SectionBadge text={availabilityText} />

        <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-400">{description}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <PrimaryButton href="/projects">View Projects</PrimaryButton>
          <SecondaryButton href={resumeFile} download>
            Download CV (PDF)
          </SecondaryButton>
        </div>

        <HeroStats items={stats} />
      </motion.div>

      <motion.div className="relative mx-auto w-full max-w-[420px]" {...right}>
        <div className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl" />

        <div className="relative mx-auto h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-slate-800 bg-slate-900 sm:h-[380px] sm:w-[380px]">
          <Image src={avatarSrc} alt={avatarAlt} fill className="object-cover" priority />
        </div>

        <motion.div
          className="absolute -bottom-4 right-0 rounded-2xl border border-slate-700 bg-surface px-5 py-4 shadow-2xl"
          {...badgeMotion}
        >
          <p className="text-xs text-slate-400">{reliabilityLabel}</p>
          <p className="font-mono text-sm font-bold text-white">{reliabilityValue}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
