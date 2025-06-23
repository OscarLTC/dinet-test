import type { MenuItemType } from "@/shared/types/menu-item";

export const hasActive = (item: MenuItemType, path: string): boolean => {
  if (item.url === path) return true;
  return !!item.children?.some((child) => hasActive(child, path));
};
