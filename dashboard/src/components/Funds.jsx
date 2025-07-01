import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Funds.css"



const Funds = () => {
  const [balance, setBalance] = useState(5000);
  const [usedMargin, setUsedMargin] = useState(0);
  const [payin, setPayin] = useState(0);

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

  const handleAddFunds = async () => {
    const amount = prompt("Enter amount to add:");
    if (!amount || isNaN(amount) || amount <= 0) return alert("Invalid amount");

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/funds/add`,
        { amount },
        { withCredentials: true }
      );
      setPayin(payin + Number(amount));
      fetchBalance();
      alert("Funds added!");
    } catch (err) {
      alert("Failed to add funds");
    }
  };

  const handleWithdrawFunds = async () => {
    const amount = prompt("Enter amount to withdraw:");
    if (!amount || isNaN(amount) || amount <= 0) return alert("Invalid amount");

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/funds/withdraw`,
        { amount },
        { withCredentials: true }
      );
      setUsedMargin(usedMargin + Number(amount));
      fetchBalance();
      alert("Withdrawal successful!");
    } catch (err) {
      alert("Withdrawal failed");
    }
  };

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <button className="btn btn-green" onClick={handleAddFunds}>
          Add funds
        </button>
        <button className="btn btn-blue" onClick={handleWithdrawFunds}>
          Withdraw
        </button>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{(balance - usedMargin).toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">{usedMargin.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{(balance - usedMargin).toFixed(2)}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>{balance.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Opening Balance</p>
              <p>{(balance - payin).toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>{payin.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Funds;
