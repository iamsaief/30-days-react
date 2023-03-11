import React, { useState, useEffect } from 'react';

function MouseCoordinate() {
	// Create a state variable to store coordinate
	const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });

	// Use useEffect hook to add event listener for mousemove
	useEffect(() => {
		// Define event handler function
		function handleMouseMove(event) {
			// Get screenX and screenY properties of event object
			const x = event.screenX;
			const y = event.screenY;

			// Update state variable with x and y values
			setCoordinate({ x, y });
		}

		// Add event listener for mousemove on window object
		window.addEventListener('mousemove', handleMouseMove);

		// Remove event listener on cleanup
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []); // Run only once

	// Return JSX element that renders coordinate on screen
	return (
		<div>
			<h3>Screen X: {coordinate.x}</h3>
			<h3>Screen Y: {coordinate.y}</h3>
		</div>
	);
}

export default MouseCoordinate;
