import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioStocks, handleRemoveStock}) {
  console.log(portfolioStocks)
  const portfolioList = portfolioStocks.map(portfolio => {
    return <Stock key={portfolio.id} stock={portfolio} handleStock={handleRemoveStock} />
  })

  return (
    <div>
      {portfolioList}
    </div>
  );
}

export default PortfolioContainer;
