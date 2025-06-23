import { useState } from "react";
import type { DeliveryFilters, DeliverySearchFilters } from "../types/delivery";

export const useDeliveryFilters = () => {
  const [searchFilters, setSearchFilters] = useState<DeliverySearchFilters>({
    isOpen: false,
    isDatePickerOpen: false,
  });

  const [filters, setFilters] = useState<DeliveryFilters>({
    shipment: "",
    label: "",
    status: "",
    service: "",
    dateRange: undefined,
  });

  const updateFilter = <K extends keyof DeliveryFilters>(
    key: K,
    value: DeliveryFilters[K]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      shipment: "",
      label: "",
      status: "",
      service: "",
      dateRange: undefined,
    });
  };

  const toggleCollapsible = () => {
    setSearchFilters((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  };

  const toggleDatePicker = () => {
    setSearchFilters((prev) => ({
      ...prev,
      isDatePickerOpen: !prev.isDatePickerOpen,
    }));
  };

  return {
    filters,
    searchFilters,
    updateFilter,
    clearFilters,
    toggleCollapsible,
    toggleDatePicker,
  };
};
