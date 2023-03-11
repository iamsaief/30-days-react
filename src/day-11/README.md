<div align="center">

<h1> <code>Day 11</code> - 30 Days Of React: Events</h1>

[<< Day 10](../day-10/README.md) | [Day 12 >>](../day-12/README.md)

</div>

- [Events](#events)
- [Exercises](#exercises)
  - [Exercises: Level 1](#exercises-level-1)
    - [1. What is an event?](#1-what-is-an-event)
    - [2. What is the different between an HTML element event and React event?](#2-what-is-the-different-between-an-html-element-event-and-react-event)
    - [3. Write at least 4 keyboard events? ### 4. Write at least 8 mouse events?](#3-write-at-least-4-keyboard-events--4-write-at-least-8-mouse-events)
    - [5. What are the most common mouse and keyboard events?](#5-what-are-the-most-common-mouse-and-keyboard-events)
    - [6. Write an event specific to input element?](#6-write-an-event-specific-to-input-element)
    - [7. Write an event specific to form element?](#7-write-an-event-specific-to-form-element)
    - [8. Display the coordinate of the view port when a mouse is moving on the body?](#8-display-the-coordinate-of-the-view-port-when-a-mouse-is-moving-on-the-body)
    - [9. What is the difference between onInput, onChange and onBlur?](#9-what-is-the-difference-between-oninput-onchange-and-onblur)
    - [10. Where do we put the onSubmit event ?](#10-where-do-we-put-the-onsubmit-event-)
  - [Exercises: Level 2](#exercises-level-2)

# Events

# Exercises

## Exercises: Level 1

### 1. What is an event?

Event is a result of an action triggered by a human or a computer program, such as clicking on a button, hover on an image, pressing a keyboard, scrolling the mouse wheel and etc.

### 2. What is the different between an HTML element event and React event?

HTML and React handle events differently because React is built on the notion of a virtual DOM, whereas HTML always has access to the real DOM. The following are some of the main differences:

- In HTML, event names are written in lowercase, such as `onclick`, `onchange`, `onsubmit`, etc. In React, event names are written in camelCase, such as `onClick`, `onChange`, `onSubmit`, etc.
- In HTML, event handlers are assigned as strings that invoke a function defined somewhere else, such as `<button onclick="handleClick()">`. In React, event handlers are assigned as function references inside curly braces, such as `<button onClick={handleClick}>`.
- In HTML, you can prevent the default behavior of an event by returning false from the event handler function. In React, you have to call `preventDefault()` explicitly on the event object.
- In HTML, you can access the native event object directly from the event handler function. In React, you have to use `e.nativeEvent` to access the native event object.

### 3. Write at least 4 keyboard events? ### 4. Write at least 8 mouse events?

There are many types of mouse and keyboard events, depending on the programming language and framework you are using. Here are some common ones:

- Mouse events: These are events that occur when the user interacts with a pointing device (such as a mouse) over an element.
  Some common mouse events are `onClick`, `onDblClick`, `onMouseOver`, `onMouseOut`, `onMouseEnter`, `onMouseLeave`, `onContextMenu`, `onMouseDown`, `onMouseUp` and etc.

- Keyboard events: These are events that occur when the user presses, releases, or holds a key or a combination of keys on the keyboard.
  Some common keyboard events are - `onKeyUp`, `onKeyDown`, `onKeyPress`, `onCut`, `onCopy`, `onPaste` etc.

### 5. What are the most common mouse and keyboard events?

### 6. Write an event specific to input element?

`onInput`

### 7. Write an event specific to form element?

`onSubmit`

### 8. Display the coordinate of the view port when a mouse is moving on the body?

```js
import React, { useState, useEffect } from 'react';

function MouseCoordinate() {
	// Create a state variable to store coordinate
	const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });

	// Use useEffect hook to add event listener for mousemove
	useEffect(() => {
		// Define event handler function
		function handleMouseMove(event) {
			// Get screenX and screenY properties of event object
			const x = event.screenX;
			const y = event.screenY;

			// Update state variable with x and y values
			setCoordinate({ x, y });
		}

		// Add event listener for mousemove on window object
		window.addEventListener('mousemove', handleMouseMove);

		// Remove event listener on cleanup
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []); // Run only once

	// Return JSX element that renders coordinate on screen
	return (
		<div>
			<h3>Screen X: {coordinate.x}</h3>
			<h3>Screen Y: {coordinate.y}</h3>
		</div>
	);
}

export default MouseCoordinate;
```

Solution: `src/day-11/exercise/MouseCoordinate.js`

### 9. What is the difference between onInput, onChange and onBlur?

These are three different events that can occur on input elements in HTML and React.

<!-- - `onInput` occurs when the value of an input or textarea element is changed. It fires immediately after the content has been changed, regardless of how it was changed (by typing, pasting, etc.).
- `onChange` occurs when the value of an input or textarea element is changed. It fires when the element loses focus after its value has been changed, or when the user presses enter. It does not fire for every change, unlike onInput.
- `onBlur` occurs when an input or textarea element loses focus. It fires whether the value of the element has been changed or not. It can be used to validate user input or execute code after they leave the field. -->

<table>
  <thead>
    <th><code>onInput</code></th>
    <th><code>onChange</code></th>
    <th><code>onBlur</code></th>
  </thead>
  <tbody>
  <tr>
    <td>occurs when the value of an input or textarea element is changed. </td>
    <td>occurs when the value of an input or textarea element is changed. </td>
    <td>occurs when an input or textarea element loses focus. </td>
  </tr>
  <tr>
    <td>It fires immediately after the content has been changed, regardless of how it was changed (by typing, pasting, etc.).</td>
    <td>It fires when the element loses focus after its value has been changed, or when the user presses enter. It does not fire for every change, unlike onInput.</td>
    <td>It fires whether the value of the element has been changed or not. It can be used to validate user input or execute code after they leave the field.</td>
  </tr>
  </tbody>
</table>

### 10. Where do we put the onSubmit event ?

In the `form` element.

## Exercises: Level 2

Implement the following using onMouseEnter event

![On mouse enter event](https://raw.githubusercontent.com/Asabeneh/30-Days-Of-React/master/images/react_event_on_mouse_enter.gif)

Solution: `src/day-11/exercise/RandomCoordinates.js`

Coming ...

<div align="right">

[Back to top ⬆️](#top)

</div>
