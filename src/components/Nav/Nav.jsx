import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default () => (
  <div className="nav">
    <Link to="/voter-stats" className="nav-link">
      Voting Statistics
    </Link>
    <Link to="/register" className="nav-link">
      Register Now
    </Link>
  </div>
);
