import { Routes, Route } from "react-router-dom";
import About from "./components/About.jsx"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<><p>Page not found</p></>}></Route>
      </Routes>

    </div>
  );
}

export default App;
