import React, { useContext, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaArrowUpLong } from "react-icons/fa6";
import { DARK_THEME, LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.scss";

const AreaBarChart = ({ data, onPeriodChange, period }) => {
  const totalRevenue = data.reduce((total, item) => total + item.доход, 0).toLocaleString('en-US');

  const { theme } = useContext(ThemeContext);

  const formatTooltipValue = (value) => {
    return `${value}k`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}k`;
  };

  const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  return (
    <div className="bar-chart">
      <div className="period-buttons flex justify-end gap-4 font-semibold">
        <button
          className={period === "today" ? "text-primary" : (theme === DARK_THEME ? "text-white" : "")}
          onClick={() => onPeriodChange("today")}
        >
          Сегодня
        </button>
        <button
          className={period === "week" ? "text-primary" : (theme === DARK_THEME ? "text-white" : "")}
          onClick={() => onPeriodChange("week")}
        >
          За неделю
        </button>
        <button
          className={period === "month" ? "text-primary" : (theme === DARK_THEME ? "text-white" : "")}
          onClick={() => onPeriodChange("month")}
        >
          За месяц
        </button>
      </div>
      <div className="bar-chart-info">
        <h5 className="bar-chart-title">Общий доход</h5>
        <div className="chart-info-data">
          <div className="info-data-value">${totalRevenue}</div>
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis
              padding={{ left: 10 }}
              dataKey={Object.keys(data[0])[0]}
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                fontSize: 14,
              }}
            />
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="доход"
              fill="#475be8"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChart;
