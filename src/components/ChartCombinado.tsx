"use client";

import ReactECharts from "echarts-for-react";
import { MedicamentosData } from "@/interfaces/medicamentos";

export function ChartCombinado(opts: {}) {
  return (
    <ReactECharts
      option={opts}
      style={{
        height: "500px",
        width: "100%",
        padding: "30px",
        margin: "30px",
      }}
    />
  );
}

export function getChartOptions(meds: MedicamentosData) {
  //    const [chartOptions, setChartOptios] = useState({});

  const catCom: string[] = meds.data.nnes.map((med) => med.comercial);

  const valCom: number[] = meds.data.nnes.map((med) => med.precpubuni);

  const valItalyCalc: number = Math.round(Math.min(...valCom) * 0.7);

  const valItaly: number[] = meds.data.nnes.map((med) => valItalyCalc);

  const generic: string = meds.data.nnes[0].nne_desc;


  const lasChartOptions: {} = {
    title: {
        text: "Comparativo de precios de medicamentos comerciales",
        subtext: generic
    },
    legend: {
      show: true,
      // Try 'horizontal'
      orient: "horizontal",
      right: "center",
      top: "top",
    },
    tooltip: {
      show: true,
    },
    xAxis: {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        hideOverlap: false,
        interval: 0,
        width: 100,
        overflow: "break",
        margin: 15,
        rotate: 45,
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
      formatter: function (params: { value: number }) {
        return `$${params.value}`;
      },
    },
    series: [
      {
        // data: [120, 200, 150, 80, 70, 110, 130],
        data: valItaly,
        type: "line",
        name: "Valor en Italia",
        label: {
            show: false
        },
      },
      {
        name: "Valor en Argentina",
        // data: [170, 100, 350, 280, 170, 10, 230],
        data: valCom,
        type: "bar",
      },
    ],
  };

  return lasChartOptions;
}
