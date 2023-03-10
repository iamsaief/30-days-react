import React from 'react';
import { allCountries } from '../../data';
import { dataRestCountries, dataSaief, restCountries } from '../../data-restcountries';

const CountryCard = (props) => {
	const {
		flag = '🇧🇩',
		name = 'Bangladesh',
		capital = 'Dhaka',
		language = 'Bengali',
		population = '1000',
		currency = 'BDT',
	} = props.country;

	return (
		<div className="card text-bg-light">
			{/* <div className="display-1">{flag}</div> */}
			<div className="card-body">
				<img src={flag} alt={`${name}'s flag`} className="w-50" />
				<h1 className="mt-3">{name}</h1>
				<ul align="left" className="details">
					<strong>Capital: </strong> <span>{capital}</span>
					<br />
					<strong>Language: </strong> <span>{language}</span>
					<br />
					<strong>Population: </strong> <span>{population}</span>
					<br />
					<strong>Currency: </strong> <span>{currency}</span>
				</ul>
			</div>
		</div>
	);
};

const ButtonRandom = ({ onClick, text }) => (
	<button className="btn btn-info mt-3" onClick={onClick}>
		{text}
	</button>
);

class RandomCountry extends React.Component {
	state = {
		countryState: Math.floor(Math.random() * restCountries.length),
	};

	render() {
		const randomNumber = () => Math.floor(Math.random() * restCountries.length);

		const country = {
			name: restCountries[this.state.countryState].name.common,
			flag: restCountries[this.state.countryState].flags.svg,
			capital: restCountries[this.state.countryState].capital.toString(),
			language: Object.values(restCountries[this.state.countryState].languages).toString().split(',').join(', '),
			population: restCountries[this.state.countryState].population,
			currency: Object.values(restCountries[this.state.countryState].currencies)
				.map((x) => x.name)
				.toString(),
		};

		return (
			<div className="m-auto text-center">
				<CountryCard country={country} />
				<ButtonRandom onClick={() => this.setState({ countryState: randomNumber() })} text="Random Country" />
			</div>
		);
	}
}

export default RandomCountry;
