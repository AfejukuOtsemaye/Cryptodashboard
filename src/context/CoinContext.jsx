import { createContext, useEffect, useState } from "react";



export const CoinContext = createContext(null);

const CoinContextProvider = (props)=>{
    const [allCoins, setAllCoins] = useState([]);
    const [currency, setCurrency] = useState({
       name: "usd",
       symbol: "$"
    })

    const fetchCoins = async()=>{
        const options ={
            method: 'Get',
            Headers: {
                accept: 'application/json',
          'x-cg-demo-api-key': '	CG-pHwsoBGwekUhWUZu66e8zLiM'
            }
        };
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
        .then(res => res.json())
        .then(res => setAllCoins(res))
        .catch(err => console.error(err));
       

    }
    useEffect (()=> {
        fetchCoins();
      }, [currency])

    const contextValue ={
       allCoins, currency, setCurrency
    }
    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}
export default CoinContextProvider;