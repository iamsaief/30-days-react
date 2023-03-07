import React from 'react';
import { randomUUID } from '../helper';

/**
 * A function generate a number of hexadecimal codes and returns a array.
 *
 * @param {*} total length of array
 * @returns hexArray consisting hexadecimal codes
 */
const randomHexColors = (total = 5) => {
	const hexArray = [];
	for (let index = 0; index < total; index++) {
		const color =
			'#' +
			Math.floor(Math.random() * (0xffffff + 1))
				.toString(16)
				.padStart(6, '0') // in case the number is too small to fill
				.toUpperCase();
		hexArray.push(color);
	}

	return hexArray;
};

const HexColorGenerator = ({ totalHex }) => {
	const coloredBox = randomHexColors(totalHex).map((hex, index) => (
		<div
			key={randomUUID()}
			style={{ backgroundColor: hex, color: '#fff' }}
			className="border border-1 rounded-1 border-light d-flex align-items-center justify-content-center fs-4 fw-lighter p-4"
		>
			{hex}
		</div>
	));

	return <div className="pt-2 d-grid colored-box-wrapper">{coloredBox}</div>;
};

export default HexColorGenerator;
