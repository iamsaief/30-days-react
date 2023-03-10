import React from 'react';
import avatarSaief from '../images/avatar-saief.jpeg';
import RandomCountry from './exercises/RandomCountry';

// Fuction to show month date year

const showDate = (time) => {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const month = months[time.getMonth()].slice(0, 3);
	const year = time.getFullYear();
	const date = time.getDate();
	return ` ${month} ${date}, ${year}`;
};

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
	<div className="user-card">
		<img src={image} alt={firstName} className="w-50" />
		<h2>
			{firstName}
			{lastName}
		</h2>
	</div>
);

// A button component
const Button = ({ text, onClick, style }) => (
	<button style={style} onClick={onClick}>
		{text}
	</button>
);

// CSS styles in JavaScript Object
const buttonStyles = {
	backgroundColor: '#61dbfb',
	padding: 10,
	border: 'none',
	borderRadius: 5,
	margin: 3,
	cursor: 'pointer',
	fontSize: 18,
	color: 'white',
};

// class based component
class Header extends React.Component {
	constructor(props) {
		super(props);
		// the code inside the constructor run before any other code
	}
	render() {
		// console.log(this.props.data);
		const {
			welcome,
			title,
			subtitle,
			author: { firstName, lastName },
			date,
		} = this.props.data;

		return (
			<header style={this.props.styles}>
				<div className="header-wrapper">
					<h1>{welcome}</h1>
					<h2>{title}</h2>
					<h3>{subtitle}</h3>
					<p>
						{firstName} {lastName}
					</p>
					<small>{date}</small>
				</div>
			</header>
		);
	}
}

const Count = ({ count, addOne, minusOne }) => (
	<div>
		<h1>{count} </h1>
		<div>
			<Button text="+1" onClick={addOne} style={buttonStyles} />
			<Button text="-1" onClick={minusOne} style={buttonStyles} />
		</div>
	</div>
);

// TechList Component
// class base component
class TechList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { techs } = this.props;
		const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
		return techsFormatted;
	}
}

// Main Component
// Class Component
class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { techs, user, greetPeople, handleTime, changeBackground, count, addOne, minusOne } = this.props;
		return (
			<main>
				<div>
					<p>Prerequisite to get started react.js:</p>
					<ul>
						<TechList techs={techs} />
					</ul>
					<UserCard user={user} />
					<Button text="Greet People" onClick={greetPeople} style={buttonStyles} />
					<Button text="Show Time" onClick={handleTime} style={buttonStyles} />
					<Button text="Change Background" onClick={changeBackground} style={buttonStyles} />
					<Count count={count} addOne={addOne} minusOne={minusOne} />
				</div>
			</main>
		);
	}
}

// Footer Component
// Class component
class Footer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<footer>
				<div className="footer-wrapper">
					<p>Copyright {this.props.date.getFullYear()}</p>
				</div>
			</footer>
		);
	}
}

// Day8 Main Component
class Day8 extends React.Component {
	state = {
		count: 0,
		styles: {
			// backgroundColor: '#0d1117',
			backgroundColor: 'white',
			color: 'black',
		},
	};
	showDate = (time) => {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];

		const month = months[time.getMonth()].slice(0, 3);
		const year = time.getFullYear();
		const date = time.getDate();
		return ` ${month} ${date}, ${year}`;
	};
	addOne = () => {
		this.setState({ count: this.state.count + 1 });
	};

	// method which subtract one to the state
	minusOne = () => {
		this.setState({ count: this.state.count - 1 });
	};
	handleTime = () => {
		alert(this.showDate(new Date()));
	};
	greetPeople = () => {
		alert('Welcome to 30 Days Of React Challenge, 2020');
	};

	changeBackground = () => {
		console.log('change color btn clicked', this.state);

		const colorChange =
			this.state.styles.backgroundColor === 'white'
				? this.setState({
						styles: { backgroundColor: 'black', color: 'white' },
				  })
				: this.setState({
						styles: { backgroundColor: 'white', color: 'black' },
				  });

		this.setState({ colorChange });
	};

	render() {
		const data = {
			welcome: 'Welcome to 30 Days Of React',
			title: 'Getting Started React',
			subtitle: 'JavaScript Library',
			author: {
				firstName: 'Saief',
				lastName: 'Al Emon',
			},
			date: 'Oct 7, 2020',
		};
		const techs = ['HTML', 'CSS', 'JavaScript'];
		const date = new Date();
		// copying the author from data object to user variable using spread operator
		const user = { ...data.author, image: avatarSaief };

		return (
			<div className="" style={this.state.styles}>
				<Header data={data} />
				<br />
				<div className="container">
					<div className="row">
						<div className="col-6">
							<Main
								user={user}
								techs={techs}
								handleTime={this.handleTime}
								greetPeople={this.greetPeople}
								changeBackground={this.changeBackground}
								addOne={this.addOne}
								minusOne={this.minusOne}
								count={this.state.count}
							/>
						</div>
						<div className="col-6">
							<RandomCountry />
						</div>
					</div>
				</div>
				<br />
				<Footer date={new Date()} />
			</div>
		);
	}
}

export default Day8;
