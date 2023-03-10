import { useEffect, useState } from 'react';

// Define an object that maps seasons to colors
const seasonColors = {
	Autumn: '#FFA500',
	Winter: '#ADD8E6',
	Spring: '#90EE90',
	Summer: '#F0E68C',
};

// Define a function that returns the current season based on month
const getSeason = () => {
	const month = new Date().getMonth();
	if (month >= 2 && month <= 4) {
		return 'Spring';
	} else if (month >= 5 && month <= 7) {
		return 'Summer';
	} else if (month >= 8 && month <= 10) {
		return 'Autumn';
	} else {
		return 'Winter';
	}
};

const BgColorSwitcher = () => {
	const [season, setSeason] = useState(getSeason());
	const [isLoading, setIsLoading] = useState(true);

	setTimeout(() => {
		setIsLoading(false);
	}, 1000);

	const seasonSelect = (
		<form>
			<div className="">
				<label className="me-2">Season Colors</label>
				<select
					value={season}
					onChange={(event) => {
						setSeason(event.target.value);
					}}
				>
					{Object.keys(seasonColors).map((colorKey) => (
						<option key={colorKey} value={colorKey}>
							{colorKey}
						</option>
					))}
				</select>
			</div>
		</form>
	);

	useEffect(() => {
		document.body.style.backgroundColor = seasonColors[season];
		document.title = season;
	});

	return (
		<section className="container">
			<h1>Seasonal background colors</h1>
			<div>
				<ul>
					<li>🔃 Wait the color options loading</li>
					<li>🎨 Choose a season and 👀 See the result</li>
				</ul>
			</div>
			{isLoading ? (
				<div>
					<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading colors...{' '}
				</div>
			) : (
				seasonSelect
			)}
		</section>
	);
};

export default BgColorSwitcher;
