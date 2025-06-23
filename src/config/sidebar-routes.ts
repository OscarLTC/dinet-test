import type { MenuItemType } from "@/shared/types/menu-item";
import { Truck, Package, Undo2, CloudUpload } from "lucide-react";

export const menuItems: MenuItemType[] = [
  {
    label: "Entregas",
    icon: Truck,
    children: [
      {
        label: "Lista de Entregas",
        url: "/entregas/listar",
      },
    ],
  },
  {
    label: "Recolecciones",
    icon: Package,
    children: [
      {
        label: "Lista de Recolecciones",
        url: "/recolecciones/listar",
      },
    ],
  },
  {
    label: "Devoluciones",
    icon: Undo2,
    children: [
      {
        label: "Lista de Devoluciones",
        url: "/devoluciones/listar",
      },
    ],
  },
  {
    label: "Carga Masiva",
    icon: CloudUpload,
    children: [
      {
        label: "Importaciones",
        url: "/importaciones",
      },
      {
        label: "Exportaciones",
        url: "/exportaciones",
      },
    ],
  },
];
