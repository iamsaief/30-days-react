// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import asabenehImage from './images/asabeneh.jpg';
import avatarSaief from './images/avatar-saief.jpeg';
import logohtml from './images/html_logo.png';
import logocss from './images/css_logo.png';
import logojs from './images/js_logo.png';
import logoreact from './images/react_logo.png';
import DisplayImages from './exercises/DisplayImages';
import SubscriptionForm from './exercises/SubscriptionForm';
import RandomColors from './exercises/RandomColors';
import UserCardExercise from './exercises/UserCardExercise';

// The App, or the parent or the container component
// Functional Component
const App = () => {
	const data = {
		welcome: 'Welcome to 30 Days Of React',
		title: 'Getting Started React',
		subtitle: 'JavaScript Library',
		author: {
			firstName: 'Saief',
			lastName: 'Al Emon',
		},
		skills: ['html', 'css', 'javascript', 'reactjs', 'nextjs', 'redux', 'nodejs', 'mongoDB'],
		date: new Date(), // date needs to be formatted to a human readable format
	};
	const techs = ['HTML', 'CSS', 'JavaScript'];
	// copying the author from data object to user variable using spread operator
	const user = { ...data.author, image: avatarSaief, skills: data.skills };

	return (
		<div className="app">
			<br />
			<br />
			<DisplayImages images={[logohtml, logocss, logojs, logoreact]} secTitle="Frontend Technologies" />
			<br />
			<hr />
			<SubscriptionForm />
			<br />
			<hr />
			<RandomColors totalHex="5" />
			<br />
			<hr />
			<UserCardExercise user={user} />
			<br />
			<hr />
		</div>
	);
};

// we render the JSX element using the ReactDOM package
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
