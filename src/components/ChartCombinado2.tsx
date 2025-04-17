"use client";

import ReactECharts from "echarts-for-react";
import { MedicamentosComparativoData } from "@/interfaces/medicamentos";

function getLab2(meds: MedicamentosComparativoData, name: string, value: number) {
  const medLab = meds.data.meds.find(med => med.ppu === value && name === (med.nombrecomercial + " " + med.formapresentacion));
  if (medLab) {
    return medLab.laboratorio
  } else {
    return ""
  };
};

function getLab2FromName(meds: MedicamentosComparativoData, name: string) {
  const medLab = meds.data.meds.find(med => name === (med.nombrecomercial + " " + med.formapresentacion));
  if (medLab) {
    return medLab.laboratorio
  } else {
    return ""
  };
};

function getDate2(meds: MedicamentosComparativoData, name: string, value: number) {
  
  const medDate = meds.data.meds.find(med => med.ppu === value && name === (med.nombrecomercial + " " + med.formapresentacion));
  if (medDate) {
    return medDate.fechavigencia
  } else {
    return ""
  };
};

function getDate3(meds: MedicamentosComparativoData, name: string, value: number) {
  
  const medDate = meds.data.meds.find(med => med.pvp === value && name === (med.nombrecomercial + " " + med.formapresentacion));
  if (medDate) {
    return medDate.fechavigencia
  } else {
    return ""
  };
};


function getLab3(meds: MedicamentosComparativoData, name: string, value: number) {
  const medLab = meds.data.meds.find(med => med.pvp === value && name === (med.nombrecomercial + " " + med.formapresentacion));
  if (medLab) {
    return medLab.laboratorio
  } else {
    return ""
  };
};

function getPVP(meds: MedicamentosComparativoData, name: string, value: number) {
  const medPVP = meds.data.meds.find(med => med.ppu === value && name === (med.nombrecomercial + " " + med.formapresentacion));
  if (medPVP) {
    return parseFloat(medPVP.pvp.toString());
  } else {
    return 0
  };
};

function getPPU(meds: MedicamentosComparativoData, name: string, value: number) {
  const medPPU = meds.data.meds.find(med => med.pvp === value && name === (med.nombrecomercial + " " + med.formapresentacion));
  if (medPPU) {
    return medPPU.ppu
  } else {
    return 0
  };
};

export function ChartCombinado2(opts: {}) {
  return (
    <ReactECharts
      option={opts}
      style={{
        height: "600px",
        width: "100%",
        padding: "10px",
        margin: "10px",
      }}
    />
  );
}

export function getChartOptions2(meds: MedicamentosComparativoData, comercialSelected: string) {
  //    const [chartOptions, setChartOptios] = useState({});

  // Primero ordeno el array por el ppu
  meds.data.meds.sort((a,b) => a.ppu - b.ppu);

  const colorBar: string = "#ea886a";
  const colorBarSelected: string = "#c0392b";

  const catCom: string[] = meds.data.meds.map((med) => {return med.nombrecomercial + " " + med.formapresentacion});

  const valCom: number[] = meds.data.meds.map((med) => {return med.ppu});

  const lab: string[] = meds.data.meds.map((med) => {return med.laboratorio});

  const generic: string = meds.data.meds[0].droga_combo + " " + meds.data.meds[0].dosis + "mg" + " " + meds.data.meds[0].forma10; 

  

  const lasChartOptions2: {} = {
    title: {
        text: "Comparativo de precios por unidad de todas las presentaciones",
        subtext: generic,
        padding: 10,
        margin: 10,
        textStyle: {
          width: "20%",
          '@media (min-width: 780px)': {
            width: 300
          },
          '@media (min-width: 1000px)': {
            width: 600
          },
          overflow: "break",
        },
    },
    legend: {
      show: true,
      // Try 'horizontal'
      orient: "horizontal",
      right: "center",
      // top: "top",
      bottom: "bottom",
      // lerft:"left"
    },
    grid: {
      containLabel: true,
      top:"100px"
    },
    tooltip: {
      show: true,
      showContent: true,
      trigger: 'item',
      //axisPointer: {
      //   type: 'line',
      //}
      formatter: function (params: any) {
        // return `$${params.value}`;
        return `
        ${params.marker}${params.name} 
        <br/><span style="float: left; margin-left: 15px">Laboratorio: ${getLab2(meds, params.name, params.value)}<span/>
        <br/><span style="float: left">Precio por empaque: <b>${new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(getPVP(meds, params.name, params.value))}.-</b></span>
        <br/><span style="float: left">Precio por unidad: <b>${new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(params.value)}.-</b></span>
        <br/><span style="float: left;">Fecha de actualización: ${getDate2(meds, params.name, params.value)}<span/>`;
      },

    },
    xAxis: {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        hideOverlap: false,
        interval: 0,
        width: 80,
        overflow: "break",
        margin: 15,
        // rotate: 45,
        rotate: 90,
        fontSize: 8,
        formatter: function (params: any) {
          const elLab: string = getLab2FromName (meds, params);
          return elLab;
        },
      },
      // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      data: catCom,
    },
    yAxis: {
      type: "value",      
    },
    label: {
      show: false,
      position: "top",
      fontSize: 8,
      formatter: function (params: { value: number}) {
        return `${new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(params.value)}`;
      },
    },
    series: [
      {
        name: "Precio por unidad (comprimido, cápsula, ampolla, etc.) en pesos argentinos",
        data: valCom,
        type: "bar",
        color: colorBar,
        itemStyle:{
          color: function (params: any) {
            if(comercialSelected && comercialSelected !== '' && comercialSelected === params.name && catCom.length > 1){
              //return "red";
              return colorBarSelected
            } else {
              //return "blue";
              return colorBar
            }

          }
        }
      },
    ],
  };

  return lasChartOptions2;
};

