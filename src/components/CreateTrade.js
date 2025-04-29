import React, { useState } from "react";
import { createTrade } from "../api";

const CreateTrade = () => {
  const [form, setForm] = useState({
    stock_name: "",
    trade_type: "CREDIT",
    quantity: "",
    broker_name: "",
    price: "",
    sale_type: "fifo"
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await createTrade(form);
      alert("Trade Created ✅");
    } catch (err) {
      alert("Error: " + err.response?.data?.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Create Trade</h2>
      <form onSubmit={handleSubmit} className="trade-form">
        <label>
          Stock Name:
          <input
            type="text"
            name="stock_name"
            value={form.stock_name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Trade Type:
          <select name="trade_type" value={form.trade_type} onChange={handleChange}>
            <option value="CREDIT">CREDIT (Buy)</option>
            <option value="DEBIT">DEBIT (Sell)</option>
          </select>
        </label>

        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Broker Name:
          <input
            type="text"
            name="broker_name"
            value={form.broker_name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Method (for DEBIT):
          <select name="sale_type" value={form.sale_type} onChange={handleChange}>
            <option value="fifo">FIFO</option>
            <option value="lifo">LIFO</option>
          </select>
        </label>

        <button type="submit">Submit Trade</button>
      </form>
    </div>
  );
};

export default CreateTrade;
