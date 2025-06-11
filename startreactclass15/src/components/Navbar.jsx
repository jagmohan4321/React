import React from 'react'
import { NavLink } from 'react-router-dom'
import Style from "./Style.css"
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <NavLink to="/" className="nav-link ">
          <li>Home</li>
        </NavLink>
        <NavLink to="/card" className="nav-link ">
          <li>My Card</li>
        </NavLink>
      </ul>
    </nav>



  )
}

export default Navbar
