/* eslint-disable @typescript-eslint/no-explicit-any */
import { rankItem } from "@tanstack/match-sorter-utils";
import {
  type ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

const fuzzyFilter = (
  row: any,
  columnId: string,
  value: string,
  addMeta: any
) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({ itemRank });
  return itemRank.passed;
};

export function useTanstackTable<T>(data: T[], columns: ColumnDef<T>[]) {
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");
  const [pageSize, setPageSize] = useState(10);

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
      globalFilter,
      pagination: { pageSize, pageIndex: 0 },
    },
    onRowSelectionChange: setRowSelection,
    onPaginationChange: () => {},
    onGlobalFilterChange: setGlobalFilter,
    enableRowSelection: true,
    filterFns: { fuzzy: fuzzyFilter },
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return {
    table,
    selectedRows: table.getSelectedRowModel().rows.map((r) => r.original),
    clearSelection: () => setRowSelection({}),
    setPageSize,
    setGlobalFilter,
  };
}
