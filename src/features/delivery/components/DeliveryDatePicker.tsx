import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { DateRange } from "react-day-picker";

interface DeliveryDatePickerProps {
  dates: DateRange | undefined;
  isOpen: boolean;
  onDateChange: (dates: DateRange | undefined) => void;
  onOpenChange: (open: boolean) => void;
}

export const DeliveryDatePicker = ({
  dates,
  isOpen,
  onDateChange,
  onOpenChange,
}: DeliveryDatePickerProps) => {
  return (
    <div className="col-span-6 md:col-span-3 flex flex-col gap-1">
      <Label className="text-xs">Fecha de Creación</Label>
      <Popover open={isOpen} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left text-sm font-normal text-muted-foreground"
          >
            {dates
              ? `${dates.from?.toLocaleDateString()} - ${dates.to?.toLocaleDateString()}`
              : "Seleccionar rango de fechas"}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="range"
            selected={dates}
            captionLayout="dropdown"
            onSelect={onDateChange}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
