import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";
import { conn } from "@/utils/dbConnection";
import { ConsultaComerciales } from "@/interfaces/consultas";
import {getCompartivoComercialesTodos} from "@/utils/queries";

export async function GET(req: NextRequest, res: NextResponse) {

  const laQuery: string = getCompartivoComercialesTodos();

  const resp = await conn.query(laQuery);

  return NextResponse.json(resp.rows);
}
