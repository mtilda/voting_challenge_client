import React, { Component } from 'react';
import USAMap from 'react-usa-map';

export default ({registrationLinks, mapHandler, statesFilling}) =>  {

		return (
			<div className='App'>
				<h1>Choose Your State</h1>
				<USAMap customize={statesFilling()} onClick={mapHandler} />
				<p>
					{registrationLinks.map((entry, index) => (
						<span key={index}> {' '}
							<a href={entry.url}>{entry.state}</a>
						</span>
					))}
				</p>
			</div>
		);
	}
