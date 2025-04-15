"use client";

import * as React from "react";
import { useState, useEffect } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Autocomplete, TextField, Tooltip } from "@mui/material";
import * as math from "mathjs";

import TableBasic2 from "@/components/TableBasic2";
import SimpleSectionCenter from "@/components/SimpleSectionCenter";

import {
  ChartCombinado2,
  getChartOptions2,
  getChartOptions3
} from "@/components/ChartCombinado2";

import {
  Medicamento,
  MedicamentosData,
  Generico,
  GenericosData,
  Opciones,
  MedicamentosComparativoData,
  MedicamentoComparativoComercial,
  MedicamentoComparativoComercialData,
  DatosDelComercial,
} from "@/interfaces/medicamentos";

import { TabPanelProps } from "@/interfaces/tabs";

import { comparadorDePrecios } from "@/components/data";

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizontal-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ComercialesTab() {
  const [droState, setDroState] = useState("");
  const [meds2, setMeds2] = useState<MedicamentosComparativoData>({
    data: { meds: [] },
  });
  const [meds3, setMeds3] = useState<MedicamentosComparativoData>({
    data: { meds: [] },
  });
  const [coms2, setComs2] = useState<MedicamentoComparativoComercialData>({
    data: { coms: [] },
  });

  const [options, setOptions] = useState<string[]>([]);
  const [options2, setOptions2] = useState<string[]>([]);
  const [options3, setOptions3] = useState<string[]>([]);
  const [options4, setOptions4] = useState<MedicamentoComparativoComercial[]>(
    []
  );
  const [options5, setOptions5] = useState<string[]>([]);
  
  const [lasChartOptions2, setLasChartOptions2] = useState({});
  const [lasChartOptions3, setLasChartOptions3] = useState({});
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState<MedicamentoComparativoComercial>({
    codigo: "",
    nombre: "",
  });
  const [value5, setValue5] = useState("");

  const [cv, setCv] = useState(0);
  const [prom, setProm] = useState(0);
  const [mediana, setMediana] = useState(0);
  const [cuartilo1, setCuartilo1] = useState(0);
  const [cuartilo3, setCuartilo3] = useState(0);
  const [tabValue, setTabValue] = useState(0);
  const [datosDelCom, setDatosDelCom] = useState<DatosDelComercial[]>([
    { droga: "", dosis: "", ff: "", unidades: ""},
  ]);
  const [datosQuery, setDatosQuery] = useState<DatosDelComercial>({
    droga: "",
    dosis: "",
    ff: "",
    unidades: "",
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

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
    const cuartilos: any = math.quantileSeq(ppus, [0.25, 0.75]);
    const stdDeviation2: math.MathNumericType[] = math.std(ppus);

    setCv(coefVariacion);
    setProm(promedio);
    setMediana(median);
    setCuartilo1(cuartilos[0]);
    setCuartilo3(cuartilos[1]);
  };

  const fetchComparativoComerciales = async () => {
    const request = new Request(
      `http://localhost:3000/api/comparativo_comerciales`,
      {
        method: "PUT",
        body: JSON.stringify(datosQuery),
      }
    );
    const res = await fetch(request);
    const comecs = await res.json();
    setMeds3({ data: { meds: comecs } });
  };

  const fetchComparativoUnidades = async () => {
    const request = new Request(
      `http://localhost:3000/api/comparativo_unidades`,
      {
        method: "PUT",
        body: JSON.stringify(datosQuery),
      }
    );
    const res = await fetch(request);
    const comecs = await res.json();
    setMeds2({ data: { meds: comecs } });

  };

  const fetchComercialesTodos = async () => {
    const res4 = await fetch(
      `http://localhost:3000/api/comparativo_comerciales_todos`
    );
    const comercs = await res4.json();

    setComs2({ data: { coms: comercs } });

  };

  const fetchDatosDelComercial = async () => {
    const request = new Request(
      `http://localhost:3000/api/comparativo_comerciales_datos`,
      {
        method: "PUT",
        body: JSON.stringify(value4),
      }
    );
    const res = await fetch(request);
    const comecs = await res.json();

    setDatosDelCom(comecs);
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

  const fetchUnidades = async () => {
    const request = new Request(
      `http://localhost:3000/api/unidades`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ droState, value2, value3 }),
      }
    );
    const res = await fetch(request);

    const units = await res.json();

    const lasUnidades: string[] = units.map((com: { unidades: string }) => {
      return com.unidades;
    });
    setOptions5(lasUnidades);
  };  

  const fetchGenericos = async () => {
    const res3 = await fetch(`http://localhost:3000/api/comparativo_genericos`);
    const gens = await res3.json();

    const gensArray: string[] = gens.map((gen: { droga_combo: string }) => {
      return gen.droga_combo;
    });

    setOptions(gensArray);
  };

  const handleChange = async (evento: any, valor: any) => {
    if (valor !== null && valor !== undefined && valor !== "") {
      setValue2("");
      setValue3("");
      setValue4({
        codigo: "",
        nombre: "",
      });
      setValue5("");
      setDroState(valor);
    } else {
      //Tendría que limpiar todo...
    }
  };

  const handleChange2 = async (evento: any, valor: any) => {
    if (valor !== null && valor !== undefined && valor !== "") {
      setValue2(valor);
      setValue3("");
      setValue5("");

    }
  };

  const handleChange3 = async (evento: any, valor: any) => {
    if (valor !== null && valor !== undefined && valor !== "") {
      setValue3(valor);
      setValue5("");
    }
  };

  const handleChange4 = async (evento: any, valor: any) => {
    if (valor !== null && valor !== undefined && valor !== "") {
      setValue4(valor);
    }
  };

  const handleChange5 = async (evento: any, valor: any) => {
    if (valor !== null && valor !== undefined && valor !== "") {
      setValue5(valor);
    }
  };


  useEffect(() => {
    fetchGenericos();
    fetchComercialesTodos();
  }, []);

  useEffect(() => {
    if (droState !== null && droState !== undefined && droState !== "") {
      fetchDosis();
    }
  }, [droState]);

  useEffect(() => {
    if (
      droState !== null &&
      droState !== undefined &&
      droState !== "" &&
      value2 !== null &&
      value2 !== undefined &&
      value2 !== ""
    ) {
      fetchFormasFarmaceuticas();
    }

  }, [value2]);

  useEffect(() => {

    if (
      droState !== null &&
      droState !== undefined &&
      droState !== "" &&
      value2 !== null &&
      value2 !== undefined &&
      value2 !== "" &&
      value3 !== null &&
      value3 !== undefined &&
      value3 !== ""
    ) {
      fetchUnidades();
    }

  }, [value3]);

  useEffect(() => {
    if (
      droState !== null &&
      droState !== undefined &&
      droState !== "" &&
      value2 !== null &&
      value2 !== undefined &&
      value2 !== "" &&
      value3 !== null &&
      value3 !== undefined &&
      value3 !== "" &&
      value5 !== null &&
      value5 !== undefined &&
      value5 !== ""
 
    ) {
      const data: DatosDelComercial = {
        droga: droState,
        dosis: value2,
        ff: value3,
        unidades: value5,
      };
      setDatosQuery(data);
    }
  }, [value5]);

  useEffect(() => {
    if (value4 !== null && value4 !== undefined && value4.codigo !== "") {
      
      fetchDatosDelComercial();      
      const data: DatosDelComercial = datosDelCom[0];
      setDatosQuery(data);

    }
  }, [value4]);

  useEffect(() => {
    if (meds2.data.meds.length) {
      calculoCv();

      const opts: {} = getChartOptions2(meds2, value4.nombre);
      setLasChartOptions2(opts);
  
    }
  }, [meds2]);

  useEffect(() => {
    if (meds3.data.meds.length) {

      const opts: {} = getChartOptions3(meds3, value4.nombre);
      setLasChartOptions3(opts);
  
    }
  }, [meds3]);

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

  //Esto es para seleccionar la opción en el combo de unidades cuando hay un solo valor
  useEffect(() =>{
    if(options5.length === 1) {
      setValue5(options5[0]);
    }
  }, [options5])

  useEffect(() => {
    setOptions4(coms2.data.coms);
  }, [coms2]);

  useEffect(() => {
    if (
      datosDelCom[0].droga !== null &&
      datosDelCom[0].droga !== undefined &&
      datosDelCom[0].droga !== "" &&
      datosDelCom[0].dosis !== null &&
      datosDelCom[0].dosis !== undefined &&
      datosDelCom[0].dosis !== "" &&
      datosDelCom[0].ff !== null &&
      datosDelCom[0].ff !== undefined &&
      datosDelCom[0].ff !== "" &&
      datosDelCom[0].unidades !== null &&
      datosDelCom[0].unidades !== undefined &&
      datosDelCom[0].unidades !== "" 
    ) {
      setDatosQuery(datosDelCom[0]);
      setDroState(datosDelCom[0].droga);
      setValue2(datosDelCom[0].dosis);
      setValue3(datosDelCom[0].ff);
      setValue5(datosDelCom[0].unidades)
    }
  }, [datosDelCom]);

  useEffect(() => {
    if (
      datosQuery.droga !== null &&
      datosQuery.droga !== undefined &&
      datosQuery.droga !== "" &&
      datosQuery.dosis !== null &&
      datosQuery.dosis !== undefined &&
      datosQuery.dosis !== "" &&
      datosQuery.ff !== null &&
      datosQuery.ff !== undefined &&
      datosQuery.ff !== "" &&
      datosQuery.unidades !== null &&
      datosQuery.unidades !== undefined &&
      datosQuery.unidades !== ""
    ) {
      fetchComparativoComerciales();
      fetchComparativoUnidades();
    }
  }, [datosQuery]);

  return (
    <div>

      <SimpleSectionCenter data={comparadorDePrecios} />

      <div className="flex wrap flex-col justify-center sm:justify-around sm:flex-row">
        <div className="flex-grow-2 w-full sm:w-1/2">
          <Box sx={{ width: "100%" }}>
            <Tabs              
              value={tabValue}
              onChange={handleTabChange}
              aria-label="Formas de búsqueda"
              sx={{
                borderBottom: 1,
                borderColor: "divider",
              }}
              centered
              //indicatorColor="secondary"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#1c1818"
                }
              }}
              textColor="inherit"
            >
              <Tab className="text-lg font-bold text-gray-600 dark:text-gray-300" label="Por droga" {...a11yProps(0)} />
              <Tab className="text-lg font-bold text-gray-600 dark:text-gray-300" label="Por comercial" {...a11yProps(1)} />

            </Tabs>
            <TabPanel value={tabValue} index={0}>
              <div className="m-4 p-2 text-gray-600 dark:text-gray-300">
                <Autocomplete
                  id="drogas"
                  sx={{
                    width: "100%",
                  }}
                  value={droState}
                  options={options}
                  renderInput={(params) => (
                    <TextField {...params} label="Genérico"/>
                  )}                  
                  onChange={handleChange}
                />
              </div>
              <div className="m-4 p-2 text-gray-600 dark:text-gray-300">
                <Autocomplete
                  id="dosis"
                  sx={{ width: "100%" }}
                  value={value2}
                  options={options2}
                  renderInput={(params) => (
                    <TextField {...params} label="Dosis" />
                  )}
                  onChange={handleChange2}
                />
              </div>
              <div className="m-4 p-2 ">
                <Autocomplete
                  id="formafarmaceutica"
                  sx={{ width: "100%" }}
                  value={value3}
                  options={options3}
                  renderInput={(params) => (
                    <TextField {...params} label="Forma Farmacéutica" />
                  )}
                  onChange={handleChange3}
                />
              </div>
              <div className="m-4 p-2 ">
                <Autocomplete
                  id="unidades"
                  sx={{ width: "100%" }}
                  value={value5}
                  options={options5}
                  renderInput={(params) => (
                    <TextField {...params} label="Cantidad de unidades" />
                  )}
                  onChange={handleChange5}
                />
              </div>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <div className="mx-4 my-2 p-2 ">
                <Autocomplete
                  id="comercial"
                  sx={{ width: "100%" }}
                  value={value4}
                  options={options4}
                  getOptionLabel={(option) => option.nombre}
                  getOptionKey={(option) => option.codigo}
                  renderInput={(params) => (
                    <TextField {...params} label="comercial" />
                  )}
                  onChange={handleChange4}
                />
              </div>
              <br />
              <div className="ml-4 ">
                <table className="mx-auto">
                  <tbody className="ml-2">
                    <tr className="h-12">
                      <th className="text-left pl-2">Droga:</th>
                      <td className="w-24 text-center">{droState}</td>
                    </tr>
                    <tr className="h-12">
                      <th className="text-left pl-2">Dosis:</th>
                      <td className="w-24 text-center">{value2}</td>
                    </tr>
                    <tr className="h-12">
                      <th className="text-left pl-2">Forma farmacéutica:</th>
                      <td className="w-24 text-center">{value3}</td>
                    </tr>
                    <tr className="h-12">
                      <th className="text-left pl-2">Cantidad de unidades:</th>
                      <td className="w-24 text-center">{value5}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>
          </Box>
        </div>
        <div className="flex-grow-2  w-full sm:w-1/2 text-center m-4 justify-center">
          <h1 className="text-xl">Variabilidad de los precios</h1>
          <br />
          <div className="flax flex-row justify-center">
            <table className="border-gray-300 border-2 border-spacing-1 mx-auto">
              <tbody className="ml-2">
                <tr className="h-12">
                  <th className="text-left pl-2">
                    Coeficiente de variabilidad:
                  </th>
                  <td className="w-24 text-center">{cv}%</td>
                </tr>
                <tr className="h-12">
                  <th className="text-left pl-2">Promedio:</th>
                  <td className="w-24 text-center">
                    {new Intl.NumberFormat("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    }).format(prom)}
                  </td>
                </tr>
                <tr className="h-12">
                  <th className="text-left pl-2">Mediana:</th>
                  <td className="w-24 text-center">
                    {new Intl.NumberFormat("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    }).format(mediana)}
                  </td>
                </tr>
                <tr className="h-12">
                  <th className="text-left pl-2">1° Cuartilo:</th>
                  <td className="w-24 text-center">
                    {new Intl.NumberFormat("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    }).format(cuartilo1)}
                  </td>
                </tr>
                <tr className="h-12">
                  <th className="text-left pl-2">3° Cuartilo:</th>
                  <td className="w-24 text-center">
                    {new Intl.NumberFormat("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    }).format(cuartilo3)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <br />

      {droState && (
        <>
          <h2 className="text-3xl text-center my-2">
            {meds3.data.meds.length ? meds3.data.meds[0].droga_combo : ""}{" "}
            {meds3.data.meds.length ? meds3.data.meds[0].dosis + "mg" : ""}{" "}
            {meds3.data.meds.length ? meds3.data.meds[0].forma10 : ""}
            {meds3.data.meds.length ? " x " + meds3.data.meds[0].q : ""}
          </h2>

          <div className="flex flex-col columns-2">
            <div>
              <ChartCombinado2 {...lasChartOptions3} />
            </div>
            <div>
              <TableBasic2 {...meds3} />
            </div>
          </div>

          <div className="flex flex-col columns-2">
            <div>
              <ChartCombinado2 {...lasChartOptions2} />
            </div>
            <div>
              <TableBasic2 {...meds2} />
            </div>
          </div>

        </>
      )}
    </div>
  );
}
