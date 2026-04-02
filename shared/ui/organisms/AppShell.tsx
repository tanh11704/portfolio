import type { ReactNode } from "react";
import { AppScrollSpy } from "@/shared/lib/ScrollSpyContext";
import { SidebarSection } from "@/widgets/sidebar/ui/SidebarSection";

type AppShellProps = {
  children: ReactNode;
  footer: ReactNode;
};

export function AppShell({ children, footer }: AppShellProps) {
  return (
    <AppScrollSpy>
      <div className="min-h-screen bg-background text-foreground">
        <SidebarSection />
        <div className="min-h-screen lg:pl-72">
          {children}
          {footer}
        </div>
      </div>
    </AppScrollSpy>
  );
}
