import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Filter = () => {
    const [nameSearch, setNameSearch] = useState('');
    const [genderSearch, setGenderSearch] = useState('');
    const [speciesSearch, setSpeciesSearch] = useState('');
    
    const navigate = useNavigate();

    const handleChange = (value) => {
        setNameSearch(value);
        navigate(`/home?page=1&name=${value}&gender=${genderSearch}&species=${speciesSearch}`);
        // navigate(`/home?page=1&name=${value}`, { state: {kim: 'asd'}, replace: true });
    }
    
    const handleChangeGender = (value) => {
        setGenderSearch(value)
        navigate(`/home?page=1&name=${nameSearch}&gender=${value}&species=${speciesSearch}`);
    }
    
    const handleChangeSpecies = (value) => {
        setSpeciesSearch(value)
        navigate(`/home?page=1&name=${nameSearch}&gender=${genderSearch}&species=${value}`);
    }

    return (
        <Row className="mb-3">

            <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Search Name</Form.Label>
                <input  value={nameSearch} onChange={(e) => handleChange(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Search Gender</Form.Label>
                <Form.Select value={genderSearch} onChange={(e) => handleChangeGender(e.target.value)}>
                    <option value={''} >All Gender</option>
                    <option value={'Female'} >Female</option>
                    <option value={'Male'} >Male</option>
                    <option value={'Genderless'} >Genderless</option>
                    <option value={'unknown'} >unknown</option>
                </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Search Species</Form.Label>
                <Form.Select value={speciesSearch} onChange={(e) => handleChangeSpecies(e.target.value)}>
                    <option value={''} >All Species</option>
                    <option value={'Human'} >Human</option>
                    <option value={'Humanoid'} >Humanoid</option>
                    <option value={'Poopybutthole'} >Poopybutthole</option>
                    <option value={'Animal'} >Animal</option>
                    <option value={'Cronenberg'} >Cronenberg</option>
                    <option value={'Disease'} >Disease</option>
                    <option value={'unknown'} >unknown</option>
                </Form.Select>
            </Form.Group>
        </Row>
    )
}

export default Filter;