export function getChartOptions3(meds: MedicamentosComparativoData, comercialSelected: string) {

  // Primero ordeno el array por el pvp
  meds.data.meds.sort((a,b) => a.pvp - b.pvp);

  const colorBar: string = "#ea886a";
  const colorBarSelected: string = "#c0392b";

  const catCom: string[] = meds.data.meds.map((med) => {return med.nombrecomercial + " " + med.formapresentacion});

  const valCom: number[] = meds.data.meds.map((med) => {return med.pvp});

  const lab: string[] = meds.data.meds.map((med) => {return med.laboratorio});

  const generic: string = meds.data.meds[0].droga_combo + " " + meds.data.meds[0].dosis + "mg" + " " + meds.data.meds[0].forma10 + " x " + meds.data.meds[0].q; 

  

  const lasChartOptions3: {} = {
    title: {
        text: "Comparativo de precios de productos comerciales con presentación equivalente",
        subtext: generic,
        padding: 10,
        margin: 10,
        textStyle: {
          width: "20%",
          '@media (min-width: 780px)': {
            width: 300
          },
          '@media (min-width: 1000px)': {
            width: 600
          },
          overflow: "break",
        },
    },
    legend: {
      show: true,
      // Try 'horizontal'
      orient: "horizontal",
      right: "center",
      // top: "top",
      bottom: "bottom"
      // lerft:"left"
    },
    grid: {
      containLabel: true,
      top:"100px"
    },
    tooltip: {
      show: true,
      showContent: true,
      trigger: 'item',
      //axisPointer: {
      //   type: 'line',
      //}
      formatter: function (params: any) {
        return `
        ${params.marker}${params.name} 
        <br/><span style="float: left; margin-left: 15px"> Laboratorio: ${getLab3(meds, params.name, params.value)}<span/>
        <br/><span style="float: left">Precio por empaque: <b>${new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(params.value)}.-</b></span>
        <br/><span style="float: left">Precio por unidad: <b>${new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(getPPU(meds, params.name, params.value))}.-</b></span>
        <br/><span style="float: left;">Fecha de actualización: ${getDate3(meds, params.name, params.value)}<span/>`;        
      },

    },
    xAxis: {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        hideOverlap: false,
        interval: 0,
        width: 80,
        overflow: "break",
        margin: 15,
        rotate: 90,
        fontSize: 8,
      },
      data: catCom,
    },
    yAxis: {
      type: "value",
    },
    label: {
      show: true,
      position: "top",
      fontSize: 8,
      formatter: function (params: { value: number}) {
        return `${new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(params.value)}`;
      },
    },
    series: [
      {
        name: "Precio por empaque de producto comercial en pesos argentinos",
        data: valCom,
        type: "bar",
        color: colorBar,
        itemStyle:{
          color: function (params: any) {

            if(comercialSelected && comercialSelected !== '' && comercialSelected === params.name && catCom.length > 1){
              return colorBarSelected;
            } else {
              return colorBar;
            }
            
          }
        }
      },
    ],
  };

  return lasChartOptions3;
};
