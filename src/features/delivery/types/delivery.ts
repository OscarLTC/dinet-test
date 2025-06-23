import type { DELIVERYSTATUS } from "../constants/status";
import type { DateRange } from "react-day-picker";

export interface DeliveryFilters {
  shipment: string;
  label: string;
  status: string;
  service: string;
  dateRange: DateRange | undefined;
}

export interface DeliveryLabel {
  id: string;
  name: string;
  value: string;
}

export interface DeliveryStatus {
  id: string;
  name: string;
  value: string;
}

export interface DeliveryService {
  id: string;
  name: string;
  value: string;
}

export interface DeliverySearchFilters {
  isOpen: boolean;
  isDatePickerOpen: boolean;
}

export interface Delivery {
  id: string;
  subId: string;
  tracking: string;
  status: DELIVERYSTATUS;
  statusUpdatedAt: string;
  sender: string;
  senderCompany: string;
  origin: string;
  originType: string;
  destination: string;
  destinationType: string;
  hasObservation: boolean;
  createdAt: string;
}
