import { useState } from "react";
import AreaBarChart from "./AreaBarChart";
import AreaProgressChart from "./AreaProgressChart";
import {
  dayRevenueData,
  weekRevenueData,
  monthRevenueData,
} from "../../../assets/data";

const AreaCharts = () => {
  const [period, setPeriod] = useState("today");
  const [revenueData, setRevenueData] = useState(dayRevenueData); // Initial data for today

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
    switch (newPeriod) {
      case "today":
        setRevenueData(dayRevenueData);
        break;
      case "week":
        setRevenueData(weekRevenueData);
        break;
      case "month":
        setRevenueData(monthRevenueData);
        break;
      default:
        setRevenueData(dayRevenueData); // Default to today's data
        break;
    }
  };

  return (
    <section className="content-area-charts">
      <AreaBarChart
        data={revenueData} // Pass the appropriate revenue data based on the selected period
        onPeriodChange={handlePeriodChange}
        period={period}
      />
      <AreaProgressChart />
    </section>
  );
};

export default AreaCharts;
