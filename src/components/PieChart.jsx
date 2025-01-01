import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ resultData }) {
  if (resultData.length === 0) {
    return <p>No data available to display the chart.</p>;
  }

  // Calculate Starting Amount, Total Contributions, and Total Interest
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  const totalContributions = resultData.reduce(
    (sum, yearData) => sum + yearData.annualInvestment,
    0
  );

  const totalInterest = resultData.reduce(
    (sum, yearData) => sum + yearData.interest,
    0
  );
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#FFFFFF", // Set legend text color to white
          font: {
            size: 11, // Optional: Adjust font size
          },
        },
      },
    },
  };

  // Data for the Pie Chart
  const data = {
    labels: ["Starting Amount", "Total Contributions", "Total Interest"],
    datasets: [
      {
        data: [initialInvestment, totalContributions, totalInterest],
        backgroundColor: ["#166a4a", "#83e6c0", "#ccff99"],
        hoverBackgroundColor: ["#166a4a", "#83e6c0", "#ccff99"],
      },
    ],
  };

  return (
    <div id="pie-chart-container">
      <Pie data={data} options={options} />
    </div>
  );
}
