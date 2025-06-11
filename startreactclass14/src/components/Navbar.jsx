import { NavLink } from 'react-router-dom';
import './Style.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">MyApp</div>
            <ul className="nav-links">
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/card"><li>My Card</li></NavLink>
            </ul>
        </nav>
    );
}

export default Navbar;
