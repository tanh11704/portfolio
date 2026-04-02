"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useClientMotionReady } from "@/shared/lib/useClientMotionReady";

export default function SiteTemplate({ children }: { children: ReactNode }) {
  const motionReady = useClientMotionReady();
  const prefersReducedMotion = useReducedMotion() ?? false;
  const animate = motionReady && !prefersReducedMotion;

  const props = animate
    ? {
        initial: { opacity: 0, y: 12 } as const,
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] as const },
      }
    : {};

  return (
    <motion.div {...props}>
      {children}
    </motion.div>
  );
}
