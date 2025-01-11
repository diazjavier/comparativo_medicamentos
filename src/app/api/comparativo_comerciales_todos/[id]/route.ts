import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "@/utils/dbConnection";

export async function GET (req: NextApiRequest, {params}: any, res: NextApiResponse) {

  const elId2 = params.id;

  function toUpper(elID: any) {
    const idUP = elID.toUpperCase();
    return idUP;
  }

  const resp = await conn.query(`
    select 
      droga_combo,
      codigo1,
      nombrecomercial,
      formapresentacion,
      clavelab,
      laboratorio,
      q,
      dosis,
      ppu,
      pvp,
      forma10
    from tableromacchia
    where dosis is not null
    and ppu is not null
    and upper(droga_combo) = '${toUpper(elId2)}';
    `);

    return new Response(JSON.stringify(resp.rows));
};
