import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUsers_ActionCreater, setRemoveCurrentUsers_ActionCreater } from "../store/users_reducer";
import Dead from '../images/Dead.png'


const Users = React.memo(() => {
    const users = useSelector(state => state.users_reducer.users);
    const currentUsersId = useSelector(state => state.users_reducer.currentUsersId);
// debugger
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleClick = (e, id) => {
        navigate(`/user/${id}`);
    };
   
    const hendlerChange = (e, id) => {
        if (e.target.checked) {

            dispatch(setCurrentUsers_ActionCreater(id));
        } else {
            dispatch(setRemoveCurrentUsers_ActionCreater(id));
        }
    };

    console.log('Users');

    return ( 
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {users.map(el => (
                <Col key={el.id} className='d-flex'>
                    <Card >
                        <Card.Img variant="top" src={el.image} />
                        <Card.Body>
                        <Card.Title style={{cursor: 'pointer'}} onClick={(e) => handleClick(e, el.id)} >{el.name}</Card.Title>
                        <Card.Text>
                            {el.status=='Alive' && 'Alive'}
                            {el.status=='unknown' && 'unknown'}
                            {el.status=='Dead' && <>Dead <img width='25px' src={Dead}/></>}
                            
                        </Card.Text>
                        <Form.Check 
                            id={`default-${el.id}`}
                            label={`${'favorite hero'}`}
                            checked={currentUsersId.some(ell => ell===el.id)}
                            aria-label="option 1" 
                            onChange={(e) => hendlerChange(e, el.id)} 
                        />
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
     );
});

export default Users;