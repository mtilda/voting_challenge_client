import React from "react";
import "./VoterTurnout.css";
import { ButtonContainer as Button } from "../Button/Button.container";
import { VoterTurnoutContainer as VoterTurnoutContainer} from "./VoterTurnout.container";
import { Link } from "react-router-dom";

export const VoterTurnout = () => (
	<div>
		<h1 className='center'>Your Vote Matters!</h1>
		<VoterTurnoutContainer />
		<Link to='/voting-stats'>
			{' '}
			<Button label='Learn More' />
		</Link>
	</div>
);
