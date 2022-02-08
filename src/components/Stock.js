import React from "react";

function Stock({stock, handleStock}) {


  function handleClick() {
    handleStock(stock)
  }

  return (
    <div>
      <div onClick={handleClick} style={{borderStyle:"solid"}} className="card">
        <div className="card-body">
          <h2 className="card-title">{stock.name}</h2>
          <h4 className="card-text">{stock.ticker}: {stock.price}</h4>
        </div>
      </div>
    </div>
  );
}
export default Stock;
