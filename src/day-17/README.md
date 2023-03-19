<div align="center">

<h1> <code>Day 17</code> - 30 Days Of React <br>React Router</h1>

[<< Day 16](../day-16/README.md) | [Day 18 >>](../day-18/README.md)

</div>

- [React Router](#react-router)
- [Exercises](#exercises)
  - [Exercises: Level 1](#exercises-level-1)
    - [1. What package do you use to implement routing in react?](#1-what-package-do-you-use-to-implement-routing-in-react)
    - [2. What is the default export in react-router-dom?](#2-what-is-the-default-export-in-react-router-dom)
    - [3. What is the use of the following Components(Route, NavLink, Switch, Redirect, Prompt)](#3-what-is-the-use-of-the-following-componentsroute-navlink-switch-redirect-prompt)
  - [Exercises: Level 2](#exercises-level-2)

# React Router

# Exercises

## Exercises: Level 1

### 1. What package do you use to implement routing in react?

`react-router-dom`

### 2. What is the default export in react-router-dom?

### 3. What is the use of the following Components(Route, NavLink, Switch, Redirect, Prompt)

Here are the main components of `react-router-dom` version 6:

- `BrowserRouter`: This component is used to wrap your application and provide routing functionality to it. It should be used once at the top level of your application.

- `Routes`: This component is used to define the routes for your application. It should be used inside the `BrowserRouter` component.

- `Route`: This component is used to define a single route in your application. It should be used inside the `Routes` component.

- `Link`: This component is used to create links between different routes in your application. It should be used instead of the standard HTML `<a>` tag.

- `Outlet`: This component is used to render the child routes of a parent route. It should be used inside the `Route` component.

Here is an example of how to use these components to create a simple application with nested routes:

```javascript
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

function App() {
	return (
		<Router>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />}>
					<Route path="/" element={<AboutPage />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
			</Routes>
		</Router>
	);
}

function Home() {
	return <h1>Home</h1>;
}

function About() {
	return (
		<div>
			<h1>About</h1>
			<Outlet />
		</div>
	);
}

function AboutPage() {
	return <h2>About Page</h2>;
}

function Contact() {
	return <h2>Contact</h2>;
}

export default App;
```

## Exercises: Level 2

Now, you know about React router. Build your portfolio with React and implement React router for navigation.

<div align="right">

[Back to top ⬆️](#top)

</div>
