import {
  Sidebar,
  SidebarContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar";
import { menuItems } from "@/config/sidebar-routes";
import { MenuItem } from "./MenuItem";
import Logo from "@/assets/logo-light.png";
import LogoCompact from "@/assets/logo-light-compact.svg";

export const AppSidebar = () => {
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div
          className={`flex items-center justify-center ${
            state == "collapsed" ? "p-0" : "p-4"
          }`}
        >
          <img
            src={state == "collapsed" ? LogoCompact : Logo}
            alt="Dinet Logo"
            className="h-8 w-auto transition-all duration-200 group-data-[collapsible=icon]:h-8"
          />
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2 ">
        <SidebarGroupLabel>Menú</SidebarGroupLabel>
        <SidebarMenu>
          {menuItems.map((item) => (
            <MenuItem key={item.label} item={item} />
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
