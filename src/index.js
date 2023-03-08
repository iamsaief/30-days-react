// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { randomUUID } from './helper';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/scss/index.scss';

import NumberGenerator from './Exercises/NumberGenerator';
import HexColorGenerator from './Exercises/HexColorGenerator';
import WorldPopulation from './Exercises/WorldPopulation';

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

const Hr = () => <hr class=" border-dark-subtle opacity-25"></hr>;

// App component
const App = () => {
	return (
		<div className="container">
			{/* <div>
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
			<Hr /> */}

			{/* Even,odd, prime Number Generator */}
			{/* <div className="section-wrapper py-4">
				<div className="section-title text-center">
					<h1>30 Days of React</h1>
					<p className="mt-3 fw-light fs-2">Number Generator</p>
				</div>
				<NumberGenerator number={32} />
			</div> */}

			{/* Hexadecimal colors Generator */}
			{/* <div className="section-wrapper py-4">
				<div className="section-title text-center">
					<h1>30 Days of React</h1>
					<p className="mt-3 fw-light fs-2">Hexadecimal colors</p>
				</div>
				<HexColorGenerator totalHex={32} />
			</div> */}

			{/* Top ten countries population graph */}
			<WorldPopulation />
		</div>
	);
};
// we render the JSX element using the ReactDOM package
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
