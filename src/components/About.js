import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRemoveCurrentUsers_ActionCreater } from "../store/users_reducer";

function About() {
    const users = useSelector(state => state.users_reducer.users);
    const currentUsersId = useSelector(state => state.users_reducer.currentUsersId);
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const handleClick = (id) => {
        navigate(`/user/${id}`);
    };
    
    const delitHerov = (id) => {
        dispatch(setRemoveCurrentUsers_ActionCreater(id));
    };
    
    return ( 
        <div className="about-wrap">
        {
            currentUsersId.length === 0 ? <div className="m-3"><h3>Favorite hero not selected</h3></div>
             : <div>
                    <h3 className="about__favorite-title">You have {currentUsersId.length} favorite heroes</h3> 
                    <div className="d-flex">
                        {users.filter(el=>currentUsersId.includes(el.id)).map(ell=>(
                            <div className="about__favoriteImg-wrap" key={ell.id}>
                                <img className="about__favoriteImg" src={ell.image} onClick={ e => handleClick(ell.id)} />
                                <div className="about__favorite-delit" onClick={ e =>delitHerov(ell.id)}>X</div>
                            </div>
                        ))}
                    </div>
                </div>
        
        }
        </div> );
}

export default About;