import React from "react";
import './Coin.css'
function Coin({ name, img, symbol, price, volumn, priceChange, marketCap }) {
  // console.log(name, img, symbol)
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={img} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volumn">${volumn.toLocaleString()}</p>
        </div>
        {priceChange < 0 ? (
          <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
        ) : (
          <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
        )}
        <p className="coin-marketcap">
          Mkt Cap: ${marketCap.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default Coin;
