import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
<>
        <nav className="navbar">
            <label id='label'>SONIC</label>
            <ul className="nav-Links">
                <NavLink to="/" className="navig"><u>Home</u></NavLink>
                <NavLink to="about" className="navig"><u>About us</u></ NavLink>
                <NavLink to="/signin" className="navig"><u>Login</u></NavLink>
            </ul>
        </nav>
        <hr/>
        </>
    )
}
export default Navbar;
