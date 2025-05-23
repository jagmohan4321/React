import { useEffect, useState } from "react";
import PrintData from "./components/PrintData";


function App() {
  //useEffect() hook-: Its a hook which is used to perfrom side effect in functional components.
  //side effect - Asynchronous Task that means API calling , if i want to perfrom any operation after the component render

  // useEffect hook -: It takes two parameters-> 
  // 1)callback function-> inside this function you write your side effect code 
  // 2)dependencies array [] -> when i change the value of dependency array parameter that tine what ever code you wrote inside
  // callback function that excute. and dependency array is optional.





  // useEffect jo hota hai -> 4 Cases hote hai


  //1st case // i am  not taking 2nd parameter that means dependency.->
  //  Your useeffect callback logic excute on every render


  // example
  const [num, setNumber] = useState(1);
  const [data, setData] = useState(null);
  // const apiUrl = "https://jsonplaceholder.typicode.com/posts/1"
  // async function getData() {
  //   try {
  //     const ans = await fetch(apiUrl);
  //     const finalAns = await ans.json();
  //     console.log("this data is coming from api", finalAns)
  //     setData(finalAns)
  //   }
  //   catch (error) {
  //     console.log("I am getting this error", error)
  //   }

  // }


  // // 1st case you are not giving dependency callback logic excute continuously 
  // useEffect(() => {
  //   getData()
  // })



  // 2nd case pass the dependency array as a empty []= jab ka component pahli bar render hoga usi time me mera callback
  // ke andar jo code likha hai vo excute ho jayega 
  // useEffect(() => {
  //   getData()
  // }, [])


  // this function is used in 3rd case 
  const apiUrl1 = `https://jsonplaceholder.typicode.com/posts/${num}`
  async function getData1() {
    try {
      const ans = await fetch(apiUrl1);
      const finalAns = await ans.json();
      console.log("this data is coming from api", finalAns)
      setData(finalAns)
    }
    catch (error) {
      console.log("I am getting this error", error)
    }

  }

  // 3rd variety -> dependency array ko andar varible pass kar rha hu agar ne en variable kee value ko change karunga 
  // jo bhi code aapka callback andar likha hoga vo excutre ho jayega 

  // useEffect(() => {
  //   getData1()
  // }, [num])


  //4th variety when you want to delete the current code and load the next code that timw we use this variety
  useEffect(() => {
    const reloadCom = new AbortController();
    getData1()
    return () => {
      reloadCom.abort();
    }
  }, [num])

  return (
    <div className="App">
      <h1>hey</h1>
      <PrintData data={data} num={num} setNumber={setNumber} />
    </div>
  );
}

export default App;
