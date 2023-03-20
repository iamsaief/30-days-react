import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { randomUUID, isFalsyObj } from '../utils/helper';

const Country = ({ country }) => {
	const { name, capital, flags, languages, population, currencies } = country;

	const isTruthyObj = (obj) => typeof obj !== 'undefined' && obj !== null;

	const formattedCapital = capital ? capital.toString() : '';

	const formattedLanguage = isTruthyObj(languages) ? Object.values(languages).join(', ') : typeof languages;

	const formattedCurrencies = {
		name: isTruthyObj(currencies)
			? Object.values(currencies)
					.map((x) => x.name)
					.toString()
			: typeof currencies,
		symbol: isTruthyObj(currencies)
			? Object.values(currencies)
					.map((x) => x.symbol)
					.toString()
			: typeof currencies,
	};

	return (
		<div className="country col-xl-3 col-md-4 col-sm-6">
			<div className="card mb-2">
				<div className="card-body country_text">
					<div className="">
						<img src={flags.svg} alt={name.common} className="w-100" />
					</div>
					<h5 className="mt-1">{name.common}</h5>
					<p>
						<strong> Capital:</strong> {formattedCapital} <br />
						<strong> Languages:</strong> {formattedLanguage} <br />
						<strong> Population:</strong> {population.toLocaleString()} <br />
						<strong> Currency:</strong> {formattedCurrencies.name} ({formattedCurrencies.symbol})
					</p>
				</div>
			</div>
		</div>
	);
};

const Loading = () => (
	<span>
		Loading...<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
	</span>
);

const Day18 = () => {
	const [fetchedData, setFetchedData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		/**
		 * * Fetch + then chaining
		 */
		// const url = 'https://restcountries.com/v3.1/all';
		// fetch(url)
		// 	.then((response) => {
		// 		return response.json();
		// 	})
		// 	.then((data) => {
		// 		setFetchedData(data);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});

		/**
		 * * Fetch + async-await
		 */
		// const fetchCountryData = async () => {
		// 	const url = 'https://restcountries.com/v3.1/all';
		// 	try {
		// 		const response = await fetch(url);
		// 		const data = await response.json();

		// 		setFetchedData(data);
		// 	} catch (error) {
		// 		console.log(error);
		// 	}
		// };
		// fetchCountryData();

		/**
		 * * Axios + then chaining
		 */
		// const url = 'https://restcountries.com/v3.1/all';
		// axios
		// 	.get(url)
		// 	.then((response) => {
		// 		setFetchedData(response.data);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});

		/**
		 * * Axios + async-await
		 */
		const fetchCountryData = async () => {
			const url = 'https://restcountries.com/v3.1/all';
			try {
				const response = await axios.get(url);
				const data = await response.data;

				setFetchedData(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchCountryData();

		console.log(fetchedData);
	}, []);

	return (
		<div className="container">
			<h1>Day 18 : Calling API</h1>
			<div>
				<p>
					There are <strong>{fetchedData.length > 0 ? fetchedData.length : <Loading />}</strong> countries in the api
				</p>
				<div className="countries-wrapper row">
					{fetchedData.length > 0 ? (
						fetchedData.map((country) => <Country country={country} key={randomUUID()} />)
					) : (
						<Loading />
					)}
				</div>
			</div>
		</div>
	);
};

export default Day18;
