import React from "react";
import { MapContainer as Map } from "../Map/Map.container";
import {Container, Row, Col} from "react-bootstrap";
import "./Register.css";

export default ({ registrationLinks, isActive }) => (
<Container fluid style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0}}>
	<div className='register'>
		{/* when the API call is active, display a loading status */}
		{isActive ? (
			<div className='register-activity' role='status'>
				Loading...
			</div>
		) : (
			<div className='register-map'>
				{/* replace this list with a map component */}
				{/* <ul>
                    {registrationLinks.map( (entry, index) =>
                        <li key={index}>
                            <a href={entry.url}>{entry.state}</a>
                        </li>
                    )}
                </ul> */}
				<Map registrationLinks={registrationLinks} />
			</div>
		)}
	</div>
	</Container>
);