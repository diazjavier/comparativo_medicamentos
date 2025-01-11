"use client";

import { useState, useEffect } from "react";
import TableBasic from "@/components/TableBasic";
import {ChartCombinado, getChartOptions} from "@/components/ChartCombinado";
import {
  Medicamento,
  MedicamentosData,
  Generico,
  GenericosData,
  Opciones,
} from "@/interfaces/medicamentos";
import { Autocomplete, TextField, Tooltip } from "@mui/material";

export default function Comerciales() {
  const [genState, setGenState] = useState();
  const [meds, setMeds] = useState<MedicamentosData>({ data: { nnes: [] } });
  // const [genericos, setGenericos] = useState<Generico[]>([]);
  const [options, setOptions] = useState<Opciones[]>([]);
  const [generico, setGenerico] = useState<Generico[]>([]);
  const [lasChartOptions, setLasChartOptions] = useState({});


  const fetchComerciales = async () => {
    console.log("Entró a fetchComerciales")
    const res = await fetch(
      `http://localhost:3000/api/comerciales/${genState}`
    );
    const comecs = await res.json();
    console.log(comecs)
    setMeds({ data: { nnes: comecs } });

    const res2 = await fetch(`http://localhost:3000/api/genericos/${genState}`);
    const gen = await res2.json();
    setGenerico(gen);
  };

  const fetchGenericos = async () => {
    const res3 = await fetch(`http://localhost:3000/api/genericos`);
    const gens = await res3.json();
    // const gensUnsorted = await res3.json();
    // const gens = gensUnsorted.sort(function(a: any, b: any){return a.label - b.label});
    setOptions(gens);
  };

  const handleChange = async (evento: any, valor: any) => {
    if (valor !== null && valor !== undefined && valor !== "") {
      const nne = valor.value;
      setGenState(valor.value);
    }
  };

  useEffect(() => {
    fetchGenericos();
  }, []);

  useEffect(() => {
    if (genState !== null && genState !== undefined && genState !== "") {
      fetchComerciales();
      // getChartOptions();
    }
  }, [genState]);

  useEffect(() => {
    if(meds.data.nnes.length){
      const opts: {} = getChartOptions(meds);
      setLasChartOptions(opts);
    }
  }, [meds]);

  return (
    <div>
      <Autocomplete
        sx={{ width: 300 }}
        options={options}
        renderInput={(params) => <TextField {...params} label="Genérico" />}
        onChange={handleChange}
      />

      {/* <label htmlFor="txtcomercial">Generico:</label>
      <input
        type="text"
        name="txtcomercial"
        onChange={(e) => {
          const elValue: any = e.target.value;
          setGenState(elValue);
        }}
      />
      <button
        onClick={() => {
          fetchComerciales();
        }}
      >
        Buscar
      </button> */}
      <br />
      {generico &&
        generico.map((gene, index) => (
          <h3 key={index}>
            {gene.nne} - {gene.nne_desc}
          </h3>
        ))}

      <div className="flex flex-col columns-2">
        <div className="h-500">
          <TableBasic {...meds} />
        </div>
        <div className="h-1000 p-5 m-5">
          <ChartCombinado {...lasChartOptions} />
        </div>
      </div>
    </div>
  );
}
