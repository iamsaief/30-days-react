import React from 'react';

const randomHexColors = (total = 5) => {
	const hexArray = [];
	for (let index = 0; index < total; index++) {
		const color =
			'#' +
			Math.floor(Math.random() * (0xffffff + 1))
				.toString(16)
				.padStart(6, '0') // in case the number is too small to fill
				.toLocaleUpperCase();
		hexArray.push(color);
	}

	return hexArray;
};

const RandomColors = (props) => {
	const hexDivs = randomHexColors(props.totalHex).map((hex) => (
		<div key={hex} className="text-center display-6 p-4" style={{ background: hex, color: '#fff' }}>
			{hex}
		</div>
	));

	return (
		<div className="container">
			<h4 className="text-center mb-4">Random Hex colors</h4>
			{hexDivs}
		</div>
	);
};

export default RandomColors;
