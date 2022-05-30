import { Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function Navbarr() {

    const currentUsersId = useSelector(state => state.users_reducer.currentUsersId);

    return ( 
        <Navbar bg="dark" variant="dark">

        <ul className="nav nav-pills" >
            <li className="nav-item mx-3">
                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
            </li>
            <li className="nav-item nav__about-tex mx-3">
                <NavLink className="nav-link" to="/about">About Persone
                {
                    currentUsersId.length === 0 ? null : <div className='nav__about-curent'>{currentUsersId.length}</div>
                }
                </NavLink>
            </li>
            <li className="nav-item mx-3">
                {/* <NavLink className="nav-link" to="/user:id">User</NavLink> */}
            </li>
        </ul>
        </Navbar>
     );
}

export default Navbarr;