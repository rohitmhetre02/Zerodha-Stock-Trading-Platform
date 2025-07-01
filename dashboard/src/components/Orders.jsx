import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Orders.css"; 


const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/orders`, {
          withCredentials: true,
        });
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      }
    };

    fetchOrders();
  }, []);

  return (
   <div className="main">
      <h4 className="mb-4 fw-semibold">Orders ({orders.length})</h4>
      {orders.length === 0 ? (
        <div className="alert alert-warning text-center">No orders found.</div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg. Cost</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>₹{order.price.toFixed(2)}</td>
                  <td
                    className={`fw-semibold ${
                      String(order.mode).toUpperCase() === "BUY"
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {String(order.mode).toUpperCase()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
