import { useState } from "react";
import PrintData from "./components/PrintData.jsx"
import CounterApp from "./components/CounterApp.jsx";
import Card from "./components/Card.jsx";
function App() {
  // hooks->its a predefine function which is used to perform certain action on the UI.
  // const obj={
  //   name:"syam",
  //   lastName:"Radhe",
  //   arr1:[6,890]
  // }

  // obj.name="manmohan"
  // console.log(obj);
  //  obj.arr1=[2,4,6,890];



  // const {name, setName} = useState({name:"mohan"});
  const [name, setName] = useState("Jagmohan")

  const [count, setCount] = useState(0);


  const students = [
    { name: "Ritika ", age: 23, id: 101 }, { name: "Dipika ", age: 21, id: 102 }, { name: "Prashan ", age: 22, id: 103 }
  ]
  return (
    <div className="App">
      <PrintData name={name} setName={setName} />
      <CounterApp count={count} setNumber={setCount} />
      {/* if i donot use map so we have to write  
      <Card student={students[0]} />
      <Card student={students[1]} />
      <Card student={students[2]} /> */}


      {/*  this the pro syntex if you have a single line code in map there is no need to write return *or use {} curly brackets   */}
      {
        students?.map((student, index) => <Card student={student} key={index} />)
      }

      {/* this is the normal syntex  */}
      {/* {
        students?.map((student, index) => {
          return (<Card student={student} key={index} />)
        }
        )
      } */}



    </div>
  );
}

export default App;
