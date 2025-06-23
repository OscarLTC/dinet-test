import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AlertTriangle, Box, ListChecks } from "lucide-react";

export const ConfirmSendModal = ({
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
          <DialogTitle>Confirmar envío preparados (s)</DialogTitle>
        </div>
      </DialogHeader>

      <DialogDescription>
        <p className="text-sm text-gray-600 mb-4">
          Es importante tener en cuenta estas dos acciones al momento de
          empaquetar y despachar tus envíos:
        </p>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gray-100 rounded">
              <Box className="h-5 w-5 text-dinet" />
            </div>
            <p className="text-sm text-gray-600">
              Pega tus etiquetas en un lugar visible sobre cada paquete.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gray-100 rounded">
              <ListChecks className="h-5 w-5 text-dinet" />
            </div>
            <p className="text-sm text-gray-600">
              Incluye tus pedidos en tu orden de recolección.
            </p>
          </div>
        </div>
      </DialogDescription>

      <DialogFooter>
        <div className="flex w-full space-x-2">
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            variant="default"
            className="flex-1 bg-dinet hover:bg-dinet/80 text-white"
            onClick={onConfirm}
          >
            Sí, Confirmar
          </Button>
        </div>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
