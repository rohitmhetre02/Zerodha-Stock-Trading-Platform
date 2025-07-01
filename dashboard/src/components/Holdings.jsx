import React, { useEffect, useState } from "react";
import axios from "axios";
import VerticalGraph from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/allHoldings`)
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
      });
  }, []);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price), 
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="main">
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
  {allHoldings.map((stock, index) => {
    const qty = stock.qty || 0;
    const avg = stock.avg || 0;
    const price = stock.price || 0;
    const curValue = price * qty;
    const isProfit = curValue - avg * qty >= 0.0;
    const profitClass = isProfit ? "profit" : "loss";
    const dayClass = stock.isLoss ? "loss" : "profit";

    return (
      <tr key={index}>
        <td>{stock.name || "N/A"}</td>
        <td>{qty}</td>
        <td>{avg.toFixed(2)}</td>
        <td>{price.toFixed(2)}</td>
        <td>{curValue.toFixed(2)}</td>
        <td className={profitClass}>
          {(curValue - avg * qty).toFixed(2)}
        </td>
        <td className={profitClass}>{stock.net || "-"}</td>
        <td className={dayClass}>{stock.day || "-"}</td>
      </tr>
    );
  })}
</tbody>

        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </div>
  );
};

export default Holdings;
