
import { NextResponse, NextRequest } from "next/server";
import { conn } from "@/utils/dbConnection";

export async function PUT(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  const codigo = data.codigo;

  const laQuery: string = `
    select 
      droga_combo as droga,
      dosis,
      forma10 as ff
    from tableromacchia
    where dosis is not null
    and ppu is not null
    and codigo1 = '${codigo}'
    order by ppu asc;`;

  const resp = await conn.query(laQuery);

  return NextResponse.json(resp.rows);
}
