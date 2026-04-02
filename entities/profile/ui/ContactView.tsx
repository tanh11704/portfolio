"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useClientMotionReady } from "@/shared/lib/useClientMotionReady";
import { PrimaryButton } from "@/shared/ui/atoms/PrimaryButton";
import { SecondaryButton } from "@/shared/ui/atoms/SecondaryButton";
import { SectionBadge } from "@/shared/ui/atoms/SectionBadge";
import { SectionHeading } from "@/shared/ui/atoms/SectionHeading";

type ContactViewProps = {
  badge: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeFile: string;
};

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 6h16v12H4V6Zm8 6 8-5H4l8 5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.11a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function ContactView({
  badge,
  title,
  description,
  email,
  phone,
  location,
  githubUrl,
  linkedinUrl,
  resumeFile,
}: ContactViewProps) {
  const motionReady = useClientMotionReady();
  const prefersReducedMotion = useReducedMotion() ?? false;
  const animate = motionReady && !prefersReducedMotion;

  const intro = animate
    ? {
        initial: { opacity: 0, y: 14 } as const,
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-12% 0px" } as const,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
      }
    : {};

  const cards: {
    key: string;
    label: string;
    value: string;
    href?: string;
    Icon: typeof MailIcon;
  }[] = [
    {
      key: "email",
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      Icon: MailIcon,
    },
  ];
  if (phone.trim()) {
    cards.push({
      key: "phone",
      label: "Phone",
      value: phone,
      href: `tel:${phone.replace(/\s/g, "")}`,
      Icon: PhoneIcon,
    });
  }
  cards.push({
    key: "location",
    label: "Location",
    value: location,
    Icon: MapIcon,
  });

  return (
    <div className="max-w-3xl">
      <motion.div {...intro}>
        <SectionBadge text={badge} />
        <div className="mt-5">
          <SectionHeading title={title} />
          <p className="mt-5 text-lg leading-relaxed text-slate-400">{description}</p>
        </div>
      </motion.div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2" role="list">
        {cards.map((row, i) => {
          const RowIcon = row.Icon;
          return (
          <motion.li
            key={row.key}
            {...(animate
              ? {
                  initial: { opacity: 0, y: 12 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: "-8% 0px" },
                  transition: {
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.05 * i,
                  },
                }
              : {})}
          >
            <div className="flex h-full gap-4 rounded-2xl border border-slate-800 bg-surface/40 p-5 transition hover:border-slate-700">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <RowIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {row.label}
                </p>
                {row.href ? (
                  <Link
                    href={row.href}
                    className="mt-1 block break-all text-base font-medium text-white transition hover:text-brand"
                  >
                    {row.value}
                  </Link>
                ) : (
                  <p className="mt-1 text-base font-medium text-white">{row.value}</p>
                )}
              </div>
            </div>
          </motion.li>
          );
        })}
      </ul>

      <motion.div
        className="mt-10 flex flex-wrap gap-4"
        {...(animate
          ? {
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-8% 0px" },
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0.12 },
            }
          : {})}
      >
        <PrimaryButton href={githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </PrimaryButton>
        <SecondaryButton href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </SecondaryButton>
        <SecondaryButton href={resumeFile} download>
          Download CV (PDF)
        </SecondaryButton>
      </motion.div>
    </div>
  );
}
