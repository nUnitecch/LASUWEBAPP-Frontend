import DashboardHeader from "@/components/dashboard/DashboardHeader";
import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <section className="w-full min-h-screen">
      <div className="w-full grid grid-cols-[auto_1fr]">
        <aside className={`hidden w-64`}></aside>
        <section>
          <DashboardHeader />
          <div>{children}</div>
        </section>
      </div>
    </section>
  );
}
