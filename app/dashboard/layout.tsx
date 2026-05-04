"use client";

import React from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  return (
    <section className="w-full h-screen overflow-hidden bg-background">
      <div className="w-full h-full grid grid-col-1 md:grid-cols-[auto_1fr]">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <div className="w-full flex-1 flex flex-col h-full overflow-hidden">
          <DashboardHeader />
          <section className="px-4 sm:px-6 md:p-8 py-8 overflow-y-auto custom-scrollbar bg-secondary">
            <div className="max-w-6xl mx-auto">{children}</div>
          </section>
        </div>
      </div>
    </section>
  );
}
