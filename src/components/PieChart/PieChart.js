import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map((asset) => asset.name),
    datasets: [
      {
        data: data.map((asset) => asset.value),
        backgroundColor: [
          "#F87171",
          "#60A5FA",
          "#34D399",
          "#FBBF24",
          "#A78BFA",
          "#EC4899",
          "#6EE7B7",
          "#FCD34D",
        ],
      },
    ],
  };

  return (
    <div className="w-full max-w-md">
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
