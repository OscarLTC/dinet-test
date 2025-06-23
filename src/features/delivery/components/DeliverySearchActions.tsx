import { Button } from "@/components/ui/button";
import { CollapsibleTrigger } from "@/components/ui/collapsible";
import { Filter, Search, X } from "lucide-react";

interface DeliverySearchActionsProps {
  onSearch?: () => void;
  onClear?: () => void;
}

export const DeliverySearchActions = ({
  onSearch,
  onClear,
}: DeliverySearchActionsProps) => {
  return (
    <div className="col-span-6 md:col-span-3 grid grid-cols-3 h-fit self-end gap-1">
      <Button
        size="icon"
        className="col-span-1 w-full  bg-dinet hover:bg-dinet/80"
        onClick={onSearch}
      >
        <Search />
      </Button>
      <CollapsibleTrigger className="col-span-1 w-full rounded bg-gray-500 hover:bg-gray-500/80 text-white flex items-center justify-center">
        <Filter size={16} />
      </CollapsibleTrigger>
      <Button
        size="icon"
        variant="outline"
        className="col-span-1 w-full  border-red-500 text-red-500 hover:bg-red-500/10 hover:text-red-500"
        onClick={onClear}
      >
        <X />
      </Button>
    </div>
  );
};
