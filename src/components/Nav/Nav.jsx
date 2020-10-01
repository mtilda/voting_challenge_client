import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from "react-bootstrap";
import logo from "../../Images/logo.png";
import "./Nav.css";

export const Nav = () => (
  <Container>
    <Row>
	<div className="nav">
    <Col xs="1"></Col>
    <Col>
    <Link to = "/" >
      <img src={logo} class="l" />
    </Link>
    </Col>
    <Col></Col>
    <Col>
	  <Link to="/voting-stats" className="nav">
	    Voting Statistics
	  </Link>
    </Col>
    <Col>
	  <Link to="/register" className="nav">
	    Register Now
	  </Link>
    </Col>
    <Col>
	  <Link to="/about" className="nav">
	    About Us
	  </Link>
    </Col>
    <Col xs="1"></Col>
	</div>
  </Row>
  </Container>
);
