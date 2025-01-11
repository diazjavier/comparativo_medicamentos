import { MaterialReactTable, MRT_ColumnDef, MRT_GroupColumnDef, useMaterialReactTable } from "material-react-table";
import { useMemo } from "react";
import { MedicamentosComparativo, MedicamentosComparativoData } from "@/interfaces/medicamentos";

function TableBasic2(meds: MedicamentosComparativoData) {

    const dataUnsorted = meds.data.meds;
    const data = dataUnsorted.sort(function(a, b){return a.ppu - b.ppu});

    const columns = useMemo<MRT_ColumnDef<MedicamentosComparativo>[]>(
        () => [
            // {
            //     accessorKey: "droga_combo",
            //     header: "Principio Activo",
            //     enableHiding: false,
            // },
            // {
            //     accessorKey: "codigo1",
            //     header: "Código Kairos",
            //     enableHiding: false,
            // },
            {
                accessorFn: (row) => `${row.nombrecomercial + " " + row.formapresentacion}`,
                //accessorKey: "nombrecomercial",
                header: "Marca Comercial",
                enableHiding: false,
                id: "marca",
            },
            // {
            //     accessorKey: "formapresentacion",
            //     header: "Presentación",
            //     enableHiding: false,
            // },
            {
                accessorKey: "laboratorio",
                header: "Laboratorio",
                enableHiding: false,
                id: "lab",
            },

            // {
            //     accessorKey: "dosis",
            //     header: "mg",
            //     enableHiding: false,
            // },
            {
                accessorFn: (row) => `${new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(row.pvp)}`,
                //accessorKey: "pvp",
                header: "Precio del empaque",
                enableHiding: false,
                id: "pvp",                
            },
            {
                accessorKey: "q",
                header: "Unidades por empaque",
                enableHiding: false,
                id: "q",
            },
            {
                accessorFn: (row) => `${new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(row.ppu)}`,
                //accessorKey: "ppu",
                header: "Precio por unidad",
                enableHiding: false,
                id: "ppu",
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
            columnOrder: [
                'marca', 'ppu', 'q', 'pvp', 'lab',
                // 'Marca Comercial',
                // 'Laboratorio',
                // //'Unidades por empaque',
                // //'mg',
                // 'Precio del empaque',
                // 'Precio por unidad', //move the built-in selection column to the end of the table
              ],
        },
    });

    return <MaterialReactTable table={table}/>;
}

export default TableBasic2;