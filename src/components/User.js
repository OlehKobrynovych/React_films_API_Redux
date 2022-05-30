import { useEffect } from "react";
// import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserThunk } from "../store/users_reducer";

function User() {
    const user = useSelector(state => state.users_reducer.user);
// debugger

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(getUserThunk(id));
    }, [id]);

    console.log('User');

    return ( 
        <div>
            {user?.id ? 
                <div className='m-3' >
                    <div className="d-flex justify-content-center" >
                        <img className='user__img' src={user.image} />
                    </div>
                    <div className="user__text">
                        <div>Name: '{user.name}'</div>    
                        <div>Gender: "{user.gender}"</div>    
                        <div>Status: "{user.status}"</div>    
                        <div>Species: "{user.species}"</div>    
                        <div>Type: "{user.type}"</div>
                        <div>
                            <div>location name: "{user.location.name}"</div>    
                            <div>location: "{user.location.url}"</div>    
                        </div>    
                        <div>
                            <div>origin name: "{user.origin.name}"</div>    
                            <div>origin: "{user.origin.url}"</div>    
                        </div>    
                        <div>Episode: {user.episode.map((el, index)=><div key={index}>{el}</div>)}</div>    
                    </div>
                </div>
            : 'Not user'}
        </div>
     );
}

export default User;