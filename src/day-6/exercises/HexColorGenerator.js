import React from 'react';
import { randomUUID } from '../../utils/helper';

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

// Section Header Component
const SectionTitle = ({ heading, subHeading, text = '' }) => (
	<div className="section-title text-center">
		<h1 className="mono-h1">{heading}</h1>
		<p className="mt-3 fw-light fs-2">{subHeading}</p>
	</div>
);

// HexColorGenerator Component (Main)
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

	return (
		<div className="section-wrapper py-4">
			<SectionTitle heading="30 Days of React" subHeading="Hexadecimal colors" />
			<div className="pt-2 d-grid colored-box-wrapper">{coloredBox}</div>
		</div>
	);
};

export default HexColorGenerator;
