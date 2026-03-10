"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Logo from "@/components/Logo";
import { sidebarItems } from "@/constants/dashboard";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const pathname = usePathname();
  return (
    <section className="w-full h-screen overflow-hidden bg-background">
      <div className="w-full h-full grid grid-col-1 grid-cols-[auto_1fr]">
        <motion.aside
          animate={{ width: isCollapsed ? 73 : 260 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`relative hidden h-full md:flex flex-col border-r border-secondary bg-card`}
        >
          <div className="h-20 flex items-center px-6 overflow-hidden">
            <AnimatePresence mode="wait">
              {isCollapsed ? (
                <motion.span
                  key="short"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-black text-logo text-2xl"
                >
                  L.
                </motion.span>
              ) : (
                <motion.div
                  key="full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Logo />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <nav className="flex-1 px-3 space-y-1 overflow-y-auto overflow-x-hidden pt-4">
            {sidebarItems.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center h-12 px-3 rounded-xl transition-colors group relative",
                    isActive
                      ? "bg-logo text-white"
                      : "text-muted-foreground hover:bg-secondary",
                  )}
                >
                  <link.icon
                    className={cn(
                      "size-6 min-w-6",
                      isActive ? "text-white" : "text-slate-500",
                    )}
                  />

                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="ml-4 font-medium whitespace-nowrap flex-1"
                    >
                      {link.label}
                    </motion.span>
                  )}

                  {isCollapsed && (
                    <div className="absolute left-14 invisible group-hover:visible bg-slate-900 text-white text-xs px-2 py-1 rounded md:block hidden whitespace-nowrap z-50">
                      {link.label}
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>
          {/* aside footer */}
          <div className="p-3 border-t border-secondary">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="w-full h-12 rounded-xl flex items-center justify-center group"
            >
              <motion.div
                animate={{ rotate: isCollapsed ? 180 : 0 }}
                className="size-8 flex items-center justify-center"
              >
                <MdKeyboardDoubleArrowLeft className="size-6 text-logo" />
              </motion.div>
              {!isCollapsed && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="ml-4 flex-1"
                >
                  Collapse
                </motion.div>
              )}
            </button>
          </div>
        </motion.aside>
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <DashboardHeader />
          <section className="px-4 sm:px-6 md:p-8 py-8 overflow-y-auto custom-scrollbar">
            <div className="max-w-6xl mx-auto">{children}</div>
          </section>
        </div>
      </div>
    </section>
  );
}
