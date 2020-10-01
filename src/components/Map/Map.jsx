import React, { Component } from 'react';
import USAMap from "react-usa-map";
import "./Map.css";

export default ({ mapHandler }) =>
	<USAMap onClick={mapHandler} />;
