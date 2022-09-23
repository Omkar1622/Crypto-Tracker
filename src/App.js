// Install axios and react icon Dependencies

// Go to path my-app and run =>
//  npm i react-router-dom@6



import React, {useState, useEffect} from "react";
import axios from 'axios';
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
import Coin from "./routes/Coin"


// BrowserRouter Already added in index.js Page to The Whole App
import { Routes, Route } from 'react-router-dom'



function App() {

  const [coins, setCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false';
  
  useEffect(() => {

    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data)

    }).catch((error) => {
      console.log(error)
    })

  }, [])

  return (
    <>
     <Navbar />

     <Routes>
        {/* For Home Page */}
        <Route path = '/' element = { <Coins coins = {coins} /> } />

        {/* For all The separate pages of Coin */}
        <Route path = '/coin' element = {<Coin />} >
            <Route path = ':coinId' element = {<Coin />} />
        </Route>

     </Routes>
     
    </>
  );
}

export default App;
