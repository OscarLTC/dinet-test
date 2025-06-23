import { Button } from "@/components/ui/button";
import { FileUp } from "lucide-react";

interface DeliveryHeaderProps {
  onNewDelivery?: () => void;
  onImport?: () => void;
}

export const DeliveryHeader = ({
  onNewDelivery,
  onImport,
}: DeliveryHeaderProps) => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-3xl font-semibold text-[#475057]">Entregas</h2>
      <div className="flex items-center gap-2">
        <Button
          className="mt-2 border-2 border-dinet text-dinet  hover:bg-dinet/10 hover:text-dinet"
          variant="outline"
          onClick={onNewDelivery}
        >
          Nuevo
        </Button>
        <Button className="mt-2 bg-dinet hover:bg-dinet/80 " onClick={onImport}>
          <FileUp />
          Importar
        </Button>
      </div>
    </div>
  );
};
