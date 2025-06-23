import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ProfileMenu } from "@/features/user/components/ProfileMenu";
import { BellRing, Fullscreen, Settings } from "lucide-react";

export const Header = () => {
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <header className="bg-white flex items-center justify-between p-3">
      <SidebarTrigger />
      <div className="flex items-center gap-2">
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={toggleFullscreen}
        >
          <Fullscreen />
        </Button>
        <Button type="button" size="icon" variant="ghost">
          <BellRing className="animate-tada repeat-infinite " />
        </Button>
        <ProfileMenu />
        <Button size="icon" variant="ghost">
          <Settings className="repeat-infinite animate-duration-1000 animate-spin-clockwise" />
        </Button>
      </div>
    </header>
  );
};
