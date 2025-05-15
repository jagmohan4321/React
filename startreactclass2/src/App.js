import { CityData } from "./utils.js/CityData";
import Card from "./components/Card";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MyCart from "./components/MyCart";
function App() {
  console.log("city data value inside card", CityData);
  const [addCart, setAddCart] = useState([]);

  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Card data={CityData} setAddCart={setAddCart} addCart={addCart} />} />
        <Route path="/cart" element={<MyCart addCart={addCart} />} />
      </Routes>



    </div>

  );
}

export default App;
