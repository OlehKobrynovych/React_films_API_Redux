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
            <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="filter__title" >Search Name</Form.Label>
                    <Form.Control placeholder="Search Name" value={nameSearch} onChange={(e) => handleChange(e.target.value)} />
                </Form.Group>
            </Col>

            <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="filter__title">Search Gender</Form.Label>
                    <Form.Select value={genderSearch} onChange={(e) => handleChangeGender(e.target.value)}>
                        <option value={''} >All Gender</option>
                        <option value={'Female'} >Female</option>
                        <option value={'Male'} >Male</option>
                        <option value={'Genderless'} >Genderless</option>
                        <option value={'unknown'} >unknown</option>
                    </Form.Select>
                </Form.Group>
            </Col>

            <Col xs={12} sm={12} md={4} lg={4}>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className="filter__title">Search Species</Form.Label>
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
            </Col>

        </Row>
    )
}

export default Filter;