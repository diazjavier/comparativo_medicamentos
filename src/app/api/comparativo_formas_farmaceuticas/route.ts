import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { conn } from "@/utils/dbConnection";
import { getComparativoFormasFarmaceuticas } from "@/utils/queries";

// export async function GET(req: NextApiRequest, res: NextApiResponse) {

//   const elQuery = await conn.query(
//     "select * from comerciales where nne = 5005005;"
//   );

//   return new Response(JSON.stringify(elQuery.rows));
// }

export async function PUT(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const droga = body.droState;
  const dosis = body.value2;

  // function toUpper(elID: any) {
  //   const idUP = elID.toUpperCase();
  //   return idUP;
  // }

  // const laQuery: string = `
  //   select distinct
  //     forma10
  //   from tableromacchia
  //   where dosis is not null
  //   and ppu is not null
  //   and upper(droga_combo) = '${toUpper(droga)}'
  //   and dosis = ${dosis};`;

  // const resp = await conn.query(laQuery);

  const resp = await conn.query(getComparativoFormasFarmaceuticas(droga, dosis));
  return new Response(JSON.stringify(resp.rows));
}
