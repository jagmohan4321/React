import { CityData } from "./utils.js/CityData.js"
import Card from "./components/Card.jsx";
import { Routes, Route, Link } from "react-router-dom";
import CardItemData from "./components/CardItemsData.jsx"
import { useState } from "react";
function App() {
const [cardData,setCardData]=useState([]);

  return (

    <div className="App">
      <Routes>

        <Route path="/" element={<Card CityData={CityData} setCardData={setCardData} />} />
        <Route path="/card" element={<CardItemData cardData={cardData} />} />

      </Routes>
    </div>

  );
}

export default App;
