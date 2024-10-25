import React, { useContext, useEffect, useState } from 'react'
import './Home.css';
import { CoinContext } from '../../context/CoinContext';

const Home = () => {
  const {allCoins, currency} = useContext(CoinContext);
  const [coinsDisplay, setCoinsDisplay] = useState([]);
  const [inputs, setInputs] = useState("");

  const handleInputs = (event)=>{
    setInputs(event.target.value);
    if(event.target.value === ""){
      setCoinsDisplay(allCoins)
    }
  }

  const handleSearch = async (event) => {
    event.preventDefault();
    const coins = await allCoins.filter((item)=>{
      return item.name.toLowercase().includes(inputs.toLowerCase())
    })
    setCoinsDisplay(coins);
  }

  useEffect(()=>{
    setCoinsDisplay(allCoins);
  },[allCoins])
  return (
    <div className='home'>
      <div className="hero">
      <h1>Largest <br/> Crypto MarketPlace</h1>
      <p>
        Welcome to Crypto MarketPlace. Sign Up to explore more about the crypto World
      </p>
      <form onSubmit={handleSearch}>
        <input onChange={handleInputs} value={inputs} type="text" placeholder='Search Crypto... ' required/>
        <button type='submit'>Search</button>
      </form>
      </div>

      <div className='cryptoDisplay'>
        <div className="cryptolayout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24H Change</p>
          <p className='marketGap'>Market Gap</p>
        </div>
        {coinsDisplay.slice(0,10).map((item, index)=>(
          <div className="cryptolayout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt="" />
              <p>{item.name + " - " + item.symbol}</p>
            </div>
            <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
            <p className={item.price_change_percentage_24h > 0 ? 'green' : 'red'}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
            <p className='marketGap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
          </div>
        ))}
      </div>
    
    </div>
  )
}

export default Home
