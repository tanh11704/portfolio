import Link from "next/link";
import { AboutSection } from "@/widgets/about/ui/AboutSection";
import { HomeHeroSection } from "@/widgets/home-hero/ui/HomeHeroSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
        <section id="home" className="scroll-mt-28 lg:scroll-mt-24">
          <HomeHeroSection />
        </section>

        <section id="about" className="scroll-mt-28 lg:scroll-mt-24">
          <AboutSection />
        </section>

        <section
          className="mt-24 flex scroll-mt-28 flex-col items-start justify-between gap-6 border-t border-slate-800 pt-16 sm:flex-row sm:items-center lg:scroll-mt-24"
          aria-label="Projects teaser"
        >
          <div>
            <h2 className="text-2xl font-bold text-white">Selected work</h2>
            <p className="mt-3 max-w-xl text-slate-400">
              APIs, services, and tooling from personal practice — architecture notes, stack choices,
              and links where available.
            </p>
          </div>
          <Link
            href="/projects"
            className="shrink-0 rounded-xl border border-slate-700 bg-surface px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-600 hover:bg-slate-800"
          >
            View all projects
          </Link>
        </section>
      </div>
    </main>
  );
}
