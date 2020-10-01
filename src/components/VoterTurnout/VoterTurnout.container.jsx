import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "./VoterTurnout.css";

export const VoterTurnoutContainer = () => {
	const [percentage, setPercentage] = useState(null);
	const [data, setData] = useState([]);
	useEffect(() => {
		setPercentage(50);
		setData({
			labels: ['1996', '2000', '2004', '2008', '2012', '2016'],
			datasets: [
				{
					label: 'Turnout among 18-29 year-olds',
					data: [43, 48, 52, 49, 50, 59],
					backgroundColor: [
						'#06396C',
						'#06396C',
						'#06396C',
						'#06396C',
						'#06396C',
						'#06396C',
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
					],
					borderWidth: 1,
					barPercentage: 1,
					categorySpacing: 0,
					categoryPercentage: 0.5,
					barPercentage: 1.0,
				},
			],
		});
	}, [setPercentage, setData]);
	return (
		<div className='container'>
			{' '}
			<div className='col-md'>
				{' '}
				<Bar data={data}></Bar> <p className='election'>Election Year</p>{' '}
				<span className='name'>let's raise this number</span>
			</div>{' '}
		</div>
	)
}
