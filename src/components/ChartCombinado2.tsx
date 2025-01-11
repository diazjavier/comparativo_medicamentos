"use client";

import ReactECharts from "echarts-for-react";
import { MedicamentosComparativoData, MedicamentosData } from "@/interfaces/medicamentos";

export function ChartCombinado2(opts: {}) {
  return (
    <ReactECharts
      option={opts}
      style={{
        height: "600px",
        width: "100%",
        padding: "30px",
        margin: "10px",
      }}
    />
  );
}

export function getChartOptions2(meds: MedicamentosComparativoData, comercialSelected: string) {
  //    const [chartOptions, setChartOptios] = useState({});

  const catCom: string[] = meds.data.meds.map((med) => {return med.nombrecomercial + " " + med.formapresentacion});

  const valCom: number[] = meds.data.meds.map((med) => {return med.ppu});

  const medsCode: string[] = meds.data.meds.map((med) => {return med.codigo1});

  // const valItalyCalc: number = Math.round(Math.min(...valCom) * 0.7);

  // const valItaly: number[] = meds.data.nnes.map((med) => valItalyCalc);

  const generic: string = meds.data.meds[0].droga_combo + " " + meds.data.meds[0].dosis + "mg" + " " + meds.data.meds[0].forma10; 


  const lasChartOptions: {} = {
    title: {
        text: "Comparativo de precios de medicamentos comerciales",
        subtext: generic,
        padding: 10,
        margin: 10
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
        // return `$${params.value}`;
          return `${params.marker}${params.name}<span style="float: right; margin-left: 20px"><b>${new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(params.value)}.-</b></span>`;
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
      },
      // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      data: catCom,
    },
    yAxis: {
      type: "value",
    },
    label: {
      show: true,
      position: "top",
      fontSize: 8,
      formatter: function (params: { value: number }) {
        return `${new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARS'}).format(params.value)}`;
      },
    },
    series: [
      // {
      //   // data: [120, 200, 150, 80, 70, 110, 130],
      //   data: valItaly,
      //   type: "line",
      //   name: "Valor en Italia",
      //   label: {
      //       show: false
      //   },
      // },
      {
        name: "Valor en Argentina",
        //data: [170, 100, 350, 280, 170, 10, 230],
        data: valCom,
        type: "bar",
        itemStyle:{
          color: function (params: any) {

            if(comercialSelected && comercialSelected !== '' && comercialSelected === params.name && catCom.length > 1){
              return "red";
            } else {
              return "blue";
            }
            
          }
        }
      },
    ],
  };

  return lasChartOptions;
}
