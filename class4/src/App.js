import { useState } from "react";
import { Card } from "./components/Card.jsx";
import { Card2 } from "./components/Card2";
import RitikaContent from "./components/RitikaContent.jsx";
import DipikaContent from "./components/DipikaContent.jsx";
function App() {
  // const status=false;
 const [result,setResult]=useState("pass");

 const [jayeshDikhaoContent,setJayeshDikhaoContent]=useState(true);

  return (
    <div className="App">

    {/* <p>current data in app <b>{result}</b></p>
    <Card2 result={result} setResult={setResult}/>
    <Card  result={result} setResult={setResult}/> */}


    <RitikaContent content={jayeshDikhaoContent} setContent={setJayeshDikhaoContent} />
    <br/>
    <DipikaContent content={!jayeshDikhaoContent} setContent={setJayeshDikhaoContent} />
   
    </div>
  );
}

export default App;
