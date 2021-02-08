import React, { Component, Fragment } from 'react';
import './home.css';
import { Row, Col, Button } from 'react-bootstrap';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Row className="rowhomepage">
            <Col xs={12} className="homepage">
                <h1 className="titlehome">Super List</h1>
                <p className="phrase">Quick trip to the market? Need some help?</p>
                <Link to="/superlist" className="begin">BEGIN <KeyboardArrowRightIcon /></Link>
            </Col>
        </Row>
    )
}

export default Home;
