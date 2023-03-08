// index.js
import React from 'react';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/index.scss';

import NumberGenerator from './exercises/NumberGenerator';
import HexColorGenerator from './exercises/HexColorGenerator';
import WorldPopulation from './exercises/WorldPopulation';
import { randomUUID } from '../helper';

const numbers = [1, 2, 3, 4, 5];

const Numbers = ({ numbers }) => {
	// modifying array to array of li JSX
	const list = numbers.map((number) => <li key={randomUUID()}>{number}</li>);
	return list;
};

const skills = [
	['HTML', 10],
	['CSS', 7],
	['JavaScript', 9],
	['React', 8],
];

// Skill Component
const Skill = ({ skill: [tech, level] }) => {
	return (
		<li>
			{tech} {level}
		</li>
	);
};

// Skills Component
const Skills = ({ skills }) => {
	const skillsList = skills.map((skill) => <Skill skill={skill} key={randomUUID()} />);

	return <ul>{skillsList}</ul>;
};

const countries = [
	{ name: 'Finland', city: 'Helsinki' },
	{ name: 'Sweden', city: 'Stockholm' },
	{ name: 'Denmark', city: 'Copenhagen' },
	{ name: 'Norway', city: 'Oslo' },
	{ name: 'Iceland', city: 'Reykjavík' },
];

//   Country Component
const Country = ({ country: { name, city } }) => {
	return (
		<div>
			<h4>{name}</h4>
			<small>{city}</small>
		</div>
	);
};
//   Countries Component
const Countries = ({ countries }) => {
	const countryList = countries.map((country) => <Country country={country} key={randomUUID()} />);
	return <div>{countryList}</div>;
};

const Hr = () => <hr className=" border-dark-subtle opacity-25"></hr>;

// Day6 - Main component
const Day6 = () => {
	return (
		<div className="container">
			<div>
				<h1>Numbers List</h1>
				<ul>
					<Numbers numbers={numbers} />
				</ul>
			</div>
			<Hr />
			<div>
				<h1>Skills List</h1>
				<Skills skills={skills} />
			</div>
			<Hr />
			<div>
				<h1>Country List</h1>
				<Countries countries={countries} />
			</div>
			<Hr />

			{/* Exercises Solution */}
			{/* Even,odd, prime Number Generator */}
			<NumberGenerator number={32} />
			<Hr />

			{/* Hexadecimal colors Generator */}
			<HexColorGenerator totalHex={32} />
			<Hr />

			{/* Top ten countries population graph */}
			<WorldPopulation />
		</div>
	);
};

export default Day6;
