
import { NextResponse, NextRequest } from "next/server";
import { conn } from "@/utils/dbConnection";
import { getComparativoComercialesDatos } from "@/utils/queries";
import { string } from "mathjs";

export async function PUT(req: NextRequest, res: NextResponse) {
  const data = await req.json();

  const codigo = data.codigo;
  const resp = await conn.query(getComparativoComercialesDatos(codigo));
  return NextResponse.json(resp.rows);
}
