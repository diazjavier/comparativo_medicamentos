import { MaterialReactTable, MRT_ColumnDef, MRT_GroupColumnDef, useMaterialReactTable } from "material-react-table";
import { useMemo } from "react";
import { Medicamento, MedicamentosData } from "@/interfaces/medicamentos";

function TableBasic(meds: MedicamentosData) {

    const dataUnsorted = meds.data.nnes;
    const data = dataUnsorted.sort(function(a, b){return a.precpubuni - b.precpubuni});


    
    const columns = useMemo<MRT_ColumnDef<Medicamento>[]>(
        () => [
            {
                accessorKey: "codcombinado",
                header: "Código Kairos",
                enableHiding: false,
            },
            {
                accessorKey: "comercial",
                header: "Producto",
                enableHiding: false,
            },
            {
                accessorKey: "unidades",
                header: "Unidades x caja",
                enableHiding: false,
                muiTableBodyCellProps: {
                    align: 'center',
                  },
                
            },
            {
                accessorFn: (row) => `${new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(row.precpub)}`,
                header: "Caja",
                enableHiding: false,                
            },
            {
                accessorFn: (row) => `${new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(row.precpubuni)}`,
                header: "Unidad",
                enableHiding: false,
            }
        ],
        []
    );

    const table = useMaterialReactTable({
        columns,
        data,
        enableRowSelection: true,
        enableColumnOrdering: true,
        enableGlobalFilter: true,
        initialState: {
            pagination: {
                pageSize: 10,
                pageIndex: 0,
            },
        },
    });

    return <MaterialReactTable table={table}/>;
}

export default TableBasic;