import React from 'react';
import Day5 from './day-5';
import Day6 from './day-6';
import Day7 from './day-7';
import Day8 from './day-8';
import Day9 from './day-9';
import Day11 from './day-11';
import Day12 from './day-12';
import Day13 from './day-13';
import Day15 from './day-15';
import Day16 from './day-16';
import Day17 from './day-17';

import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Switch,
	Redirect,
	Prompt,
	withRouter,
	Routes,
} from 'react-router-dom';

// The App, or the parent or the container component
// Functional Component

// Home component
const Home = (props) => <h1>Welcome Home</h1>;
// About component
const About = (props) => <h1>About Us</h1>;
// Contact component
const Contact = (props) => <h1>Contact us</h1>;
// Challenge component
const Challenges = (props) => (
	<div>
		<h1>30 Days Of React Challenge</h1>
	</div>
);

const App = () => {
	return (
		<div className="app">
			{/* <Day5 /> */}
			{/* <Day6 /> */}
			{/* <Day7 /> */}
			{/* <Day8 /> */}
			{/* <Day9 /> */}
			{/* <Day11 /> */}
			{/* <Day12 /> */}
			{/* <Day13 /> */}
			{/* <Day15 /> */}
			{/* <Day16 /> */}
			<Day17 />
		</div>
	);
};
export default App;
