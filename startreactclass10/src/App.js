import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./componets/PageNotFound.jsx";
import Home from "./componets/Home.jsx"
import MyCard from "./componets/MyCard.jsx"
import Navbar from "./componets/Navbar.jsx";


function App() {
  const url = "https://mxpertztestapi.onrender.com/api/sciencefiction";
  const [myCardData, setMycardData] = useState([])
  const userIffo = {
    uName: "anc",
    company: "Boaty"
  }

  //Below lines use for set and get the data from the local storage
  // localStorage.setItem("meraLocaLsTORAGEvALAdATA",JSON.stringify(userIffo));
  // const fromLocalStorageValue=JSON.parse(localStorage.getItem('meraLocaLsTORAGEvALAdATA'));
  // console.log(fromLocalStorageValue)
  const [apiData, setApiData] = useState([])
  const [demo, setDemo] = useState([]);// eska use only ui me card dikhane ke leaye kar rha hu
  async function getDataFromApi() {
    try {
      const data = await fetch(url);
      const ans = await data.json();
      console.log(ans)

      setDemo(ans);

      if (ans.length !== 0) {
        for (let i = 0; i < 6; i++) {
          apiData.push(ans[i])
        }
      }
    }
    catch (e) {
      console.log("error is coming", e)
    }
  }

  useEffect(() => {
    getDataFromApi()
  }, [])

  return (
    <div className="App">
      <Navbar myCardData={myCardData} />
      <Routes>
        <Route path="/" element={<Home data={apiData} setMycardData={setMycardData} cardData={myCardData} />} />
        <Route path="/cart" element={<MyCard data={myCardData} setMycardData={setMycardData} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
