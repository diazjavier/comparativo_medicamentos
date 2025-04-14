import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "@/utils/dbConnection";

export async function GET (req: NextApiRequest, {params}: any, res: NextApiResponse) {

  const elId = params.id;

  const resp = await conn.query(`select distinct nne, nne_desc from comerciales where fecha = 20241105 and considerado = 1 and nne = ${elId};`);
  
  return new Response(JSON.stringify(resp.rows));
};
