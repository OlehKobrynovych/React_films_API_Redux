import { Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Navbarr() {
    return ( 
        <Navbar bg="dark" variant="dark">

        <ul className="nav nav-pills" >
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">About Persone</NavLink>
            </li>
            <li className="nav-item">
                {/* <NavLink className="nav-link" to="/user:id">User</NavLink> */}
            </li>
        </ul>
        </Navbar>
     );
}

export default Navbarr;