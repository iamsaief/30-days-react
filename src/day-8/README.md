    	<div align="center">

<h1> Day 8 - 30 Days Of React: States </h1>

[<< Day 7](../day-7/README.md) | [Day 9 >>](../day-9/README.md)

</div>

- [States](#states)
- [Exercises](#exercises)
  - [Exercises: Level 1](#exercises-level-1)
    - [1. What was your state today? Are you happy? I hope so. If you manage to make it this far you should be happy.](#1-what-was-your-state-today-are-you-happy-i-hope-so-if-you-manage-to-make-it-this-far-you-should-be-happy)
    - [2. What is state in React ?](#2-what-is-state-in-react-)
    - [3. What is the difference between props and state in React ?](#3-what-is-the-difference-between-props-and-state-in-react-)
    - [4. How do you access state in a React component ?](#4-how-do-you-access-state-in-a-react-component-)
    - [5. How do you set a state in a React component ?](#5-how-do-you-set-a-state-in-a-react-component-)
  - [Exercises: Level 2](#exercises-level-2)
    - [1. Use React state to change the background of the page. You can use this technique to apply a dark mode for your portfolio.](#1-use-react-state-to-change-the-background-of-the-page-you-can-use-this-technique-to-apply-a-dark-mode-for-your-portfolio)
    - [1. After long time of lock down, you may think of traveling and you do not know where to go. You may be interested to develop a random country selector that selects your holiday destination.](#1-after-long-time-of-lock-down-you-may-think-of-traveling-and-you-do-not-know-where-to-go-you-may-be-interested-to-develop-a-random-country-selector-that-selects-your-holiday-destination)
  - [Exercises: Level 3](#exercises-level-3)

# States

# Exercises

## Exercises: Level 1

### 1. What was your state today? Are you happy? I hope so. If you manage to make it this far you should be happy.

### 2. What is state in React ?

State is an object in react which let the component re-render when state data changes

State is a way of managing data that belongs to a React component. State is an object that stores property values that may change over time or based on user interactions. When the state object changes, the component re-renders to reflect the new data.

State is different from props, which are read-only data that are passed from parent to child components. State is private to each component and can only be updated by using methods like `setState()` or hooks like `useState()`.

### 3. What is the difference between props and state in React ?

Props and state are both ways of managing data in React components. However, they have some key differences:

- Props are **passed** from parent to child components, while state is **initialized** and **managed** by the component itself.
- Props are **read-only**, meaning they cannot be modified by the component that receives them. State can be **updated** by using methods like `setState()` or hooks like `useState()`.
- Props are used for passing data **down** the component tree, while state is used for managing component-specific data that may change over time.

### 4. How do you access state in a React component ?

There are different ways to access state in a React component depending on how you define your component and where you want to access it:

- If you use a **class component**, you can access state by using `this.state` inside your component methods. You can also pass state as props to child components by using `this.state` as an attribute value.
- If you use a **functional component**, you can access state by using hooks like `useState()` which returns an array with two elements: the current state value and a function to update it. You can also pass state as props to child components by using the state value as an attribute value.
- If you want to access state of **another component**, you cannot do it directly because state is private to each component. You can either lift the state up to a common parent component and pass it down as props, or use a global store like Redux.

### 5. How do you set a state in a React component ?

There are different ways to set a state in a React component depending on how you define your component:

- If you use a **class component**, you can set a state by using `this.setState()` method inside your component methods. This method takes an object with the updated state values and merges it with the current state. You can also pass a function to `this.setState()` that receives the previous state and props as arguments and returns an object with the updated state values.
- If you use a **functional component**, you can set a state by using hooks like `useState()` which returns an array with two elements: the current state value and a function to update it. This function takes either a new state value or a function that receives the previous state value as an argument and returns a new state value.

## Exercises: Level 2

### 1. Use React state to change the background of the page. You can use this technique to apply a dark mode for your portfolio.

![Change Background](https://raw.githubusercontent.com/Asabeneh/30-Days-Of-React/master/images/08_day_changing_background_exercise.gif)
Solution: `src/day-8/index.js`

### 1. After long time of lock down, you may think of traveling and you do not know where to go. You may be interested to develop a random country selector that selects your holiday destination.

![Change Background](https://raw.githubusercontent.com/Asabeneh/30-Days-Of-React/master/images/08_day_select_country_exercise.gif)
Solution: `src/day-8/exercises/RandomCountry.js`

## Exercises: Level 3

Coming......

<div align="right">

[Back to top ⬆️](#top)

</div>
