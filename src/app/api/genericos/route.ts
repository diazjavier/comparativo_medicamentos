"use server"

import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "@/utils/dbConnection";
 
export async function GET (req: NextApiRequest, res: NextApiResponse) {
  // const {method} = req;
  // console.log(method);
  const elQuery = await conn.query('select distinct nne as value, nne_desc as label from comerciales order by nne_desc asc;');

  // return res.status(200).json(elQuery.rows);
  return new Response(JSON.stringify(elQuery.rows));
}