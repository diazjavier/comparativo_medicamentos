"use client";

import { useState, useEffect } from "react";
import TableBasic2 from "@/components/TableBasic2";
import {
  ChartCombinado2,
  getChartOptions2,
} from "@/components/ChartCombinado2";
import {
  Medicamento,
  MedicamentosData,
  Generico,
  GenericosData,
  Opciones,
  MedicamentosComparativoData,
} from "@/interfaces/medicamentos";

import { Autocomplete, TextField, Tooltip } from "@mui/material";
import * as math from "mathjs";

export default function Comerciales() {
  const [genState, setGenState] = useState();
  const [droState, setDroState] = useState("");
  const [meds2, setMeds2] = useState<MedicamentosComparativoData>({
    data: { meds: [] },
  });
  // const [genericos, setGenericos] = useState<Generico[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [options2, setOptions2] = useState<string[]>([]);
  const [options3, setOptions3] = useState<string[]>([]);
  const [generico, setGenerico] = useState<Generico[]>([]);
  const [lasChartOptions, setLasChartOptions] = useState({});
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [cv, setCv] = useState(0);
  const [prom, setProm] = useState(0);
  const [mediana, setMediana] = useState(0);
  const [cuartilo1, setCuartilo1] = useState(0);
  const [cuartilo3, setCuartilo3] = useState(0);

  const calculoCv = () => {
    // No se por qué tengo que transformar el número en string y luego volver a transformarlo en número para que lo tome
    const n: number = meds2.data.meds.length;
    const ppus: number[] = meds2.data.meds.map((med) => {
      return parseFloat(med.ppu.toString());
    });
    const sumatoria: number = ppus.reduce((a, b) => {
      return b + a;
    }, 0);
    const promedio: number = parseFloat((sumatoria / n).toFixed(1).toString());
    const desvios: number[] = meds2.data.meds.map((med) => {
      return Math.pow(parseFloat(med.ppu.toString()) - promedio, 2);
    });
    const sumaDesvios: number = desvios.reduce((a, b) => {
      return b + a;
    }, 0);
    const varianza: number = sumaDesvios / n;
    //la desviacion estandar es la raiz cuadrada de la varianza
    const stdDeviation: number = parseFloat(
      Math.sqrt(varianza).toFixed(1).toString()
    );
    const coefVariacion: number = parseFloat(
      ((stdDeviation / promedio) * 100).toFixed(1).toString()
    );
    const median: number = parseFloat(math.median(ppus).toFixed(1).toString());
    const cuartilos: any =  math.quantileSeq(ppus, [0.25, 0.75]);
    const stdDeviation2: math.MathNumericType[] = math.std(ppus);
    //const cuartilos: math.MathNumericType[] = math.quantileSeq(ppus, [1/25, 1/75]);
    //console.log("Cuartilos: ", cuartilos);
    console.log(
      "promedio: ",
      promedio,
      "Varianza: ",
      varianza,
      "DesvEstandar: ",
      stdDeviation,
      "Mediana: ",
      median,
      "stDeviation2: ",
      stdDeviation2, 
      "1° Cuartilo: ",
      cuartilos[0],
      "3° Cuartilo: ",
      cuartilos[1]
    );
    setCv(coefVariacion);
    setProm(promedio);
    setMediana(median);
    setCuartilo1(cuartilos[0]);
    setCuartilo3(cuartilos[1]);
  };

  const fetchComerciales = async () => {
    const request = new Request(
      `http://localhost:3000/api/comparativo_comerciales`,
      {
        method: "PUT",
        body: JSON.stringify({ droState, value2, value3 }),
      }
    );
    const res = await fetch(request);
    const comecs = await res.json();

    setMeds2({ data: { meds: comecs } });
  };

  const fetchFormasFarmaceuticas = async () => {
    const request = new Request(
      `http://localhost:3000/api/comparativo_formas_farmaceuticas`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ droState, value2 }),
      }
    );
    const res = await fetch(request);

    const ffs = await res.json();
    const lasFfs: string[] = ffs.map((com: { forma10: string }) => {
      return com.forma10;
    });
    setOptions3(lasFfs);
  };

  const fetchDosis = async () => {
    const res = await fetch(
      `http://localhost:3000/api/comparativo_dosis/${droState}`
    );
    const comecs = await res.json();
    const comecsArray: string[] = comecs.map((com: { dosis: string }) => {
      return com.dosis;
    });
    setOptions2(comecsArray);

    // const res2 = await fetch(`http://localhost:3000/api/genericos/${genState}`);
    // const gen = await res2.json();
    // setGenerico(gen);
  };

  const fetchGenericos = async () => {
    const res3 = await fetch(`http://localhost:3000/api/comparativo_genericos`);
    const gens = await res3.json();
    const gensArray: string[] = gens.map((gen: { droga_combo: string }) => {
      return gen.droga_combo;
    });
    // const gensUnsorted = await res3.json();
    // const gens = gensUnsorted.sort(function(a: any, b: any){return a.label - b.label});
    setOptions(gensArray);
  };

  const handleChange = async (evento: any, valor: any) => {
    if (valor !== null && valor !== undefined && valor !== "") {
      setValue2("");
      setValue3("");
      setDroState(valor);
    }
  };

  const handleChange2 = async (evento: any, valor: any) => {
    if (valor !== null && valor !== undefined && valor !== "") {
      setValue2(valor);
      setValue3("");
    }
  };

  const handleChange3 = async (evento: any, valor: any) => {
    if (valor !== null && valor !== undefined && valor !== "") {
      setValue3(valor);
    }
  };

  useEffect(() => {
    fetchGenericos();
  }, []);

  useEffect(() => {
    if (droState !== null && droState !== undefined && droState !== "") {
      fetchDosis();
    } else {
      setOptions2([]);
    }
  }, [droState]);

  useEffect(() => {
    if (value2 !== null && value2 !== undefined && value2 !== "") {
      fetchFormasFarmaceuticas();
    } else {
      setOptions2([]);
    }
  }, [value2]);

  useEffect(() => {
    if (value3 !== null && value3 !== undefined && value3 !== "") {
      fetchComerciales();
    }
  }, [value3]);

  useEffect(() => {
    if (meds2.data.meds.length) {
      calculoCv();
      const opts: {} = getChartOptions2(meds2);
      setLasChartOptions(opts);
    }
  }, [meds2]);

  //Esto es para seleccionar la opción en el combo de dosis cuando hay un solo valor
  useEffect(() => {
    if (options2.length === 1) {
      setValue2(options2[0]);
    }
  }, [options2]);

  //Esto es para seleccionar la opción en el combo de forma farmacéutica cuando hay un solo valor
  useEffect(() => {
    if (options3.length === 1) {
      setValue3(options3[0]);
    }
  }, [options3]);

  return (
    <div>
      <div className="flex wrap flex-col justify-around sm:flex-row">
        <div className="flex-grow-2">
          <div className="m-4 p-2 ">
            <Autocomplete
              id="drogas"
              sx={{ width: 300 }}
              value={droState}
              options={options}
              renderInput={(params) => (
                <TextField {...params} label="Genérico" />
              )}
              onChange={handleChange}
            />
          </div>
          <div className="m-4 p-2 ">
            <Autocomplete
              id="dosis"
              sx={{ width: 300 }}
              value={value2}
              options={options2}
              renderInput={(params) => <TextField {...params} label="Dosis" />}
              onChange={handleChange2}
            />
          </div>
          <div className="m-4 p-2 ">
            <Autocomplete
              id="formafarmaceutica"
              sx={{ width: 300 }}
              value={value3}
              options={options3}
              renderInput={(params) => (
                <TextField {...params} label="Forma Farmacéutica" />
              )}
              onChange={handleChange3}
            />
          </div>
        </div>
        <div className="flex-grow-2 w-80 text-center m-4">
          <h1 className="text-2xl font-bold">Variabilidad de los precios</h1>
          <br />
          <table>
            <tbody>
              <tr className="h-12">
                <th className="text-left">Coeficiente de variabilidad:</th>
                <td className="w-24 text-center">{cv}%</td>
              </tr>
              <tr className="h-12">
                <th className="text-left">Promedio:</th>
                <td className="w-24 text-center">{new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(prom)}</td>
              </tr>
              <tr className="h-12">
                <th className="text-left">Mediana:</th>
                <td className="w-24 text-center">{new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(mediana)}</td>
              </tr>
              <tr className="h-12">
                <th className="text-left">1° Cuartilo:</th>
                <td className="w-24 text-center">{new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(cuartilo1)}</td>
              </tr>
              <tr className="h-12">
                <th className="text-left">3° Cuartilo:</th>
                <td className="w-24 text-center">{new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(cuartilo3)}</td>
              </tr>                            
            </tbody>
          </table>
        </div>
      </div>

      <br />
      {/* {droState && <h2>{droState ? droState : ""} {value2 ? value2+"mg" : ""} {}</h2>} */}
      {droState && (
        <h2 className="text-3xl text-center">
          {meds2.data.meds.length ? meds2.data.meds[0].droga_combo : ""}{" "}
          {meds2.data.meds.length ? meds2.data.meds[0].dosis + "mg" : ""}{" "}
          {meds2.data.meds.length ? meds2.data.meds[0].forma10 : ""}
        </h2>
      )}

      <div className="flex flex-col columns-2">
        <div className="h-500">
          <TableBasic2 {...meds2} />
        </div>
        {/* <div className="h-1000 p-5 m-5"> */}
        {/* <div  style={{height:'1500px',width:'1500px'}}> */}
        <div>
          <ChartCombinado2 {...lasChartOptions} />
        </div>
      </div>
    </div>
  );
}
