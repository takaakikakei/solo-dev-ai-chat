"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { SidebarUI } from "@/components/sidebar/ui";

interface ChatLayoutProps {
  children: React.ReactNode;
}

export default function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <SidebarProvider>
      <SidebarUI />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
