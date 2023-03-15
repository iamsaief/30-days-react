<div align="center">

<h1> <code>Day 12</code> - 30 Days Of React: Forms</h1>

[<< Day 11](../day-11/README.md) | [Day 13 >>](../day-13/README.md)

</div>

- [Forms](#forms)
- [Exercises](#exercises)
  - [Exercises: Level 1](#exercises-level-1)
    - [1. What is the importance of form?](#1-what-is-the-importance-of-form)
    - [2. How many input types do you know? | 3. Mention at least four attributes of an input element](#2-how-many-input-types-do-you-know--3-mention-at-least-four-attributes-of-an-input-element)
    - [4. What is the importance of htmlFor?](#4-what-is-the-importance-of-htmlfor)
    - [5. Write an input type which is not given in the example if there is?](#5-write-an-input-type-which-is-not-given-in-the-example-if-there-is)
    - [6. What is a controlled input? | 7. What do you need to write a controlled input?](#6-what-is-a-controlled-input--7-what-do-you-need-to-write-a-controlled-input)
    - [8. What event type do you use to listen changes on an input field?](#8-what-event-type-do-you-use-to-listen-changes-on-an-input-field)
    - [9. What is the value of a checked checkbox?](#9-what-is-the-value-of-a-checked-checkbox)
    - [10. When do you use onChange, onBlur, onSubmit?](#10-when-do-you-use-onchange-onblur-onsubmit)
    - [11. What is the purpose of writing e.preventDefault() inside the submit handler method?](#11-what-is-the-purpose-of-writing-epreventdefault-inside-the-submit-handler-method)
    - [12. How do you bind data in React? The first input field example is data binding in React.](#12-how-do-you-bind-data-in-react-the-first-input-field-example-is-data-binding-in-react)
    - [13. What is validation?](#13-what-is-validation)
    - [14. What is the event type you use to listen when an input changes? | 15. What are event types do you use to validate an input?](#14-what-is-the-event-type-you-use-to-listen-when-an-input-changes--15-what-are-event-types-do-you-use-to-validate-an-input)
  - [Exercises: Level 2](#exercises-level-2)
    - [1. Validate the form given above (a gif image or a video will be provided later). First try to validate without using any library then try it with validator.js.](#1-validate-the-form-given-above-a-gif-image-or-a-video-will-be-provided-later-first-try-to-validate-without-using-any-library-then-try-it-with-validatorjs)

# Forms

# Exercises

## Exercises: Level 1

### 1. What is the importance of form?

Form is used to collect data from a user. Its a collection of html elements that allow users to input data on a website, such as text fields, email, password, telephone, checkboxes, radio buttons, etc.
Form is important because it enables users to interact with the website and provide information, requests, feedback, or orders.
Form is also important for web accessibility, which means making websites usable by people with disabilities. Web accessibility ensures that everyone can access the web content and services without barriers.

### 2. How many input types do you know? | 3. Mention at least four attributes of an input element

Here is an example list of some frequently used input types and attributes:

| Input             | Description                                                                         | Attributes                                                                           |
| ----------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `type="text"`     | A single-line text input field                                                      | `name`, `value`, `placeholder`, `maxlength`, `required`, etc.                        |
| `type="password"` | A single-line text input field that masks the entered characters.                   | same as text type                                                                    |
| `type="email"`    | A single-line text input field that validates the entered value as an email address | same as text type, plus `pattern` and `multiple`                                     |
| `type="number"`   | A numeric input field that can have a spinner to increase or decrease the value     | same as text type, plus `pattern` and `multiple`                                     |
| `type="checkbox"` | A checkbox that can be checked or unchecked                                         | `name`, `value`, and `checked`                                                       |
| `type="radio"`    | A radio button that can be selected or deselected.                                  | same as checkbox type, plus `name` must be the same for all radio buttons in a group |
| `type="submit"`   | A button that submits the form data to a server.                                    | `name` and `value`.                                                                  |
| `<label>`         | An element that defines a label for an input element.                               | for must match the `id` of the input element.                                        |

<div align="center">

📚 Learn more, [`input` and `attributes` - MDN][1]

</div>

<!-- Embedded Links -->

[1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input

### 4. What is the importance of htmlFor?

The htmlFor property is used to connect a label element to a form element, such as an **input or a select**.
A label element is used to give a name or description to a form element. The htmlFor property tells the browser which form element belongs to which label by using their id values. This way, when you click on the label, it will focus on the corresponding form element.
This can make your web page easier to use and understand for everyone. **improve accessibility and usability**

### 5. Write an input type which is not given in the example if there is?

```html
<input type="week" name="week" />
```

📚 Learn more, [`input` types - MDN][1]

### 6. What is a controlled input? | 7. What do you need to write a controlled input?

A controlled input is an input element that gets its value from a single source of truth, such as a state variable in React. A controlled input also has a callback function that updates the state variable whenever the input value changes.
This way, the input value is always synchronized with the state variable and can be easily accessed or manipulated. A controlled input is a more "React way" of handling form inputs.

### 8. What event type do you use to listen changes on an input field?

```js
onChange={(e) => setState(e.target.value)}
```

### 9. What is the value of a checked checkbox?

- In JavaScript, you can use the `checked` property to get or set whether a checkbox is checked or not. This property returns a boolean value (`true` or `false`). You can also use the `value` property to get or set the value of a checkbox.

### 10. When do you use onChange, onBlur, onSubmit?

onChange, onBlur and onSubmit are three common event types that you can use to **handle user interactions with form elements**. Here is a brief explanation of each one:

- `onChange`: This event fires **when the value of an element is changed**, such as when the user types something or selects an option. You can use this event to **validate the input**, **update the state**, or **perform other actions** based on the input value.
- `onBlur`: This event fires **when an element loses focus,** such as when the user clicks outside of it or presses Tab. You can use this event to perform actions that only need to happen once after the user finishes editing the input, such as **formatting the input value** or **showing a confirmation message**.
- `onSubmit`: This event fires **when a form is submitted**, such as when the user clicks a submit button or presses Enter. You can use this event to **prevent the default behavior of reloading the page** and **send the form data to a server or another component**.

### 11. What is the purpose of writing e.preventDefault() inside the submit handler method?

The purpose of writing `e.preventDefault()` inside the submit handler method is to prevent the default action that belongs to the submit event, which is reloading or refreshing the page. This can be useful when you want to handle the form data in a different way, such as sending it to a server or another component using Ajax. By preventing the default action, you can also avoid losing any state or input values that you may need later.

### 12. How do you bind data in React? The first input field example is data binding in React.

Applying a state variable as an input's value and updating this state on every new input using `onChange` event listener.

Data binding in React is the process of connecting the view element or user interface, with the data which populates it. In React, **data binding is achieved through state and props**. The state is the internal data of a component that can change over time, while props are external data that are passed down to a component from its parent. When the state or props change, React automatically re-renders the component, updating the UI to reflect the new data.

There are different types of data binding in React, such as `one-way` and `two-way` data binding. One-way data binding means that the **input updates when the state changes**, but the **state doesn’t update when the input is edited**. Two-way data binding means that **both the input and the state update each other when they change**.

```js
import React, { useState } from 'react';

function DataBinding() {
	const [text, setText] = useState(''); // declare a state variable and a setter function

	function handleChange(event) {
		setText(event.target.value); // update the state variable with the input value
	}

	return (
		<div>
			<input type="text" onChange={handleChange} /> // bind the onChange event to the handleChange function
			<p>{text}</p> // display the state variable as text
		</div>
	);
}

export default DataBinding;
```

### 13. What is validation?

The process of checking whether user input is in the correct format and within the constraints set by the application.

### 14. What is the event type you use to listen when an input changes? | 15. What are event types do you use to validate an input?

## Exercises: Level 2

### 1. Validate the form given above (a gif image or a video will be provided later). First try to validate without using any library then try it with [validator.js](https://www.npmjs.com/package/validator).

- Without library
  Solution : `src/day-12/exercise/FormValidation.js`
- With library
  Solution : coming soon ..

<div align="right">

[Back to top ⬆️](#top)

</div>
