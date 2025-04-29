import React, { useEffect, useState } from "react";
import axios from "axios";
import { getLots } from "../api"

const ViewLots = () => {
  const [lots, setLots] = useState([]);

  useEffect(() => {
    getLots().then(res => setLots(res.data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Stock</th>
          <th>Quantity</th>
          <th>Realized</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {lots.map(lot => (
          <tr key={lot._id}>
            <td>{lot.stock_name}</td>
            <td>{lot.lot_quantity}</td>
            <td>{lot.realized_quantity}</td>
            <td>{lot.lot_status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ViewLots;
