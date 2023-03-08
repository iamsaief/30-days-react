<div align="center">
<h1> Day 7 - 30 Days Of React: Class Components </h1>

[<< Day 6](../day-6/README.md) | [Day 8 >>](../day-8/README.md)

</div>

- [Class Components](#class-components)
  - [Accessing props in Class components](#accessing-props-in-class-components)
  - [Methods in Class based component](#methods-in-class-based-component)
- [Exercises](#exercises)
  - [Exercises: Level 1](#exercises-level-1)
  - [Exercises: Level 2](#exercises-level-2)
  - [Exercises: Level 3](#exercises-level-3)

# Class Components

Class component with a constructor

```js
//index.js

import React from 'react';
import ReactDOM from 'react-dom';

// class base component
class Header extends React.Component {
	constructor(props) {
		super(props);
		// the code inside the constructor run before any other code
	}
	render() {
		return (
			<header>
				<div className="header-wrapper">
					<h1>Welcome to 30 Days Of React</h1>
					<h2>Getting Started React</h2>
					<h3>JavaScript Library</h3>
					<p>Asabeneh Yetayeh</p>
					<small>Oct 7, 2020</small>
				</div>
			</header>
		);
	}
}
const rootElement = document.getElementById('root');
ReactDOM.render(<Header />, rootElement);
```

## Accessing props in Class components

We can access props of a class based component using the keyword `this`. See the example below.

```js
// index.js

import React from 'react';
import ReactDOM from 'react-dom';

// class based component
class Header extends React.Component {
	constructor(props) {
		super(props);
		// the code inside the constructor run before any other code
	}
	render() {
		console.log(this.props.data);
		const {
			welcome,
			title,
			subtitle,
			author: { firstName, lastName },
			date,
		} = this.props.data;

		return (
			<header>
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
const App = () => {
	const data = {
		welcome: 'Welcome to 30 Days Of React',
		title: 'Getting Started React',
		subtitle: 'JavaScript Library',
		author: {
			firstName: 'Asabeneh',
			lastName: 'Yetayeh',
		},
		date: 'Oct 6, 2020',
	};

	return (
		<div className="app">
			<Header data={data} />
		</div>
	);
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
```

## Methods in Class based component

```js
//index.js

import React from 'react';
import ReactDOM from 'react-dom';

// class based component
class Header extends React.Component {
	greetPeople = () => {
		alert('Welcome to 30 Days Of React Challenge, 2020');
	};
	render() {
		return (
			<header>
				<div className="header-wrapper">
					<h1>Welcome to 30 Days Of React</h1>
					<h2>Getting Started React</h2>
					<h3>JavaScript Library</h3>
					<p>Asabeneh Yetayeh</p>
					<small>Oct 7, 2020</small>
					<button onClick={this.greetPeople}> Greet </button>
				</div>
			</header>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Header />, rootElement);
```

# Exercises

## Exercises: Level 1

1. How do you write a pure JavaScript function

   A pure function in JavaScript is a function that returns the same result if the same arguments are passed in. It does not depend on any state or data change during a program’s execution, nor does it produce any observable side effects.

   To write a pure function in JavaScript, you should follow these guidelines:

   - Define your function with a clear name and parameters
   - Return a value that only depends on your parameters
   - Do not mutate your parameters or any other variables outside your function
   - Do not use any external resources such as HTTP calls, writing to disk, printing to the screen etc.

   Here is an example of a pure function that adds two numbers:

   ```javascript
   function add(a, b) {
   	return a + b;
   }
   ```

2. What is inheritance and how do you make a child from a parent class?

   Inheritance is a concept in object-oriented programming that allows a class to inherit properties and methods from another class²³. The class that inherits is called the child class or subclass, and the class that is inherited from is called the parent class or superclass².

   To make a child class from a parent class in JavaScript, you can use the `extends` keyword after the child class name followed by the parent class name². For example:

   ```javascript
   class Parent {
   	constructor(name) {
   		this.name = name;
   	}
   	greet() {
   		console.log(`Hello, I am ${this.name}`);
   	}
   }

   class Child extends Parent {
   	constructor(name, age) {
   		super(name); // call parent constructor
   		this.age = age;
   	}
   	sayAge() {
   		console.log(`I am ${this.age} years old`);
   	}
   }
   ```

   In this example, `Child` is a subclass of `Parent` and inherits its properties (`name`) and methods (`greet`). The `super` keyword is used to call the parent constructor and pass it the name parameter. The child class can also have its own properties (`age`) and methods (`sayAge`) that are not inherited by the parent.

3. What is class based React component ?

   A class based React component is a type of component that is defined as a regular ES6 class that extends the `Component` class of the React library²³. Class based components are also called stateful or container components because they can track state and lifecycle on a React component. Class based components have access to all the different phases of a React lifecycle method, such as `componentDidMount`, `componentDidUpdate`, or `componentWillUnmount`. Class based components also have to define a `render` method inside the class, which will be used by React to actually render the component.

4. What is the difference between functional React component and class based React component ?

   The main difference between functional React components and class based React components is the syntax. A functional component is a plain JavaScript function that accepts props as an argument and returns a React element. A class component is a JavaScript class that extends React.Component and has a render method that returns a React element.

   Another difference is how they handle state and lifecycle methods. Class components can use `this.state` and `this.setState` to manage their own state, as well as `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` etc. to perform side effects or cleanup³. Functional components do not have access to these features by default, but they can use hooks such as `useState`, `useEffect`, `useRef` etc. to achieve similar functionality³.

   Functional components are generally simpler, easier to read and test, and more reusable than class components. Class components are more verbose, but they may offer some performance optimizations or compatibility with older codebases.

5. When do we need to use class based components instead of functional components

   You may need to use class based components instead of functional components if you have some specific requirements such as:

   - You need to use legacy lifecycle methods that are not supported by hooks, such as `componentWillMount`, `componentWillReceiveProps`, or `componentWillUpdate`.
   - You need to use error boundaries to catch errors in your component tree.
   - You need to optimize your component performance by using `shouldComponentUpdate` or `PureComponent`.
   - You need to use some third-party libraries that rely on class components.

   However, most of these cases are rare or can be solved with hooks or custom components. Functional components are generally preferred over class components because they are simpler, easier to read and test, and more reusable.

6. What is the use cases of class based component ?

   Some possible use cases of class based components are:

   - You need to use legacy code that relies on class components or lifecycle methods that are not supported by hooks.
   - You need to use error boundaries to catch errors in your component tree. Error boundaries are currently only supported by class components.
   - You need to optimize your component performance by using `shouldComponentUpdate` or `PureComponent`. Hooks do not have a direct equivalent for these methods, but you can use `React.memo` or custom hooks to achieve similar effects.

   However, these use cases are not very common and most of them can be solved with hooks or custom components. Functional components are generally simpler, easier to read and test, and more reusable than class components.

7. Which type of component do use most frequently ? functional or class-based component

   functional components are more frequently used than class based components in modern React development. Functional components are simpler, easier to read and test, and more reusable than class based components. They also have access to hooks, which allow them to use state and lifecycle methods without extending React.Component.

   Functional components are more popular and recommended than class based components in modern React development. They offer many benefits such as simplicity, readability, testability, and reusability.

8. What is React life cycle ? (not covered yet) ?
9. What is state in React ? (not covered yet)

## Exercises: Level 2

Learn more about class based component by changing previous days exercises to class based components

## Exercises: Level 3

Coming ...

<div align="right">

[Back to top ⬆️](#top)

</div>
````
