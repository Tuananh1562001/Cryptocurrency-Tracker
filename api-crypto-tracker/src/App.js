import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";
function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleChange = (e) => {
    // console.log(e)
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  // console.log(filteredCoins);
  return (
    <div className="App">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>

      {filteredCoins.map((item) => {
        return (
          <Coin
            key={item.id}
            name={item.name}
            img={item.image}
            symbol={item.symbol}
            price={item.current_price}
            volumn={item.market_cap}
          />
        );
      })}
    </div>
  );
}

export default App;
