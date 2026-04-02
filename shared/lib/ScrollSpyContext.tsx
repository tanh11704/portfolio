"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { normalizeRoutePath } from "@/shared/lib/route-path";

type ScrollSpyContextValue = {
  activeSectionId: string;
};

const ScrollSpyContext = createContext<ScrollSpyContextValue | null>(null);

type ScrollSpyProviderProps = {
  children: ReactNode;
  watchPath: string;
  sectionIds: string[];
};

export function ScrollSpyProvider({
  children,
  watchPath,
  sectionIds,
}: ScrollSpyProviderProps) {
  const pathname = usePathname();
  const [activeSectionId, setActiveSectionId] = useState("");
  const enabled = normalizeRoutePath(pathname) === normalizeRoutePath(watchPath);
  const idKey = sectionIds.join(",");

  useEffect(() => {
    if (!enabled) {
      setActiveSectionId("");
      return;
    }

    const initial = window.location.hash.slice(1);
    if (initial && sectionIds.includes(initial)) {
      setActiveSectionId(initial);
    }
  }, [enabled, idKey, sectionIds]);

  useEffect(() => {
    if (!enabled || sectionIds.length === 0) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const HEADER_OFFSET = 112;

    const compute = () => {
      let active = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= HEADER_OFFSET) active = id;
      }
      setActiveSectionId(active || sectionIds[0] || "");
    };

    compute();

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(compute);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const observer = new IntersectionObserver(onScroll, {
      rootMargin: `-80px 0px -45% 0px`,
      threshold: [0, 0.08, 0.2, 0.35, 0.55, 0.75, 1],
    });

    elements.forEach((el) => observer.observe(el));

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
    };
  }, [enabled, idKey, sectionIds]);

  const value = useMemo(() => ({ activeSectionId }), [activeSectionId]);

  return (
    <ScrollSpyContext.Provider value={value}>{children}</ScrollSpyContext.Provider>
  );
}

export function useScrollSpySection() {
  return useContext(ScrollSpyContext)?.activeSectionId ?? "";
}

type AppScrollSpyProps = { children: ReactNode };

export function AppScrollSpy({ children }: AppScrollSpyProps) {
  const pathname = usePathname();
  const route = normalizeRoutePath(pathname);

  const { watchPath, sectionIds } = useMemo(() => {
    if (route === "/stack") {
      return { watchPath: "/stack", sectionIds: ["skills", "philosophy"] as string[] };
    }
    if (route === "/projects") {
      return { watchPath: "/projects", sectionIds: ["projects-page"] as string[] };
    }
    if (route === "/contact") {
      return { watchPath: "/contact", sectionIds: ["contact-page"] as string[] };
    }
    return { watchPath: "/", sectionIds: ["home", "about"] as string[] };
  }, [route]);

  return (
    <ScrollSpyProvider watchPath={watchPath} sectionIds={sectionIds}>
      {children}
    </ScrollSpyProvider>
  );
}
