import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../css/BuyActionWindow.css";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [balance, setBalance] = useState(0);
  const { closeSellWindow } = useContext(GeneralContext);

  const fetchBalance = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/funds/balance`, {
        withCredentials: true,
      });
      setBalance(res.data.balance);
    } catch (err) {
      console.error("Error fetching balance:", err);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  const handleSellClick = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/allHoldings/newOrder`,
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "SELL",
        },
        { withCredentials: true }
      );

      alert(res.data || " Sell order successful.");
      await fetchBalance(); 
      closeSellWindow();
    } catch (err) {
      console.error("Sell order failed:", err.response?.data || err.message);
      alert((err.response?.data || "Failed to place sell order."));
    }
  };

  const expectedCredit = stockQuantity * stockPrice;

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              min="0.01"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value))}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Expected credit ₹{expectedCredit.toFixed(2)}</span><br />
        <span>Your wallet balance: ₹{balance.toFixed(2)}</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>Sell</Link>
          <Link className="btn btn-grey" onClick={closeSellWindow}>Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
