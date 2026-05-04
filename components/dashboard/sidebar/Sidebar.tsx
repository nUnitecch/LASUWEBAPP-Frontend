import { AnimatePresence, motion } from "framer-motion";
import Logo from "../../Logo";
import { sidebarItems } from "@/constants/dashboard";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const pathname = usePathname();
  return (
    <motion.aside
      animate={{ width: isCollapsed ? 73 : 280 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`relative hidden h-full md:flex flex-col border-r border-secondary bg-card`}
    >
      <div className="h-14 flex items-center px-6 overflow-hidden border-b border-secondary">
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
      <nav className="flex-1 px-3 space-y-3 overflow-y-auto overflow-x-hidden pt-4">
        {sidebarItems.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.upComing ? "" : link.href}
              className={cn(
                "flex items-center h-11 px-3 rounded-xl transition-colors group relative",
                link.upComing
                  ? "text-gray-300 cursor-not-allowed"
                  : isActive
                    ? "bg-logo/20 text-logo"
                    : "text-muted-foreground hover:bg-secondary",
              )}
            >
              <link.icon
                className={cn(
                  "size-6 min-w-6",
                  link.upComing
                    ? "text-gray-300"
                    : isActive
                      ? "text-logo"
                      : "text-slate-500",
                )}
              />

              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="ml-4 font-medium whitespace-nowrap flex-1"
                >
                  {link.label}
                  {link.upComing && (
                    <span className="ml-4 text-xs bg-secondary px-1.5 py-px rounded-md">
                      Soon
                    </span>
                  )}
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
          className="w-full h-12 rounded-xl flex items-center group"
        >
          <motion.div
            animate={{ rotate: isCollapsed ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="size-8 flex items-center justify-center"
          >
            <MdKeyboardDoubleArrowLeft className="size-6 text-logo" />
          </motion.div>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="ml-4 flex-1 text-left"
            >
              Collapse
            </motion.div>
          )}
        </button>
      </div>
    </motion.aside>
  );
}
