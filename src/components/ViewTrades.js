import React, { useEffect, useState } from "react";
import axios from "axios";
import { getTrades } from "../api";

const ViewTrades = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    getTrades().then((res) => setTrades(res.data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Stock</th>
          <th>Type</th>
          <th>Quantity</th>
          <th>Broker</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {trades.map((t) => (
          <tr key={t._id}>
            <td>{t.stock_name}</td>
            <td>{t.trade_type}</td>
            <td>{t.quantity}</td>
            <td>{t.broker_name}</td>
            <td>{t.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ViewTrades;
