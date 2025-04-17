import { NextResponse, NextRequest } from "next/server";
import { conn } from "@/utils/dbConnection";
import { getComparativoComercialesChart } from "@/utils/queries";

export async function PUT(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const drogas = data.droga;
  const dosis = data.dosis;
  const ffs = data.ff;
  const unidades = data.unidades;

  const resp = await conn.query(getComparativoComercialesChart(drogas, dosis, ffs, unidades));

  // return new Response(JSON.stringify(resp.rows));
  return NextResponse.json(resp.rows);
};
