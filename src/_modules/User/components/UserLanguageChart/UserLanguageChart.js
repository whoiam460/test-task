import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import clsx from "clsx";
import { Title } from "@/_components";

ChartJS.register(ArcElement, Tooltip, Legend);

const LanguageChart = ({ languageData, className }) => {
  const wrapperClasses = clsx("p-4 w-auto bg-white rounded-xl", className);
  const data = {
    labels: languageData.map(({ language }) => language),
    datasets: [
      {
        data: languageData.map(({ percentage }) => percentage),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  return (
    <div className={wrapperClasses}>
      {/* <Title level={3}>Використовувані мови програмування:</Title> */}
      {/* <div style={{ width: "60%", height: "300px" }}> */}
      <Pie data={data} />
      {/* </div> */}
    </div>
  );
};

export default LanguageChart;
