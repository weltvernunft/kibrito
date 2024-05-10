import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Продукты",
  "ID заказа",
  "Дата",
  "Имя покупателя",
  "Стасус",
  "Количество",
  "Действие",
];

const TABLE_DATA = [
  {
    id: 100,
    name: "Пицца Маргарита",
    order_id: 11232,
    date: "29 июня 2022",
    customer: "Михаил",
    status: "доставлено",
    amount: 15,
  },
  {
    id: 101,
    name: "Куриный Бирьяни",
    order_id: 11233,
    date: "29 июня 2022",
    customer: "Светлана Петрова",
    status: "в ожидании",
    amount: 12,
  },
  {
    id: 102,
    name: "Чизбургер",
    order_id: 11234,
    date: "29 июня 2022",
    customer: "Алексей Сидоров",
    status: "отменено",
    amount: 8,
  },
  {
    id: 103,
    name: "Суши Платтер",
    order_id: 11235,
    date: "29 июня 2022",
    customer: "Екатерина Иванова",
    status: "доставлено",
    amount: 25,
  },
  {
    id: 104,
    name: "Спагетти Карбонара",
    order_id: 11236,
    date: "29 июня 2022",
    customer: "Михаил Кузнецов",
    status: "доставлено",
    amount: 18,
  },
  {
    id: 105,
    name: "Овощное Жаркое",
    order_id: 11237,
    date: "29 июня 2022",
    customer: "Анна Михайлова",
    status: "доставлено",
    amount: 14,
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table overflow-hidden">
      <div className="data-table-info">
        <h4 className="data-table-title font-bold">Последние заказы</h4>
      </div>
      <div className="data-table-diagram min-w-full">
        <table className="">
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody className="">
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.order_id}</td>
                  <td>{dataItem.date}</td>
                  <td>{dataItem.customer}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}
                      ></span>
                      <span className="dt-status-text">{dataItem.status}</span>
                    </div>
                  </td>
                  <td>${dataItem.amount.toFixed(2)}</td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
