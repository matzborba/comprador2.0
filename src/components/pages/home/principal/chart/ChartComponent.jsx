import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import styles from "./ChartComponent.module.css";

function ChartComponent() {
  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
  );

  const labels = [
    "09/09",
    "10/09",
    "11/09",
    "12/09",
    "13/09",
    "14/09",
    "15/09",
    "16/09",
    "17/09",
    "18/09",
    "19/09",
  ];

  const data = {
    labels,
    datasets: [
      {
        type: "bar",
        backgroundColor: "#46C569",
        label: "",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 80 })),
      },
      {
        type: "bar",
        label: "Comprador",
        backgroundColor: "#E93842",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 80 })),
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "line",
        label: "Escala",
        borderColor: "#52AFE3",
        borderWidth: 2,
        fill: false,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 80 })),
        tension: 0.5,
      },
      {
        type: "line",
        label: "Meta",
        borderColor: "#61646B",
        borderWidth: 2,
        fill: false,
        data: labels.map(() => 40),
        tension: 0.5,
        active: true,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        align: "end",
        labels: { usePointStyle: true },
      },
      tooltip: {
        titleColor: "#6C757D",
        bodyColor: "#6C757D",
        bodyFont: { size: 14 },
        backgroundColor: "#fff",
        titleFont: { weight: "600", size: 14 },
        usePointStyle: true,
        boxPadding: 2,
      },
    },
    layout: {
      autopadding: false,
    },
  };

  return (
    <div className={styles.chart_container}>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
}

export { ChartComponent };
