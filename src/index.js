// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Day6 from './day-6';

// App component
const App = () => {
	return (
		<div>
			<Day6 />
		</div>
	);
};
// we render the JSX element using the ReactDOM package
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
