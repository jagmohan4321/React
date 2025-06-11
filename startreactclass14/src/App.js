import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import MyCard from "./pages/MyCard";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { createContext } from "react";

export const Mycontext = createContext();
function App() {

  const [data, setData] = useState([])
  const [cardData, setCardData] = useState([])





  async function api() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const ans = await res.json();
    setData(ans);
    console.log(data)
  }

  useEffect(() => {
    api();
  }, []);



  //Add to card

  function addToCard(data) {
    console.log("card", data)
    const isPresent = cardData?.some((item) => {
      return item.id === data.id
    })


    if (isPresent) {
      alert("item already in cart")
      return;
    }
    setCardData((prev) => {
      return [...prev, { ...data, count: 1 }]
    })


  }
  console.log("card array me data", cardData)



  function removeFromCard(id) {
    const modifyArray = cardData.filter((item) => {
      return item.id !== id
    })

    setCardData(modifyArray)

  }


  function increCount(data) {
    console.log("incre", data.count)
    setCardData((prev) => {
      prev.map((item) => item.id === data.id ? { ...item, count: item.count + 1 } : item)
    })
  }

  function decreCount(data) {
    console.log("decre", data)

    setCardData((prev) =>
      prev
        .map((item) =>
          item.id === data?.id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  }
  const info = { data, cardData, setData, setCardData, addToCard, removeFromCard, increCount, decreCount }
  return (
    <>
      <Mycontext.Provider value={info}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<MyCard />} />
        </Routes>

      </Mycontext.Provider>



    </>

  );
}

export default App;
