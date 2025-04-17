import { NextRequest, NextResponse } from "next/server";
import { conn } from "@/utils/dbConnection";
import { getUnidades } from "@/utils/queries";

export async function PUT(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const droga = body.droState;
    const dosis = body.value2;
    const ff = body.value3

    const resp = await conn.query(getUnidades(droga, dosis, ff));
    return new Response(JSON.stringify(resp.rows));
}
