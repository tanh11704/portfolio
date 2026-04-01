import { AboutSection } from "@/widgets/about/ui/AboutSection";
import { FooterSection } from "@/widgets/footer/ui/FooterSection";
import { HomeHeroSection } from "@/widgets/home-hero/ui/HomeHeroSection";
import { NavbarSection } from "@/widgets/navbar/ui/NavbarSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <NavbarSection />

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
        <section id="home">
          <HomeHeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>
      </div>

      <FooterSection />
    </main>
  );
}
