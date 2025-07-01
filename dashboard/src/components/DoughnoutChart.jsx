import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

 function DoughnutChart({ data }) {
  return (
    <div style={{ maxWidth: '300px', margin: 'auto' }}>
      <Doughnut data={data} />
    </div>
  );
}

export default DoughnutChart;
