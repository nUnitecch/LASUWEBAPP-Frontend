"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FiBell, FiMenu, FiUser, FiX } from "react-icons/fi";
import { useState } from "react";
import Logo from "../Logo";
import { Settings, User2 } from "lucide-react";
import SidebarLink from "./sidebar/SidebarLink";
import { sidebarItems } from "@/constants/dashboard";
import { usePathname } from "next/navigation";

export default function DashboardHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname().split("/").at(-1);

  return (
    <header
      className={`sticky top-0 left-0 w-full bg-background z-100 transition-all duration-300 p-4 shadow-2xs`}
    >
      <div className="flex items-center justify-between flex-1">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-secondary rounded-xs p-0.5 md:hidden"
        >
          <FiMenu className="size-6" />
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <h4 className="font-semibold">Student {pathname}</h4>
        </div>
        {/* Notification form */}
        <div className="right-icons flex items-center gap-10">
          <FiBell className="size-6" />
          <div className="size-10 border rounded-full flex items-center justify-center bg-logo text-background">
            <User2 />
          </div>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            className="absolute top-0 left-0 bottom-0 w-full h-screen right-0 bg-background py-6 flex flex-col gap-4 md:hidden shadow-xl border"
          >
            {/* sidebar header */}
            <div className="flex justify-between items-center px-6 mb-5">
              <Logo />
              <button onClick={() => setIsOpen(false)}>
                <FiX className="size-8" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6 flex-1 px-6">
              {sidebarItems.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <SidebarLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    Icon={link.icon}
                    setIsOpen={setIsOpen}
                    upComing={link.upComing}
                    isActive={isActive}
                  />
                );
              })}
            </nav>
            {/* sidebar footer */}
            <div className="space-y-6 px-6 border-t border-secondary">
              <SidebarLink
                label="Settings"
                href="#settings"
                setIsOpen={setIsOpen}
                Icon={Settings}
                upComing={true}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
