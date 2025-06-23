import { DeliveryHeader } from "../components/DeliveryHeader";
import { DeliveryFilters } from "../components/DeliveryFilters";
import { useDeliveryFilters } from "../hooks/useDeliveryFilters";
import { DeliveryTable } from "../components/DeliveryTable";
import { deliveries } from "../data/deliveries";
import { DeliveryColums } from "../components/DeliveryColums";
import { useTanstackTable } from "@/shared/hooks/useTanstackTable";
import { DeliveriesActions } from "../components/DeliveryActions";

export const DeliveryPage = () => {
  const {
    filters,
    searchFilters,
    updateFilter,
    toggleCollapsible,
    toggleDatePicker,
  } = useDeliveryFilters();

  const { table, selectedRows, clearSelection } = useTanstackTable(
    deliveries,
    DeliveryColums
  );

  return (
    <div className="flex flex-col h-full w-full p-4">
      <DeliveryHeader />
      <div className="bg-white h-full p-4 rounded">
        <DeliveryFilters
          filters={filters}
          isOpen={searchFilters.isOpen}
          onOpenChange={toggleCollapsible}
          isDatePickerOpen={searchFilters.isDatePickerOpen}
          onDatePickerOpenChange={toggleDatePicker}
          onFilterChange={updateFilter}
        />
        <DeliveryTable table={table} />
      </div>
      {selectedRows.length > 0 && (
        <DeliveriesActions
          selectedRows={selectedRows}
          clearSelectedRows={clearSelection}
        />
      )}
    </div>
  );
};
