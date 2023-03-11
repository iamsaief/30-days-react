import React from 'react';
import './RandomCoordinates.scss';

const maxX = window.innerWidth;
const maxY = window.innerHeight;

const RandomCoordinates = () => {
	function handleNewPosition(event) {
		let x = Math.ceil(Math.random() * maxX);

		if (x + event.currentTarget.offsetWidth > maxX) {
			x -= event.currentTarget.offsetWidth + 5;
		}

		let y = Math.ceil(Math.random() * maxY);

		if (y + event.currentTarget.offsetHeight > maxY) {
			y -= event.currentTarget.offsetHeight + 5;
		}

		event.currentTarget.style.left = `${x}px`;
		event.currentTarget.style.top = `${y}px`;
	}

	return (
		<div className="floating-box fw-bold fs-3 text-success-emphasis bg-info py-2 px-4" onMouseEnter={handleNewPosition}>
			30 of React - Events
		</div>
	);
};

export default RandomCoordinates;
