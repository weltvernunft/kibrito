import AreaCard from "./AreaCard";
import "./AreaCards.scss";
import {
  dayRevenueData,
  weekRevenueData,
  monthRevenueData,
} from "../../../assets/data";

const AreaCards = () => {
  const dayTotalRevenue = dayRevenueData
    .reduce((total, item) => total + item.доход, 0)
    .toLocaleString("en-US");
  const weekTotalRevenue = weekRevenueData
    .reduce((total, item) => total + item.доход, 0)
    .toLocaleString("en-US");
  const monthTotalRevenue = monthRevenueData
    .reduce((total, item) => total + item.доход, 0)
    .toLocaleString("en-US");

  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "Выручка за сегодня",
          value: `$ ${dayTotalRevenue}`,
          text: "Продано 67 продуктов.",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "Выручка за неделю",
          value: `$ ${weekTotalRevenue}`,
          text: "Продано 689 продуктов",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "Выручка за месяц",
          value: `$ ${monthTotalRevenue}`,
          text: "Продано 6,789 продуктов",
        }}
      />
    </section>
  );
};

export default AreaCards;
