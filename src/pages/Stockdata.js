import React from 'react';
import { stocks } from '../Data';



const Stock = (props) => {
  const stock = props.stockData.stocks.filter((stock) => {
    //if the stock symbol matches the parameter return true
    return (stock.symbol === props.match.params.symbol)
  })[0]
  return (
    <div>
      <h3>Name: {stock.name}</h3>
      <h3 className="price">Price: {stock.lastPrice}</h3>
    </div>
  )
}

export default Stock;
