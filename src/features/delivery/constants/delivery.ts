import type {
  DeliveryLabel,
  DeliveryStatus,
  DeliveryService,
} from "../types/delivery";

export const DELIVERY_LABELS: DeliveryLabel[] = [
  { id: "1", name: "VIP", value: "vip" },
  { id: "2", name: "Premium", value: "premium" },
  { id: "3", name: "Regular", value: "regular" },
];

export const DELIVERY_STATUSES: DeliveryStatus[] = [
  { id: "1", name: "Activo", value: "active" },
  { id: "2", name: "Inactivo", value: "inactive" },
];

export const DELIVERY_SERVICES: DeliveryService[] = [
  { id: "1", name: "Express", value: "express" },
  { id: "2", name: "Standard", value: "standard" },
  { id: "3", name: "Economy", value: "economy" },
];
