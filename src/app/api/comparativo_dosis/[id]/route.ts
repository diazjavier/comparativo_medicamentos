import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "@/utils/dbConnection";
import { getComparativoDosis } from "@/utils/queries";

export async function GET (req: NextApiRequest, {params}: any, res: NextApiResponse) {

  const { id } = await params;
  const elId2 = id;
  
  // const resp = await conn.query(`
  //   select distinct dosis 
  //   from tableromacchia
  //   where dosis is not null
  //   and ppu is not null
  //   and upper(droga_combo) = '${toUpper(elId2)}';`);

    const resp = await conn.query(getComparativoDosis(elId2));  
    return new Response(JSON.stringify(resp.rows));
};
