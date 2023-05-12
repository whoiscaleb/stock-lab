import React from 'react';
import { Link } from 'react-router-dom';
import { stocks } from '../Data';

const Stock = () => {
  return (
    <div>
      {stocks.map((stock) => (
        <Link key={stock.id} to={`/stocks/${stock.symbol}`}>
          <div>{stock.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Stock;