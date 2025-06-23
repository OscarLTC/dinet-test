import type { ColumnDef } from "@tanstack/react-table";
import type { Delivery } from "../types/delivery";
import { Link } from "react-router";
import { DELIVERY_COLORS } from "../constants/status";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "date-fns";
import { Info } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export const DeliveryColums: ColumnDef<Delivery>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    enableColumnFilter: false,
    size: 50,
  },
  {
    header: "# Envío",
    accessorKey: "id",
    cell: ({ row }) => (
      <div className="my-2">
        <div className="font-semibold text-gray-700">{row.original.id}</div>
        <div className="text-muted-foreground text-xs">
          {row.original.subId}
        </div>
      </div>
    ),
    enableSorting: true,
    enableColumnFilter: false,
  },
  {
    header: "# Seguimiento",
    accessorKey: "tracking",
    cell: ({ row }) => (
      <Link
        to={`/entregas/${row.original.id}`}
        className="text-orange-400 font-semibold underline"
      >
        {row.original.tracking}
      </Link>
    ),
    enableSorting: true,
    enableColumnFilter: false,
  },
  {
    header: "Estado",
    accessorKey: "status",
    cell: ({ row }) => {
      const { backgroundColor, textColor } =
        DELIVERY_COLORS[row.original.status];
      return (
        <div className="flex flex-col items-end ">
          <Badge
            className="capitalize"
            color={backgroundColor}
            style={{ backgroundColor, color: textColor }}
          >
            {row.original.status}
          </Badge>
          <div className="text-muted-foreground text-xs">
            {formatDate(new Date(row.original.createdAt), "dd/MM/yyyy HH:mm")}
          </div>
        </div>
      );
    },
    enableSorting: false,
    enableColumnFilter: false,
  },
  {
    header: "Envía",
    accessorKey: "sender",
    cell: ({ row }) => (
      <div>
        <div className="font-semibold text-gray-700">{row.original.sender}</div>
        <div className="text-muted-foreground text-xs">
          {row.original.senderCompany}
        </div>
      </div>
    ),
    enableSorting: true,
    enableColumnFilter: false,
  },
  {
    header: "Origen",
    accessorKey: "origin",
    cell: ({ row }) => (
      <div>
        <div className="font-semibold text-gray-700">{row.original.origin}</div>
        <div className="text-muted-foreground text-xs">
          {row.original.originType}
        </div>
      </div>
    ),
    enableSorting: false,
    enableColumnFilter: false,
  },
  {
    header: "Destino",
    accessorKey: "destination",
    cell: ({ row }) => (
      <div>
        <div className="font-semibold text-gray-700">
          {row.original.destination}
        </div>
        <div className="text-muted-foreground text-xs">
          {row.original.destinationType}
        </div>
      </div>
    ),
    enableSorting: false,
    enableColumnFilter: false,
  },
  {
    header: "Obs",
    accessorKey: "hasObservation",
    cell: ({ row }) =>
      row.original.hasObservation ? (
        <Info className="text-red-500" size={20} />
      ) : null,
    size: 50,
    enableSorting: false,
    enableColumnFilter: false,
  },
  {
    header: "Fecha Creación",
    accessorKey: "createdAt",
    cell: ({ row }) => (
      <span className="text-xs text-muted-foreground">
        {formatDate(new Date(row.original.createdAt), "dd/MM/yyyy HH:mm")}
      </span>
    ),
    enableSorting: false,
    enableColumnFilter: false,
  },
];
