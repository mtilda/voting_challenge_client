import React from "react";
import img from "../../Images/cover_page.jpeg";
import {Container, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';
import {SpreadingAwareness} from "../SpreadingAwareness/SpreadingAwareness";
import {VoterTurnout} from "../VoterTurnout/VoterTurnout";
import {ButtonContainer as Button} from "../Button/Button.container";
import {RegisterContainer as Register} from "../Register/Register.container"
import "./Home.css";
import { FaRegEdit, FaBookOpen, FaMapMarked, FaRegAddressCard, FaVoteYea } from "react-icons/fa";

export const Home = () => (
<Container fluid style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0}}>
	<div className='home'>
		<div className='bg'>
            <Row>
                <Col sm="6"></Col>
                <Col>
			<h2 className='floating-question'>
				Have <span className='red'> YOU </span> registered to 
				<span className='red'>VOTE</span> ?
			</h2>
            </Col>
            <Col sm="1"></Col>
            </Row>
			<div class='text-block'>
				<h4>Let Your Voice be heard!</h4>
				<Link to = "/register">
					<Button label='Register Now' />
				</Link>
			</div>
		</div>
        <Row>
            <Col></Col>
            <Col xs="10">
                <div className="how-to-vote">
		<h1>How to Vote</h1>
		<div className='text-center'>
			<FaRegEdit size={59} color='#DA313C' />
			<span className='text-center'> <Link to="/register">Register</Link> to vote with your state</span>
		</div>
		<div className='text-center'>
			<FaMapMarked size={59} color='#DA313C' />
			<span className='text-center'>
				{' '}
				Find your polling location or get a mail-in ballot
			</span>
		</div>
		<div className='text-center'>
			<FaRegAddressCard size={59} color='#DA313C' />
			<span className='text-center'> Check if you need an ID</span>
		</div>
		<div className='text-center'>
			<FaVoteYea size={59} color='#DA313C' />
			<span className='text-center'> Vote!!</span>
		</div>
        </div>
        </Col>
        <Col></Col>
        </Row>
		<SpreadingAwareness />
		<VoterTurnout />
	</div>
    </Container>
);
