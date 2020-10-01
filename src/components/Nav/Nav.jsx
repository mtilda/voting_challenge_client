import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => (
  <div className="nav">
    <Link to="/voting-stats" className="nav-link">
      Voting Statistics
    </Link>
    <Link to="/register" className="nav-link">
      Register Now
    </Link>
    <Link to="/about" className="nav-link">
      About Us
    </Link>
  </div>
);
