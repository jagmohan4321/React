import { createContext } from "react";

import Goutam from "./components/Goutam";
import Prashant from "./components/Prashant";


// mene context bna deaya hai 
export const sirGContext = createContext();
const guidedBy = "Jagmohan"
const arr = [2, 5, 78, 65];
function printOrganizationName() {
  console.log("we are in same ORG")
}
const user = {
  name: "Jagmohan Rai",
  mobile: "99999999999",
  printOrganizationName,
  guidedBy,
  arr

}
function App() {

  // aapne apne variable,object, function sabho ko aapne define kar deaya hai


  return (

    <div>
      {/*  step 2 aapne sabhi ko mount context ke andar  */}
      {/*  step 3 me aapne provider lagakar ke value pass kar deaya taki jo compo
      component use karna chahta hai us value direct use kar le  */}
      <sirGContext.Provider value={user}>
        <Goutam />
        <Prashant />
      </sirGContext.Provider>



    </div>
    // <div className="App">
    //   <Ritika data={guidedBy}/>
    // </div>
  );
}

export default App;

// agar aapne koi context ya variable ko function andar banaya hai to use aap function 
// hee export kar paege ye syntex hai
// export{sirGContext};



