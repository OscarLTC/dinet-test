import { ChevronDown, Power, User } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useAuthStore } from "@/features/auth/store/authStore";
import { useSwitchAccount } from "../hooks/useSwitchAccount";
import { useUserAccounts } from "../hooks/useUserAccounts";
import { useUserAccountStore } from "../store/userAccountStore";
import profileAvatar from "@/assets/avatar.jpg";
import { useNavigate } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AccountItem } from "./AccountItem";

export const ProfileMenu = () => {
  const { logout } = useAuth();
  const { user, isAuthenticated } = useAuthStore();
  const { data: accounts = [], isLoading } = useUserAccounts();
  const { activeAccount, setActiveAccount } = useUserAccountStore();
  const { mutate: onChangeAccount } = useSwitchAccount();
  const navigate = useNavigate();

  if (!isAuthenticated || !user) {
    return <div className="text-sm">No autenticado</div>;
  }

  return (
    <div className="flex items-center space-x-4">
      <img src={profileAvatar} alt="Avatar" className="h-8 w-8 rounded-full" />
      <div className="flex flex-col ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <span className="text-sm cursor-pointer">{user.username}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onSelect={() => navigate("/profile")}>
              <User size={16} className="mr-2" />
              Perfil
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-500 hover:bg-red-100"
              onSelect={() => {
                logout();
              }}
            >
              <Power size={16} className="mr-2 text-red-500" />
              Salir
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-sm">{activeAccount?.description}</span>
              <ChevronDown size={16} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 p-0">
            <div className="px-2 pt-1 text-xs text-muted-foreground">
              Seleccionar cuenta
            </div>
            <DropdownMenuSeparator />
            {isLoading ? (
              <DropdownMenuItem disabled>Cargando cuentas...</DropdownMenuItem>
            ) : (
              accounts.map((acct) => (
                <AccountItem
                  account={acct}
                  isActive={acct.id == activeAccount?.id}
                  onClick={() => {
                    setActiveAccount(acct);
                    onChangeAccount(acct.id.toString());
                  }}
                />
              ))
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
