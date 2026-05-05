import {
  HomeIcon,
  GraduationCap,
  Newspaper,
  HotelIcon,
  ChartBarBigIcon,
  MapIcon,
  Settings,
} from "lucide-react";

export interface SidebarItem {
  label: string;
  icon: any;
  href: string;
  upComing?: boolean;
  roles?: ("student" | "admin")[];
}

export const sidebarItems: SidebarItem[] = [
  { label: "Dashboard", icon: HomeIcon, href: "/dashboard" },
  {
    label: "Academic Hub",
    icon: GraduationCap,
    href: "/dashboard/academic-hub",
  },
  {
    label: "News & Updates",
    icon: Newspaper,
    href: "/dashboard/news",
    upComing: true,
  },
  {
    label: "Accommodation",
    icon: HotelIcon,
    href: "/dashboard/accommodation",
    upComing: true,
  },
  {
    label: "Opportunities",
    icon: ChartBarBigIcon,
    href: "/dashboard/opportunities",
    upComing: true,
  },
  {
    label: "Campus Map",
    icon: MapIcon,
    href: "/dashboard/map",
    upComing: true,
  },
  { label: "Settings", icon: Settings, href: "/dashboard/settings" },
];
