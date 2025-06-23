import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AlertTriangle } from "lucide-react";

export const CancelDeliveryModal = ({
  show,
  onClose,
  onConfirm,
}: {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) => (
  <Dialog open={show} onOpenChange={(o) => !o && onClose()}>
    <DialogContent className="sm:max-w-xl">
      <DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-dinet/20 rounded-full">
            <AlertTriangle className="h-5 w-5 text-dinet" />
          </div>
          <DialogTitle>Anulación de envío(s)</DialogTitle>
        </div>
      </DialogHeader>

      <DialogDescription>
        <p className="text-center text-sm text-gray-600">
          Estás por anular el envío. Una vez anulado, no podrás despacharlo.
        </p>
      </DialogDescription>

      <DialogFooter>
        <div className="flex w-full space-x-2">
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            className="flex-1 bg-dinet hover:bg-dinet/80"
            onClick={onConfirm}
          >
            Sí, Anular
          </Button>
        </div>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
