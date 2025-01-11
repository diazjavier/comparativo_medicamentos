import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "@/utils/dbConnection";

export async function GET (req: NextApiRequest, res: NextApiResponse) {

  const elQuery = await conn.query(`
    select distinct droga_combo 
    from tableromacchia
    where dosis is not null
    and ppu is not null
    order by droga_combo;
    `);

    return new Response(JSON.stringify(elQuery.rows));
};
