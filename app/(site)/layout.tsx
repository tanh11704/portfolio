import { AppShell } from "@/shared/ui/organisms/AppShell";
import { NavbarSection } from "@/widgets/navbar/ui/NavbarSection";
import { FooterSection } from "@/widgets/footer/ui/FooterSection";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell footer={<FooterSection />}>
      <NavbarSection />
      {children}
    </AppShell>
  );
}
