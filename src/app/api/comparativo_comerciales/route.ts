import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";
import { conn } from "@/utils/dbConnection";
import { ConsultaComerciales } from "@/interfaces/consultas";
import { getComparativoComercialesChart } from "@/utils/queries";

export async function PUT(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const drogas = data.droga;
  const dosis = data.dosis;
  const ffs = data.ff;
  const unidades = data.unidades;

  // function toUpper(elID: string) {
  //   const idUP = elID.toUpperCase();
  //   return idUP;
  // }

  // const laQuery: string = `
  //   select 
  //     droga_combo,
  //     codigo1,
  //     nombrecomercial,
  //     formapresentacion,
  //     clavelab,
  //     laboratorio,
  //     q,
  //     dosis,
  //     ppu,
  //     pvp,
  //     forma10
  //   from tableromacchia
  //   where dosis is not null
  //   and ppu is not null
  //   and upper(droga_combo) = '${toUpper(drogas)}'
  //   and dosis = ${dosis}
  //   and upper(forma10) = '${toUpper(ffs)}' 
  //   order by ppu asc;`;

  // const resp = await conn.query(laQuery);

  const resp = await conn.query(getComparativoComercialesChart(drogas, dosis, ffs, unidades));

  // return new Response(JSON.stringify(resp.rows));
  return NextResponse.json(resp.rows);
};
