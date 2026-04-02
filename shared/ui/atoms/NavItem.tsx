"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useScrollSpySection } from "@/shared/lib/ScrollSpyContext";
import { normalizeRoutePath, routePathMatches } from "@/shared/lib/route-path";

type NavItemProps = {
  href: string;
  label: string;
};

export function NavItem({ href, label }: NavItemProps) {
  const pathname = usePathname();
  const activeSectionId = useScrollSpySection();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash || "");
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  const hashIdx = href.indexOf("#");
  const hasHash = hashIdx !== -1;
  const pathPart = hasHash ? href.slice(0, hashIdx) : href;
  const linkPath = pathPart === "" ? "/" : pathPart;
  const targetHash = hasHash ? href.slice(hashIdx) : "";
  const sectionId = hasHash ? href.slice(hashIdx + 1) : "";

  const pathMatches = hasHash
    ? normalizeRoutePath(pathname) === normalizeRoutePath(linkPath)
    : routePathMatches(pathname, linkPath);
  const scrollMatches = Boolean(
    sectionId && pathMatches && activeSectionId === sectionId,
  );
  const hashMatches = Boolean(
    hasHash && pathMatches && !activeSectionId && currentHash === targetHash,
  );
  const isActive = hasHash ? scrollMatches || hashMatches : pathMatches;

  return (
    <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={`group relative block pb-1 text-sm font-medium transition ${
          isActive ? "text-brand" : "text-slate-300 hover:text-brand"
        }`}
      >
        {label}
        <span
          className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-brand transition-all duration-300 ease-out ${
            isActive ? "w-full" : "w-0 group-hover:w-full group-hover:opacity-80"
          }`}
        />
      </Link>
    </motion.div>
  );
}
