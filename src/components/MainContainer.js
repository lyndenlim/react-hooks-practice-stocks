import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])
  const [category, setCategory] = useState("Tech")
  const [isClicked, setIsClicked] = useState("")


  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(res => res.json())
      .then(data => setStocks(data))
  }, [])

  const filteredStocks = stocks.filter(stock => category === stock.type)

  if (isClicked === "Alphabetically") {
    filteredStocks.sort((a, b) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    })
  } else if (isClicked === "Price") {
    filteredStocks.sort((a, b) => a.price - b.price)
  }

  const stockList = filteredStocks.map(stock => {
    return <StockContainer key={stock.id} stock={stock} handleClickedStock={handleClickedStock} />
  })

  function handleClickedStock(stock) {
    const findDups = portfolioStocks.find(portfolioStock => stock.id === portfolioStock.id)
    if (!findDups) {
      setPortfolioStocks([...portfolioStocks, stock])
    }
  }

  function handleRemoveStock(stock) {
    const deletedStock = portfolioStocks.filter(portfolioStock => stock.id !== portfolioStock.id)
    setPortfolioStocks(deletedStock)
  }



  return (
    <div>
      <SearchBar category={category} setCategory={setCategory} isClicked={isClicked} setIsClicked={setIsClicked} />
      <div className="row">
        <div className="col-8">
          <h2>Stocks</h2>
          {stockList}
        </div>
        <div className="col-4">
          <h2>My Portfolio</h2>
          <PortfolioContainer portfolioStocks={portfolioStocks} handleRemoveStock={handleRemoveStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
