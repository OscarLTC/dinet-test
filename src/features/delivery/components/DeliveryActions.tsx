import { useState } from "react";
import type { Delivery } from "../types/delivery";

import { Button } from "@/components/ui/button";
import { ConfirmSendModal } from "./delivery-actions/ConfirmSendModal";
import { DownloadLabelsModal } from "./delivery-actions/DownloadLabelsModal";
import { CancelDeliveryModal } from "./delivery-actions/CancelDeliveryModal";

interface Props {
  selectedRows: Delivery[];
  clearSelectedRows: () => void;
}

export const DeliveriesActions = ({
  selectedRows,
  clearSelectedRows,
}: Props) => {
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [isDownloadOpen, setDownloadOpen] = useState(false);
  const [isCancelOpen, setCancelOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-5 inset-x-0 flex justify-center">
        <div className="bg-white shadow-lg rounded-lg px-4 py-2 w-full max-w-3xl">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-800">
              {selectedRows.length}{" "}
              {selectedRows.length === 1 ? "Item" : "Items"}
            </span>
            <div className="flex space-x-2">
              <Button
                className="bg-dinet hover:bg-dinet/80"
                onClick={() => setConfirmOpen(true)}
              >
                Confirmar Preparación
              </Button>
              <Button
                className="border-dinet text-dinet hover:bg-dinet/10 hover:text-dinet"
                variant="outline"
                onClick={() => setDownloadOpen(true)}
              >
                Imprimir Etiquetas
              </Button>
              <Button
                className="border-red-400 text-red-400 hover:bg-red-400/10 hover:text-red-400"
                variant="outline"
                onClick={() => setCancelOpen(true)}
              >
                Anular
              </Button>
              <Button variant="ghost" onClick={clearSelectedRows}>
                Cerrar
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ConfirmSendModal
        show={isConfirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={() => setConfirmOpen(false)}
      />
      <DownloadLabelsModal
        show={isDownloadOpen}
        onClose={() => setDownloadOpen(false)}
        onDownloadPDF={() => {}}
        onDownloadZPL={() => {}}
      />
      <CancelDeliveryModal
        show={isCancelOpen}
        onClose={() => setCancelOpen(false)}
        onConfirm={() => setCancelOpen(false)}
      />
    </>
  );
};
