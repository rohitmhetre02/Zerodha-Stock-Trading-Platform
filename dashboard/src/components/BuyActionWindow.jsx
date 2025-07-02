import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../css/BuyActionWindow.css";

import axios from "axios";
import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(100);
  const [balance, setBalance] = useState(0);
  const { closeBuyWindow } = useContext(GeneralContext);

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

  const handleBuyClick = async () => {
    const totalCost = Number(stockQuantity) * Number(stockPrice);

    if (totalCost > balance) {
      alert(" Insufficient funds in wallet.");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/orders/newOrder`,
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "BUY",
        },
        { withCredentials: true }
      );
      alert(res.data || "Order placed successfully!");
      await fetchBalance();
      closeBuyWindow();
    } catch (err) {
      console.error("Order failed:", err);
      alert(" Failed to place order.");
    }
  };

  const marginRequired = Number(stockQuantity) * Number(stockPrice);

  return (
    <div className="container" id="buy-window" draggable="true">
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
              step="0.01"
              value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value))} 
            />
          </fieldset>
        </div>
      </div>
      <div className="buttons">
        <span>Margin required ₹{marginRequired.toFixed(2)}</span>
        <br />
        <span>Your wallet balance: ₹{balance.toFixed(2)}</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link className="btn btn-grey" onClick={closeBuyWindow}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
