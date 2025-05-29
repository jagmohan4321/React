import { createContext, useState } from "react";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";

//step1 create context
export const MyContext = createContext();
function App() {
  // yha apne variable,state or function bna lo 
  // const [study, setStudy] = useState({ course: "B.tech" });
  const study="BE";
  
  return (
    <div className="App">
      {/* step2 Mount kar deaya child ko ,step-3 me value ke andar apne varibles ko pass kar do  */}
      <MyContext.Provider value={study}>
        <One />
        <Two />
        <Three />
      </MyContext.Provider>

    </div>
  );
}

export default App;
// export {MyContext};
