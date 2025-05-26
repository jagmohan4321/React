import { NavLink } from "react-router-dom"
import style from "./style.css"
function Navbar({ myCardData }) {
  return (
    <div>
      <div className="container">
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/cart"><div><li>MyCard  <div>{myCardData?.length > 0 ? (<p>{myCardData.length}</p>) : ("")}</div></li>

        </div></NavLink>
      </div>
    </div>
  )
}

export default Navbar
