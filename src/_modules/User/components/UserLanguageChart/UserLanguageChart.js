import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";

import { Card } from "@/_components";
import { Pie } from "react-chartjs-2";
import clsx from "clsx";

ChartJS.register(ArcElement, Tooltip, Legend);

const LanguageChart = ({ languageData, className }) => {
  const wrapperClasses = clsx("flex justify-center", className);

  const colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
  ];

  const labels = languageData.map(({ language }) => language);
  const languagesPercent = languageData.map(({ percentage }) =>
    percentage.toFixed(2)
  );

  const data = {
    labels: labels,
    datasets: [
      {
        data: languagesPercent,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };

  return (
    <Card className={wrapperClasses}>
      <Pie data={data} />
    </Card>
  );
};

export default LanguageChart;
