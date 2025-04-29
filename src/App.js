import React, { useState } from "react";
import CreateTrade from "./components/CreateTrade";
import ViewTrades from "./components/ViewTrades";
import ViewLots from "./components/ViewLots";
import StockSummary from "./components/StockSummary";

const App = () => {
  const [tab, setTab] = useState("create");

  return (
    <div className="container">
      <h1>📈 Stock Trading Portal</h1>
      <div className="tabs">
        <button onClick={() => setTab("create")}>Create Trade</button>
        <button onClick={() => setTab("trades")}>View Trades</button>
        <button onClick={() => setTab("lots")}>View Lots</button>
        <button onClick={() => setTab("summary")}>Stock Summary</button>
      </div>

      <div className="tab-content">
        {tab === "create" && <CreateTrade />}
        {tab === "trades" && <ViewTrades />}
        {tab === "lots" && <ViewLots />}
        {tab === "summary" && <StockSummary />}
      </div>
    </div>
  );
};

export default App;
