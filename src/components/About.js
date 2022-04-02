import { useSelector } from "react-redux";

function About() {
    const users = useSelector(state => state.users_reducer.users);
    const currentUsersId = useSelector(state => state.users_reducer.currentUsersId);
    
    return ( 
        <div>
        {
            users.filter(el=>currentUsersId.includes(el.id)).map(ell=>(
                <div key={ell.id}>{ell.id}</div>
            ))
        
        }
        </div> );
}

export default About;