// import Demo1 from "./components/Demo.js";
// import Demo from "./components/Demo.js";
// import { Demo11 } from "./components/Demo.js";

import NameUser from "./components/NameUser.jsx"
import LastName from "./components/LastName.jsx";
function App() {

  //props drilling -> passing the data from one component to another component.
  const userName = "Goutam";
  let lastName = "Modi";
  return (
    <div className="App">
      this is a app file
      {/* <Demo1/>
      <Demo11/> */}
      {/* <Demo/> */}

      <NameUser NAME={userName}
       LASTNAME={lastName} />
       <LastName />

    </div>
  );
}

export default App;
