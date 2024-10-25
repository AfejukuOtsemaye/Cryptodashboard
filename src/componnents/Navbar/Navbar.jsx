import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import { CoinContext } from '../../context/CoinContext';


const Navbar = () => {
  const {setCurrency} = useContext(CoinContext)

  const handleCurrency = (e)=>{
    switch(e.target.value){
      case "usd":{
        setCurrency({name: "usd",symbol: "$"});
        break;
      }
      case "eur":{
        setCurrency({name: "eur",symbol: "¤"});
        break;
      }
      case "inr":{
        setCurrency({name: "inr",symbol: ""});
        break;
      }
      default:{
        setCurrency({name: "usd",symbol: "$"});
        break;
      }
    }

  }
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>pricing</li>
      </ul>
      <div className='navRight'>
        <select onChange={handleCurrency}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
        </select>
        <button>Dark Mode</button>
      </div>
    </div>
  )
}

export default Navbar
