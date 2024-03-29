import React from 'react';
import { randomUUID } from '../../utils/helper';
import './NumberGenerator.scss';

/**
 * A simple Javascript program to check Prime number, using recursion
 *
 * @param {*} n is a Number
 * @returns true if n is prime, otherwise false
 */
function isPrime(n, i = 2) {
	if (n <= 2) return n == 2;
	if (n % i == 0) return false;
	if (i * i > n) return true;
	return isPrime(n, i + 1);
}

/**
 * A simple Javascript program to check for even or odd
 *
 * @param {*} n is a Number
 * @returns true if n is even, otherwise false
 */
function isEven(n) {
	return n % 2 == 0;
}

// NumberedBox Component
const NumberedBox = ({ text, color }) => {
	return (
		<div className="numbered-box text-center col-3 col-md-auto" style={{ backgroundColor: color }}>
			{text}
		</div>
	);
};

// Section Header Component
const SectionTitle = ({ heading, subHeading, text = '' }) => (
	<div className="section-title text-center">
		<h1 className="mono-h1">{heading}</h1>
		<p className="mt-3 fw-light fs-2">{subHeading}</p>
	</div>
);

// NumberGenerator Component
const NumberGenerator = ({ number = 32 }) => {
	const numberOfItems = Array.from({ length: number }, (_, i) => i);

	return (
		<div className="section-wrapper py-4">
			<SectionTitle heading="30 Days of React" subHeading="Number Generator" />
			<div className="pt-2">
				<div className="d-grid numbered-box-wrapper">
					{numberOfItems.map((index) => {
						if (isPrime(index)) {
							return <NumberedBox key={randomUUID()} text={index} color="#FD5E53" />;
						} else if (isEven(index)) {
							return <NumberedBox key={randomUUID()} text={index} color="#20BF73" />;
						} else {
							return <NumberedBox key={randomUUID()} text={index} color="#FCDB3A" />;
						}
					})}
				</div>
			</div>
		</div>
	);
};

export default NumberGenerator;
