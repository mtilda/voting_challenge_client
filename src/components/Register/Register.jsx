import React from "react";
import Map from "../Map/Map";
import "./Register.css";

export default ({ registrationLinks, isActive, mapHandler }) => (
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
				<Map registrationLinks={registrationLinks} mapHandler = {mapHandler} />
			</div>
		)}
	</div>
);