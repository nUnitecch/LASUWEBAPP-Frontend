import {
  ChartBarBigIcon,
  GraduationCap,
  HomeIcon,
  HotelIcon,
  MapIcon,
  Newspaper,
  Settings,
} from "lucide-react";

export const sidebarItems = [
  { label: "Dashborad", icon: HomeIcon, href: "/dashboard" },
  {
    label: "Academic Hub",
    icon: GraduationCap,
    href: "/dashboard/academic-hub",
  },
  {
    label: "News & Updates",
    icon: Newspaper,
    href: "#news&updates",
    upComing: true,
  },
  {
    label: "Accomodation",
    icon: HotelIcon,
    href: "#accomodations",
    upComing: true,
  },
  {
    label: "Opportunities",
    icon: ChartBarBigIcon,
    href: "#opportunities",
    upComing: true,
  },
  { label: "Campus Map", icon: MapIcon, href: "#campus-map", upComing: true },
  { label: "Settings", icon: Settings, href: "settings" },
];
