<div align="center">

<h1> <code>Day 13</code> - 30 Days Of React: Uncontrolled Component</h1>

[<< Day 12](../day-12/README.md) | [Day 14 >>](../day-14/README.md)

</div>

- [Uncontrolled Component](#uncontrolled-component)
- [Exercises](#exercises)
  - [Exercises: Level 1](#exercises-level-1)
    - [1. What is a controlled input? | 2. What is an uncontrolled input?](#1-what-is-a-controlled-input--2-what-is-an-uncontrolled-input)
    - [3. How do you get a content of a certain HTML element in React ?](#3-how-do-you-get-a-content-of-a-certain-html-element-in-react-)
    - [4. Why it is not a good idea to touch the DOM directly in React ?](#4-why-it-is-not-a-good-idea-to-touch-the-dom-directly-in-react-)
    - [5. What is most frequently used in React ? Controlled or Uncontrolled input.](#5-what-is-most-frequently-used-in-react--controlled-or-uncontrolled-input)
    - [6. What do you need to write uncontrolled input?](#6-what-do-you-need-to-write-uncontrolled-input)
    - [7. Does state require to write uncontrolled input?](#7-does-state-require-to-write-uncontrolled-input)
    - [8. When do you use uncontrolled input? | 9. When do you use controlled input?](#8-when-do-you-use-uncontrolled-input--9-when-do-you-use-controlled-input)
    - [10. Do you use a controlled or uncontrolled input to validate form input fields?](#10-do-you-use-a-controlled-or-uncontrolled-input-to-validate-form-input-fields)

# Uncontrolled Component

To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM. In uncontrolled input we get data from input fields like traditional HTML form data handling

# Exercises

## Exercises: Level 1

### 1. What is a controlled input? | 2. What is an uncontrolled input?

In React, there are two types of form inputs: **controlled** and **uncontrolled** inputs¹.

A **controlled input** is an input that gets its value from a single source of truth, usually the component state. The value of the input is set by the state and the state is updated when the input value changes. This allows the component to control the input value and to perform validation and other operations on it.

An **uncontrolled input** is an input that maintains its own internal state. The value of the input is set by the user and is not controlled by the component. This means that the component cannot perform validation or other operations on the input value.

Controlled inputs are generally preferred over uncontrolled inputs because they provide more control and flexibility over the input value. However, uncontrolled inputs can be useful in certain situations, such as when you need to access the input value from outside the component.

### 3. How do you get a content of a certain HTML element in React ?

In React, you can use the `ref` attribute to get a reference to an HTML element created by `useRef()` hook and then use the **innerHTML** property to get the content of the element.

Here's an example:

```jsx
import React, { useRef } from 'react';

function MyComponent() {
	const myRef = useRef(null);

	function handleClick() {
		console.log(myRef.current.innerHTML);
	}

	return (
		<div ref={myRef}>
			<p>Hello, world!</p>
			<button onClick={handleClick}>Get content</button>
		</div>
	);
}
```

In this example, we create a reference to the **div** element using the **useRef** hook. We then create a function called **handleClick** that logs the content of the **div** element to the console using the **innerHTML** property. Finally, we render the **div** element, along with a **button** that calls the **handleClick** function when clicked.

### 4. Why it is not a good idea to touch the DOM directly in React ?

In React, it is not a good idea to touch the DOM directly because _it can lead to unpredictable behavior and performance issues_. Instead, React uses a **virtual DOM** which is a lightweight copy of the actual DOM. React updates the virtual DOM and then compares it with the actual DOM to determine what has changed. This process is called **reconciliation** and it helps to minimize the number of changes that need to be made to the actual DOM, which in turn improves performance.

Modifying the actual DOM directly can also lead to **memory leaks** and **security vulnerabilities**. It can also make the code harder to maintain and debug.

### 5. What is most frequently used in React ? Controlled or Uncontrolled input.

In React, **controlled inputs** are generally preferred over **uncontrolled inputs** because they provide more control and flexibility over the input value. However, uncontrolled inputs can be useful in certain situations, such as when you need to access the input value from outside the component.

### 6. What do you need to write uncontrolled input?

To write an uncontrolled component in React, you can use a **ref** to get form values from the DOM instead of writing an event handler for every state update. Here's an example:

```jsx
import React, { useRef } from 'react';

function MyComponent() {
	const myRef = useRef(null);

	function handleClick() {
		console.log(myRef.current.value);
	}

	return (
		<div>
			<input type="text" ref={myRef} />
			<button onClick={handleClick}>Get value</button>
		</div>
	);
}
```

In this example, we create a reference to the **input** element using the **useRef** hook. We then create a function called **handleClick** that logs the value of the **input** element to the console using the **value** property. Finally, we render the **input** element, along with a **button** that calls the **handleClick** function when clicked.

### 7. Does state require to write uncontrolled input?

No, state variables are not required for uncontrolled inputs.

### 8. When do you use uncontrolled input? | 9. When do you use controlled input?

In React, you can use either controlled or uncontrolled components to handle form data¹.

A `controlled component` is one where React manages the form data handling for you. You can use the **value** prop to set the value of the input element, and the **onChange** prop to handle changes to the input element.

An `uncontrolled component` is one where the form data handling is left up to you. You can use a **ref** to get the value of the input element, and you can use the **defaultValue** prop to set the initial value of the input element.

In general, you should use controlled components when you need to perform some validation or other processing on the form data before it is submitted. You should use uncontrolled components when you need to handle the form data in a more traditional way, or when you need to integrate with other non-React code.

### 10. Do you use a controlled or uncontrolled input to validate form input fields?

You can use either controlled or uncontrolled components to validate form input fields in React. However, controlled components are generally preferred for form validation because they allow you to perform validation or other processing on the form data before it is submitted.

In a controlled component, you can use the **value** prop to set the value of the input element, and the **onChange** prop to handle changes to the input element. You can also use the **onBlur** prop to handle when the input element loses focus.

<div align="right">

[Back to top ⬆️](#top)

</div>
