import Nav from "./Nav.css"
import { NavLink } from "react-router-dom"
function Navbar() {
  return (
    <div>
      <div className="container">
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
        <NavLink to="/login"><li>Login</li></NavLink>
        <NavLink to="/signup"><li>Signup</li></NavLink>
      </div>
    </div>
  )
}

export default Navbar
