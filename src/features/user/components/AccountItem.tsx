import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import type { Account } from "../types/account.type";

interface Props {
  account: Account;
  isActive: boolean;
  onClick: () => void;
}

export const AccountItem = ({ account, isActive, onClick }: Props) => {
  return (
    <DropdownMenuItem
      key={account.id}
      className={`m-1 ${
        isActive
          ? "font-semibold bg-dinet text-white hover:bg-dinet/80"
          : "text-muted-foreground"
      }`}
      onSelect={onClick}
    >
      <span className="uppercase size-5 flex items-center justify-center rounded-full  bg-gray-200/40 text-xs font-bold">
        {account.description[0]}
      </span>
      {`${account.description}`}
    </DropdownMenuItem>
  );
};
