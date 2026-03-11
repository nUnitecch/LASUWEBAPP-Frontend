import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

type SidebarLinkType = {
  Icon: LucideIcon;
  href: string;
  label: string;
  setIsOpen: (value: boolean) => void;
  upComing?: boolean;
  isActive?: boolean;
};

export default function SidebarLink({
  setIsOpen,
  Icon,
  href,
  label,
  upComing,
  isActive,
}: SidebarLinkType) {
  return (
    <Link
      href={href}
      onClick={() => setIsOpen(false)}
      className={cn(
        "flex items-center gap-3 h-11 px-3 rounded-xl transition-colors group",
        upComing
          ? "text-gray-300 cursor-not-allowed"
          : isActive
            ? "bg-logo/20 text-logo"
            : "text-muted-foreground hover:bg-secondary",
      )}
    >
      <Icon className="size-6" />
      <span className="text-lg text-nowrap">{label}</span>
      {upComing && (
        <span className="ml-1 text-xs bg-secondary px-1.5 py-px rounded-md">
          Soon
        </span>
      )}
    </Link>
  );
}
