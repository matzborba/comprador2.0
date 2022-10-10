import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import styles from "./SlaughterChart.module.css";

function SlaughterChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
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
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Abates",
        data: labels.map(() => faker.datatype.number({ min: 100, max: 200 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.5,
      },
    ],
  };
  return (
    <div className={styles.chart_container}>
      <Line options={options} data={data} />
    </div>
  );
}
export { SlaughterChart };
