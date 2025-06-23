import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { Box, ListChecks, Loader2 } from "lucide-react";
import { useState } from "react";

export const DownloadLabelsModal = ({
  show,
  onClose,
  onDownloadPDF,
  onDownloadZPL,
}: {
  show: boolean;
  onClose: () => void;
  onDownloadPDF: () => void;
  onDownloadZPL: () => void;
}) => {
  const [loading, setLoading] = useState<"pdf" | "zpl" | null>(null);
  const [separate, setSeparate] = useState(false);

  const simulate = (type: "pdf" | "zpl", cb: () => void) => {
    setLoading(type);
    setTimeout(() => {
      cb();
      setLoading(null);
    }, 2000);
  };

  return (
    <Dialog open={show} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Descargar Etiquetas</DialogTitle>
        </DialogHeader>

        <DialogDescription>
          <p className="text-sm text-muted-foreground mb-4">
            Desde aquí podrás generar las etiquetas para los paquetes de tus
            envíos.
          </p>
          <div className="space-y-3 mt-6">
            <p className="font-semibold text-xs">Cómo preparar tus paquetes:</p>
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gray-100 rounded">
                <Box className="h-5 w-5 text-yellow-600" />
              </div>
              <p className="text-sm text-muted-foreground">
                Pega tus etiquetas en un lugar visible sobre cada uno de tus
                paquetes.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gray-100 rounded">
                <ListChecks className="h-5 w-5 text-yellow-600" />
              </div>
              <p className="text-sm text-muted-foreground">
                Incluye tus pedidos a tu orden de recolección.
              </p>
            </div>

            <div className="mt-4 flex flex-col items-center justify-center">
              <p className="mb-2 font-semibold ">
                Selecciona el formato de las etiquetas:
              </p>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="separate"
                  checked={separate}
                  onCheckedChange={() => {
                    setSeparate(!separate);
                  }}
                />
                <label htmlFor="separate" className="text-xs text-gray-700">
                  Deseo descargar las etiquetas en archivos independientes
                </label>
              </div>
            </div>
          </div>
        </DialogDescription>

        <DialogFooter>
          <div className="flex flex-col space-y-2 mx-auto w-72">
            <Button
              variant={loading === "pdf" ? "outline" : "default"}
              className="w-full flex items-center justify-center bg-dinet text-white hover:bg-dinet/90"
              onClick={() => simulate("pdf", onDownloadPDF)}
              disabled={!!loading}
            >
              {loading === "pdf" && (
                <Loader2 className="repeat-infinite animate-duration-1000 animate-spin-clockwise mr-2 h-4 w-4" />
              )}
              Formato PDF
            </Button>
            <Button
              variant={loading === "zpl" ? "outline" : "default"}
              className="w-full flex items-center justify-center bg-dinet text-white hover:bg-dinet/90"
              onClick={() => simulate("zpl", onDownloadZPL)}
              disabled={!!loading}
            >
              {loading === "zpl" && (
                <Loader2 className="repeat-infinite animate-duration-1000 animate-spin-clockwise mr-2 h-4 w-4" />
              )}
              Formato ZPL
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
