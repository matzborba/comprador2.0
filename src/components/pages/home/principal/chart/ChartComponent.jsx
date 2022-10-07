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
        type: "line",
        label: "Dataset 1",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 80 })),
        tension: 0.5,
      },
      {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: "rgb(75, 192, 192)",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 80 })),
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "Dataset 3",
        backgroundColor: "rgb(53, 162, 235)",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 80 })),
      },
      {
        type: "line",
        label: "Meta",
        borderColor: "#61646B",
        borderWidth: 2,
        fill: false,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 80 })),
        tension: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        align: "end",
        labels: { usePointStyle: true },
      },
    },
    scales: {},
  };

  return (
    <div className={styles.chart_container}>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
}

export { ChartComponent };
