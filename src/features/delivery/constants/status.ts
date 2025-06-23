interface StatusColor {
  backgroundColor: string;
  textColor: string;
}

export const DELIVERYSTATUS = {
  ENTREGADO: "Entregado",
  NO_ENTREGADO: "No entregado",
  EN_REPARTO: "En Reparto",
  FALLIDA: "Entrega fallida",
  RECOLECTANDO: "Recolectando",
  LISTO: "Listo para despacho",
  CREADO: "Creado",
} as const;

export type DELIVERYSTATUS =
  (typeof DELIVERYSTATUS)[keyof typeof DELIVERYSTATUS];

export const DELIVERY_COLORS: Record<DELIVERYSTATUS, StatusColor> = {
  [DELIVERYSTATUS.ENTREGADO]: {
    backgroundColor: "#d4edda",
    textColor: "#155724",
  },
  [DELIVERYSTATUS.NO_ENTREGADO]: {
    backgroundColor: "#f8d7da",
    textColor: "#721c24",
  },
  [DELIVERYSTATUS.EN_REPARTO]: {
    backgroundColor: "#fff3cd",
    textColor: "#856404",
  },
  [DELIVERYSTATUS.FALLIDA]: {
    backgroundColor: "#f5c6cb",
    textColor: "#721c24",
  },
  [DELIVERYSTATUS.RECOLECTANDO]: {
    backgroundColor: "#e2e3e5",
    textColor: "#383d41",
  },
  [DELIVERYSTATUS.LISTO]: {
    backgroundColor: "#d1ecf1",
    textColor: "#0c5460",
  },
  [DELIVERYSTATUS.CREADO]: {
    backgroundColor: "#cce5ff",
    textColor: "#004085",
  },
};
