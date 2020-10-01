import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Images/logo.png";
import "./Nav.css";

export const Nav = () => (
	<div className="nav">
    <Link to = "/" >
      <img src={logo} class="l" />
    </Link>
      
	  <Link to="/voting-stats" className="nav">
	    Voting Statistics
	  </Link>
	  <Link to="/register" className="nav">
	    Register Now
	  </Link>
	  <Link to="/about" className="nav">
	    About Us
	  </Link>
	</div>
);
