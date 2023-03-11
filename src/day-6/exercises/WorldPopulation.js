import React from 'react';
import { randomUUID } from '../../utils/helper';
import { allCountries } from './data';
import './WorldPopulation.scss';

const topTenPopulatedCountries = allCountries.sort((a, b) => b.population - a.population).slice(0, 10);
const worldPopulation = allCountries.map((country) => country.population).reduce((curr, sum) => curr + sum);

// Section Header Component
const SectionTitle = ({ heading, subHeading, text = '' }) => (
	<div className="section-title text-center">
		<h1 className="display-3 fw-medium">{heading}</h1>
		<p className="m-0 mt-2 fw-light display-5">{subHeading}</p>
		<p className="m-0 mt-1 fw-light">{text}</p>
	</div>
);

const topCountryList = topTenPopulatedCountries.map((country) => {
	return (
		<div className="d-grid population-graph-item mb-2" key={randomUUID()}>
			<div className="label fw-medium text-uppercase">{country.name}</div>
			<progress className="progress-bar" value={country.population} max={worldPopulation}></progress>
			<div className="number fw-medium">{country.population}</div>
		</div>
	);
});

// World Population Component (Graph)
const WorldPopulation = (props) => {
	return (
		<div className="section-wrapper py-4">
			<SectionTitle heading="30 Days of React" subHeading="World Population" text="Ten most populated countries" />

			<div className="pt-3 population-graph-wrapper">
				<div className="d-grid population-graph-item mb-2">
					<div className="label fw-medium text-uppercase">World</div>
					<progress className="progress-bar" value={worldPopulation} max={worldPopulation}></progress>
					<div className="number fw-medium">{worldPopulation}</div>
				</div>

				{topCountryList}
			</div>
		</div>
	);
};

export default WorldPopulation;
