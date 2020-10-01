import React, { Component } from 'react';
import USAMap from "react-usa-map";
import "./Map.css";
import vote from '../../Images/vote.jpeg';

export default ({ mapHandler }) => (
	<div className='App-txt'>
		<h1 className='txt'>Yes! Your vote counts!</h1>
		<div class='modal-body row'>
			<div className='col-md-6 text-center'>
				<h1 className='txt'>Select your state</h1>
				<p className='description'>
					{' '}
					Each state has their own way of running their polls.
				</p>
				<p className='description'>
					No problem, we're going to send you directly to your state's voter
					registration page.
				</p>
				<div className='col-md-6 text-center'>
					<img src={vote} />
					<p className='text-to-direct'>Click on your state to begin!</p>
				</div>
			</div>

			<div className='col-md-6 text-center'>
				<USAMap onClick={mapHandler} />
			</div>
		</div>
	</div>
);
