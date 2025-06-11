import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import MyCard from "./pages/MyCard";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
export const ContextApi = createContext();


function App() {
  const [data, setData] = useState([])
  const [cardData, setMyCardData] = useState([])
  const url = "https://jsonplaceholder.typicode.com/users";
  async function FetchData() {
    const response = await fetch(url);
    const finalAns = await response.json();
    // console.log("Api se ans", finalAns)
    setData(finalAns)

  }


  useEffect(() => {
    FetchData()
  }, [])



  function addToCardItem(data) {
    console.log("ye btn click hone par aa rha hai", data)
    // setMyCardData(data);// this is bad way kuoki last vala data hat ja rha hai jisme click kar rhe only vo aa rha hai
    // const isCardAlredyInMyCard = cardData.some((item) => item?.id === data.id);
    const isCardAlredyInMyCard = cardData?.some((item) => item?.id === data?.id);

    if (isCardAlredyInMyCard) {
      alert("me pahle se mycard me hu ")
      return;
    }

    // setMyCardData((prevData) => {
    //   return [...prevData, { ...data, count: 1 }]
    // })

    setMyCardData((prevData) => [...prevData, { ...data, count: 1 }]);
  }

  function removeFromCard(data) {
    console.log("remove from card", data)
    const filterArray = cardData?.filter((item) => item?.id !== data?.id)
    setMyCardData(filterArray)
  }


  function increMent(id) {

    let ans = cardData?.map((item) => {
      if (item.id === id) {
        item.count++;
      }
      return item
    })
    setMyCardData(ans);


    // setMyCardData((prev) => {
    //   prev.map((item) =>
    //     item.id === id ? { ...item, count: item.count + 1 } : item
    //   )
    // })



  }
  function decreMent(id) {
    console.log("decre", id)
    const isThisItemInCard = cardData?.find((item) => item.id === id);

    if (isThisItemInCard.count === 1) {
      removeFromCard(isThisItemInCard)
      return
    }

    const filterMyCardItem = cardData?.map((item) => {
      if (item.id === id) {
        item.count = item.count - 1;
      }
      return item;
    })

    setMyCardData(filterMyCardItem)


  }

  const user = {
    data,
    cardData,
    setMyCardData,
    addToCardItem,
    removeFromCard,
    increMent,
    decreMent

  }
  // console.log("myCard page me kuch nhi hai", cardData)

  return (
    <>
      <ContextApi.Provider value={user}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<MyCard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ContextApi.Provider>


    </>
  );
}

export default App;
