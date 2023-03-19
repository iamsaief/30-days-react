import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet, useParams, Navigate } from 'react-router-dom';
import { challenges } from '../data/data';

const Home = (props) => <h1>Welcome Home</h1>;
const About = (props) => <h1>About Us</h1>;
const Contact = (props) => <h1>Contact us</h1>;
const NotFound = (props) => <h1>404! page not found</h1>;

const Challenge = () => {
	const param = useParams();
	const challenge = challenges.find((challenge) => challenge.slug === param.id);
	const {
		name,
		description,
		status,
		days,
		level,
		duration,
		author: { firstName, lastName },
	} = challenge;

	return (
		<div>
			<h3>{name}</h3>
			<p className="mb-0">
				{level}, Author: {firstName} {lastName}
			</p>
			{duration && (
				<>
					<small>{duration}</small> <br />
				</>
			)}
			<small>Number of days: {days}</small>
			<p>{description}</p>
		</div>
	);
};

const Challenges = () => {
	const activeClass = (navInfo) => (navInfo.isActive ? 'text-success' : '');
	return (
		<div>
			<h2>30 Days Of React Challenge</h2>

			<ul>
				{challenges.map(({ name, slug }) => (
					<li key={name}>
						<NavLink to={`/challenges/${slug}`} className={activeClass}>
							{name}
						</NavLink>
					</li>
				))}
			</ul>
			<hr />
			<Outlet />
		</div>
	);
};

const Navbar = () => {
	const activeClass = (navInfo) => (navInfo.isActive ? 'text-danger' : '');

	return (
		<ul>
			<li>
				<NavLink to="/" className={activeClass}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to="/about" className={activeClass}>
					About
				</NavLink>
			</li>
			<li>
				<NavLink to="/contact" className={activeClass}>
					Contact
				</NavLink>
			</li>
			<li>
				<NavLink to="/challenges" className={activeClass}>
					Challenges
				</NavLink>
			</li>
		</ul>
	);
};

const Day17 = () => {
	return (
		<Router>
			<div className="container">
				<h1>React Router DOM</h1>
				<Navbar />
				<Routes>
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/challenges/*" element={<Challenges />}>
						<Route path=":id" element={<Challenge />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</Router>
	);
};

export default Day17;
