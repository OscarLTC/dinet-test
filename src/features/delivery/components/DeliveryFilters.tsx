import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { DeliveryDatePicker } from "./DeliveryDatePicker";
import { DeliverySearchActions } from "./DeliverySearchActions";
import type { DeliveryFilters as DeliveryFiltersType } from "../types/delivery";
import {
  DELIVERY_LABELS,
  DELIVERY_SERVICES,
  DELIVERY_STATUSES,
} from "../constants/delivery";

interface DeliveryFiltersProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  filters: DeliveryFiltersType;
  onFilterChange: <K extends keyof DeliveryFiltersType>(
    key: K,
    value: DeliveryFiltersType[K]
  ) => void;
  onSearch?: () => void;
  onClear?: () => void;
  isDatePickerOpen: boolean;
  onDatePickerOpenChange: (open: boolean) => void;
}

export const DeliveryFilters = ({
  isOpen,
  onOpenChange,
  filters,
  onFilterChange,
  onSearch,
  onClear,
  isDatePickerOpen,
  onDatePickerOpenChange,
}: DeliveryFiltersProps) => {
  return (
    <Collapsible open={isOpen} onOpenChange={onOpenChange}>
      <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-3">
        <div className="col-span-6 md:col-span-3 flex flex-col gap-1">
          <Label className="text-xs">Envío</Label>
          <Input
            className=""
            placeholder="Buscar por nombre"
            value={filters.shipment}
            onChange={(e) => onFilterChange("shipment", e.target.value)}
          />
        </div>

        <div className="col-span-6 md:col-span-3 flex flex-col gap-1">
          <Label className="text-xs">Etiqueta</Label>
          <Select
            value={filters.label}
            onValueChange={(value) => onFilterChange("label", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Buscar por etiqueta" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {DELIVERY_LABELS.map((label) => (
                  <SelectItem key={label.id} value={label.value}>
                    {label.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-6 md:col-span-3 flex flex-col gap-1">
          <Label className="text-xs">Estado</Label>
          <Select
            value={filters.status}
            onValueChange={(value) => onFilterChange("status", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Buscar por estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {DELIVERY_STATUSES.map((status) => (
                  <SelectItem key={status.id} value={status.value}>
                    {status.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <DeliverySearchActions onSearch={onSearch} onClear={onClear} />

        <CollapsibleContent className="col-span-6 grid grid-cols-6 gap-2">
          <div className="col-span-6 md:col-span-3 flex flex-col gap-1">
            <Label className="text-xs">Servicio</Label>
            <Select
              value={filters.service}
              onValueChange={(value) => onFilterChange("service", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Buscar por servicio" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {DELIVERY_SERVICES.map((service) => (
                    <SelectItem key={service.id} value={service.value}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <DeliveryDatePicker
            dates={filters.dateRange}
            isOpen={isDatePickerOpen}
            onDateChange={(dates) => onFilterChange("dateRange", dates)}
            onOpenChange={onDatePickerOpenChange}
          />
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};
