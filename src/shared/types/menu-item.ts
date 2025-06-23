import type { LucideIcon } from "lucide-react";

export interface MenuItemType {
  label: string;
  url?: string;
  icon?: LucideIcon;
  children?: MenuItemType[];
}
