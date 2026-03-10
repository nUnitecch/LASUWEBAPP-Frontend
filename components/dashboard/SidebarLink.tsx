import { LucideIcon } from "lucide-react";
import Link from "next/link";

type SidebarLinkType = {
  Icon: LucideIcon;
  href: string;
  label: string;
  setIsOpen: (value: boolean) => void;
};

export default function SidebarLink({
  setIsOpen,
  Icon,
  href,
  label,
}: SidebarLinkType) {
  return (
    <Link
      href={href}
      onClick={() => setIsOpen(false)}
      className="flex items-center gap-3"
    >
      <Icon className="size-6" />
      <span className="text-lg">{label}</span>
    </Link>
  );
}
