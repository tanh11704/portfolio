"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profileData } from "@/entities/profile/model/profile.data";
import { useScrollSpySection } from "@/shared/lib/ScrollSpyContext";
import { normalizeRoutePath, routePathMatches } from "@/shared/lib/route-path";

type NavEntry = {
  href: string;
  label: string;
  icon: "home" | "code" | "folder" | "mail";
  match: "path" | "section";
  sectionId?: string;
};

const navItems: NavEntry[] = [
  { href: "/#home", label: "Overview", icon: "home", match: "section", sectionId: "home" },
  { href: "/stack", label: "Tech Stack", icon: "code", match: "path" },
  { href: "/projects", label: "Projects", icon: "folder", match: "path" },
  { href: "/contact", label: "Contact", icon: "mail", match: "path" },
];

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.5L9.2 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

function Icon({ name, className }: { name: NavEntry["icon"]; className?: string }) {
  switch (name) {
    case "home":
      return <HomeIcon className={className} />;
    case "code":
      return <CodeIcon className={className} />;
    case "folder":
      return <FolderIcon className={className} />;
    case "mail":
      return <MailIcon className={className} />;
    default:
      return null;
  }
}

export function SidebarSection() {
  const pathname = usePathname();
  const activeSectionId = useScrollSpySection();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const isActive = (item: NavEntry) => {
    if (item.match === "path") {
      return routePathMatches(pathname, item.href);
    }

    const id = item.sectionId;
    if (!id) return false;

    const isHomeRoute = normalizeRoutePath(pathname) === "/";
    if (!isHomeRoute) return false;

    if (id === "home") {
      if (!activeSectionId) return true;
      return activeSectionId === "home" || activeSectionId === "about";
    }

    if (activeSectionId && activeSectionId === id) return true;
    const h = hash.slice(1);
    return Boolean(h && h === id);
  };

  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-screen w-72 flex-col border-r border-slate-800/80 bg-background/95 px-5 pb-10 pt-8 backdrop-blur-md lg:flex">
      <Link
        href="/#home"
        className="group flex items-center gap-3 rounded-2xl p-1 transition hover:bg-slate-800/40"
      >
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
          <Image
            src={profileData.avatarSrc}
            alt=""
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-base font-bold text-white">{profileData.name}</p>
          <p className="truncate text-xs text-slate-500">{profileData.role}</p>
        </div>
      </Link>

      <nav className="mt-10 flex flex-col gap-1" aria-label="Primary">
        {navItems.map((item) => {
          const active = isActive(item);
          return (
            <motion.div key={item.href} whileHover={{ x: 2 }} whileTap={{ scale: 0.99 }}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  active
                    ? "bg-brand text-white shadow-lg shadow-brand/25"
                    : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                }`}
                scroll={item.href.includes("#") ? true : undefined}
              >
                <Icon
                  name={item.icon}
                  className={`h-5 w-5 shrink-0 ${active ? "text-white" : "text-slate-400"}`}
                />
                <span>{item.label}</span>
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </aside>
  );
}
