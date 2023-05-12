import React from 'react';
import { stocks } from '../Data';
import { useParams } from 'react-router';


const StockDetail = (props) => {
  const { symbol } = useParams();
  console.log(stocks); 
  console.log(symbol);

  const stock = stocks.find((item) => item.symbol === symbol);

  if (!stock) {
    return <div>Stock not found.</div>;
  }

  return (

    <div>
      <h2>{stock.name}</h2>
      <p>Last Price: {stock.lastPrice}</p>
      <p>Change: {stock.change}</p>
      <p>High: {stock.high}</p>
      <p>Low: {stock.low}</p>
      <p>Open: {stock.open}</p>
    </div>
  );
};

export default StockDetail;
