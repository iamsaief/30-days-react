// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Day5 from './day-5';
import Day6 from './day-6';

// The App, or the parent or the container component
// Functional Component
const App = () => {
	return (
		<div className="app">
			{/* <Day5 /> */}
			{/* <Day6 /> */}
		</div>
	);
};
// we render the JSX element using the ReactDOM package
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
