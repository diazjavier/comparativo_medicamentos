import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";
import { conn } from "@/utils/dbConnection";
import { ConsultaComerciales } from "@/interfaces/consultas";

export async function GET(req: NextRequest, res: NextResponse) {


  const laQuery: string = `
    select distinct 
      codigo1 as codigo,
      nombrecomercial || ' ' ||formapresentacion as nombre 
    from tableromacchia
    where dosis is not null
    and ppu is not null
    order by nombrecomercial || ' ' ||formapresentacion asc;`;

  const resp = await conn.query(laQuery);

  // return new Response(JSON.stringify(resp.rows));
  return NextResponse.json(resp.rows);
}
