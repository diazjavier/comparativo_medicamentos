

import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "@/utils/dbConnection";
 
export async function GET (req: NextApiRequest, res: NextApiResponse) {
  // const {method} = req;
  // console.log(method);
  const elQuery = await conn.query('select * from comerciales where nne = 5005005;');

  return new Response(JSON.stringify(elQuery.rows));
}