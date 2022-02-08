import React from "react";
import Stock from "./Stock";

function StockContainer({stock, handleClickedStock}) {
  return (
    <div>
      <Stock key={stock.id} stock={stock} handleStock={handleClickedStock}/>
    </div>
  );
}

export default StockContainer;
