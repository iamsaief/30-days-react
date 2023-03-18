<div align="center">

<h1> <code>Day 15</code> - 30 Days Of React <br> Third Party Packages</h1>

[<< Day 14](../day-14/README.md) | [Day 16 >>](../day-16/README.md)

</div>

- [Third Party Packages](#third-party-packages)
- [Exercises](#exercises)
  - [Exercises: Level 1](#exercises-level-1)
    - [1. What is a package?](#1-what-is-a-package)
    - [2. What is a third party package ?](#2-what-is-a-third-party-package-)
    - [3. Do you have to use third party packages?](#3-do-you-have-to-use-third-party-packages)
    - [4. How do you know the popularity and stability of a third party package?](#4-how-do-you-know-the-popularity-and-stability-of-a-third-party-package)
    - [5. How many JavaScript packages are there on the npm registry?](#5-how-many-javascript-packages-are-there-on-the-npm-registry)
    - [6. How do you install a third party package?](#6-how-do-you-install-a-third-party-package)
    - [7. What packages do you use most frequently?](#7-what-packages-do-you-use-most-frequently)
    - [8. What package do you use to fetch data?](#8-what-package-do-you-use-to-fetch-data)
    - [9. What is the purpose of classnames package?](#9-what-is-the-purpose-of-classnames-package)
    - [10. What is the purpose validator package?](#10-what-is-the-purpose-validator-package)
  - [Exercises: Level 2](#exercises-level-2)
    - [1. Learn how to use Sass](#1-learn-how-to-use-sass)
    - [2. Learn how to use axios](#2-learn-how-to-use-axios)
    - [3. Learn how to use moment and react-icons](#3-learn-how-to-use-moment-and-react-icons)
    - [4. Use the validator package to validate the form you had in day 12](#4-use-the-validator-package-to-validate-the-form-you-had-in-day-12)
    - [5. Use classnames to change a class based on some logic.](#5-use-classnames-to-change-a-class-based-on-some-logic)

# Third Party Packages

There are more than 1.4M JavaScript packages on npm registry. By now there is a package almost for every kind of problem. We do not have to create the wheel instead we have to know how to use the wheel.

# Exercises

## Exercises: Level 1

### 1. What is a package?

A package is a collection of related classes, interfaces, and sub-packages. It is used to organize code and make it reusable. It contains all the files you need for a module. Modules are JavaScript libraries you can include in your project.

A package is a file or directory that is described by a package.json file. A package must contain a package.json file in order to be published to the npm registry.

### 2. What is a third party package ?

It is a package that is created by someone else and can be used in your project. Third-party packages can be found on package managers such as **npm** and **Yarn**. Third-party packages are self-contained components, typically small scripts or widgets, that add functionality to websites. They are offered by independent organizations, with code and asset files served from a remote web address.

### 3. Do you have to use third party packages?

No, you don’t have to use third-party packages. You can write your own code to do what you need. However, third-party packages can save you time and effort by providing pre-built functionality that you can use in your project.

### 4. How do you know the popularity and stability of a third party package?

There are several ways to know the popularity and stability of a third-party package in JavaScript. One way is to measure the popularity of a JavaScript package by the number of **GitHub stars** and the number of **weekly downloads** on https://npmjs.com. A package with a large community proves that it solves the problem for many people. Another way is to check the package's documentation and see if it is well-maintained and has a good track record of updates and bug fixes. You can also check the package's GitHub repository to see if it has a lot of open issues or pull requests.

### 5. How many JavaScript packages are there on the npm registry?

According to Wikipedia, over 1.3 million packages are available in the main npm registry.

### 6. How do you install a third party package?

To install a third-party package in JavaScript, you can use a package manager such as npm or Yarn. To install a package using npm, you can use the following command in your terminal:

`npm install package-name`.

To install a package using Yarn, you can use the following command in your terminal:

`yarn add package-name`.

### 7. What packages do you use most frequently?

There are several popular React component libraries in 2022. According to Bosctechlabs, the top 10 most used React component libraries in 2022 are:

1. Material UI
2. React Bootstrap
3. React Router
4. Semantic UI React
5. Ant Design
6. Grommet
7. Chakra UI
8. OnsenUI
9. Rebass
10. Blueprint

There are also many useful npm packages for React developers. According to Betterprogramming, some of the most useful npm packages for React developers include:

1. React Router
2. React Helmet
3. React Icons
4. React Transition Group
5. React Loadable
6. React Lazy Load
7. React Redux
8. React Final Form
9. React Hook Form
10. React Query

### 8. What package do you use to fetch data?

There are several ways to fetch data in React, but the most accessible way is using the Fetch API. The Fetch API is a tool that's built into most modern browsers on the window object (window.fetch) and enables us to make HTTP requests very easily using JavaScript promises.

Another popular package for fetching data in React is Axios. Axios is a promise-based HTTP client that works in the browser and in a Node.js environment.

### 9. What is the purpose of classnames package?

The purpose of the classnames package in React is to make dynamic and conditional className props simpler to work with (especially more so than conditional string manipulation). It is the official replacement for classSet, which was originally shipped in the React.js Addons bundle.

Here is an example of how to use classnames package in a more complex way:

```javascript
import React from 'react';
import classNames from 'classnames';

function Message(props) {
	const { className, isImportant, isRead, isUnread } = props;
	const classes = classNames('message', className, {
		'message--important': isImportant,
		'message--read': isRead,
		'message--unread': isUnread,
	});

	return (
		<div className={classes}>
			<div className="message__header">
				<h2 className="message__title">Message Title</h2>
				<span className="message__date">Today</span>
			</div>
			<div className="message__body">
				<p>Message body goes here.</p>
			</div>
		</div>
	);
}
```

In this example, the `classNames` function is used to generate a className prop for a message in React. The `classNames` function takes any number of arguments which can be a string, object, or array. It returns a string of class names that can be used as a className prop.

### 10. What is the purpose validator package?

The `validator` package is a JavaScript library for string validation and sanitization. You can use this package in your React application to validate user input, such as email addresses, URLs, and more. Here is an example of how to use the `validator` package in a React component:

```jsx
import React, { useState } from 'react';
import validator from 'validator';

function MyForm() {
	const [email, setEmail] = useState('');
	const [isValidEmail, setIsValidEmail] = useState(false);

	const handleEmailChange = (event) => {
		const newEmail = event.target.value;
		setEmail(newEmail);
		setIsValidEmail(validator.isEmail(newEmail));
	};

	return (
		<form>
			<label>
				Email:
				<input type="email" value={email} onChange={handleEmailChange} />
			</label>
			{isValidEmail ? <p>Email is valid</p> : <p>Email is not valid</p>}
		</form>
	);
}
```

In this example, the `validator.isEmail()` function is used to validate the email address entered by the user. The `isValidEmail` state variable is used to keep track of whether the email address is valid or not. The `handleEmailChange()` function is called whenever the user types in the email input field, and it updates the `email` and `isValidEmail` state variables accordingly. The `isValidEmail` variable is used to conditionally render a message to the user indicating whether the email address is valid or not.

## Exercises: Level 2

### 1. Learn how to use Sass

### 2. Learn how to use axios

### 3. Learn how to use moment and react-icons

### 4. Use the validator package to validate the form you had in day 12

Solution: [see file - ValidationWithPackage.js](exercise/ValidationWithPackage.js)

### 5. Use classnames to change a class based on some logic.

<div align="right">

[Back to top ⬆️](#top)

</div>
