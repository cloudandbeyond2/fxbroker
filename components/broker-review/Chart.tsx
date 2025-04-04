"use client";
import React from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const Chart = () => {
  const chartData: ApexOptions = {
    series: [
      {
        name: "Inflation",
        data: [10, 52, 200, 330, 385, 325, 215],
      },
    ],
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    colors: ["#0050DB"],
    xaxis: {
      categories: ["Global", "Fusion", "Oanda", "IC", "Pepperst", "Tickm", "FxPr"],
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tickAmount: 4,
      labels: {
        show: true,
      },
    },
  };
  return <ReactApexChart options={chartData} series={chartData.series} type="bar" width={"100%"} height={350} className="broker-compare-chart"></ReactApexChart>;
};

export default Chart;
