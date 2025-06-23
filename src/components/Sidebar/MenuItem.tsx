import { cn } from "@/lib/utils";
import type { MenuItemType } from "@/shared/types/menu-item";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../ui/sidebar";
import { hasActive } from "./hasActive";

interface Props {
  item: MenuItemType;
}

export const MenuItem = ({ item }: Props) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const isActive = useMemo(() => hasActive(item, pathname), [item, pathname]);
  const [isOpen, setIsOpen] = useState(isActive);

  if (!item.children) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton asChild isActive={isActive}>
          <Link to={item.url || "#"} className={cn("flex items-center")}>
            {item.icon && <item.icon className="mr-2 h-4 w-4" />}
            <span>{item.label}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            className={cn("flex items-center justify-between w-full")}
            isActive={isActive}
          >
            {item.icon && <item.icon className="mr-2 h-4 w-4" />}
            <span className="text-left">{item.label}</span>

            <ChevronRight
              className={cn(
                "ml-auto h-4 w-4 transition-transform duration-200",
                isOpen && "rotate-90"
              )}
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarMenuSub>
            {item.children.map((child) => (
              <SidebarMenuSubItem key={child.url}>
                {child.children ? (
                  <MenuItem item={child} />
                ) : (
                  <SidebarMenuSubButton
                    asChild
                    isActive={child.url === pathname}
                  >
                    <Link to={child.url || "#"} className="flex items-center">
                      {child.icon && <child.icon className="mr-2 h-4 w-4" />}
                      <span>{child.label}</span>
                    </Link>
                  </SidebarMenuSubButton>
                )}
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};
