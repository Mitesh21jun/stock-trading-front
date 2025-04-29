import React, { useEffect, useState } from "react";
import axios from "axios";
import { getSummary } from "../api";

const StockSummary = () => {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    getSummary().then((res) => setSummary(res.data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Stock</th>
          <th>Credit Qty</th>
          <th>Debit Qty</th>
          <th>Net Qty</th>
          <th>Available Qty</th>
        </tr>
      </thead>
      <tbody>
        {summary.map((s) => (
          <tr key={s.stock_name}>
            <td>{s.stock_name}</td>
            <td>{s.total_quantity_credit}</td>
            <td>{s.total_quantity_debit}</td>
            <td>{s.net_quantity}</td>
            <td>{s.total_available_quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockSummary;
