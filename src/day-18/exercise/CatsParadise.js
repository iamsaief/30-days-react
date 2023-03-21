import axios from 'axios';
import React, { useEffect, useState } from 'react';
import theCatApi from '../../data/thecatapi-breeds';
import './styles.scss';
/**
 * Find the average metric weight and life span of cats
 * How many countries do have cat breeds?
 * Which country has the highest number of cat breeds?
 * Arrange countries in ascending order based on the number of cat breeds they have?
 */

const Loading = () => (
	<span>
		Wait unit data fetched is complete ....{' '}
		<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
	</span>
);

const CatsParadise = () => {
	const [fetchedData, setFetchedData] = useState({});
	const [catsData, setCatsData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchCatsData = async () => {
			setIsLoading(true);

			const url = 'https://api.thecatapi.com/v1/breeds';
			try {
				const response = await axios.get(url);
				const data = await response.data;
				setFetchedData(data);
				getCatsObject(data);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		fetchCatsData();
	}, []);

	const getCatsObject = (data) => {
		function getSortByMoreObj() {
			const nestedArr = Object.entries(
				data.reduce((acc, { country_code: c }) => ((acc[c] = (acc[c] ?? 0) + 1), acc), {})
			).sort(([_, a], [__, b]) => b - a);

			const nestedObj = nestedArr.map(([k1, k2]) => {
				return {
					countryName: k1,
					countryBreeds: k2,
				};
			});

			return nestedObj;
		}

		const catsObject = {
			totalBreeds: data.length,
			averageWeight: Number(
				(
					data.reduce((acc, { weight: { metric } }) => {
						const [a, b] = metric.match(/\d+/g).map(Number);
						return acc + (a + b) / 2;
					}, 0) / data.length
				).toFixed(1)
			),
			averageLifeSpan: Number(
				(
					data.reduce((acc, { life_span }) => {
						const [a, b] = life_span.match(/\d+/g).map(Number);
						return acc + (a + b) / 2;
					}, 0) / data.length
				).toFixed(1)
			),
			countriesBreed: new Set(data.map(({ country_code }) => country_code)).size,
			moreBreeds: Object.entries(
				data.reduce((acc, { country_code: c }) => ((acc[c] = (acc[c] ?? 0) + 1), acc), {})
			).sort(([_, a], [__, b]) => b - a)[0][0],
			sortByMore: Object.entries(
				data.reduce((acc, { country_code: c }) => ((acc[c] = (acc[c] ?? 0) + 1), acc), {})
			).sort(([_, a], [__, b]) => b - a),
			sortByMoreObj: getSortByMoreObj(),
		};

		setCatsData(catsObject);
	};

	const { averageWeight, averageLifeSpan, moreBreeds, sortByMoreObj } = catsData;

	return (
		<div className="py-2">
			<h1>Day 18 - Fetch and Axios</h1>
			<h2>The Cat API</h2>
			{isLoading ? (
				<Loading />
			) : (
				<div>
					On average a cat weight about{' '}
					<span className="cat-info fw-bolder fs-5 border border-2 border-info rounded-circle">{averageWeight}</span>{' '}
					Kgs and live{' '}
					<span className="cat-info fw-bolder fs-5 border border-2 border-info rounded-circle">{averageLifeSpan}</span>{' '}
					years
					<p>
						Highest number of cat breeds in - {moreBreeds} <br />
					</p>
					{sortByMoreObj &&
						sortByMoreObj.map((item) => {
							return (
								<div key={item.countryName}>
									{item.countryName} has {item.countryBreeds}
								</div>
							);
						})}
				</div>
			)}
		</div>
	);
};

export default CatsParadise;
