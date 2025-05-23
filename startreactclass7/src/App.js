import { useEffect, useState } from "react";
import ShowData from "./components/ShowData";

function App() {
  // let apiURL = "https://ipinfo.io/161.185.160.93/geo";

  const apiURL = "https://dog.ceo/api/breeds/image/random";


  const [data, setData] = useState();
  async function apiCall() {
    // by default we have fetch() function
    try {
      const ans = await fetch(apiURL);
      const apiAns = await ans.json();
      console.log("api se aaya hua data", apiAns)
      setData(apiAns)

    }
    catch (err) {
      console.log("did not get any o/p due to an error", err)
    }

  }

  // apiCall()// we are getting an object 
  useEffect(() => {
    apiCall();
  }, [])
  return (<div>
    <ShowData  data={data}/>
  </div>)
}

export default App;
