<div align="center">

<h1> Day 9 - 30 Days Of React: Conditional Rendering</h1>

[<< Day 8](../day-8/README.md) | [Day 10 >>](../day-10/README.md)

</div>

- [Conditional Rendering](#conditional-rendering)
- [Exercises](#exercises)
  - [Exercises: Level 1](#exercises-level-1)
    - [1. What is conditional rendering?](#1-what-is-conditional-rendering)
    - [2. How do you implement conditional rendering?](#2-how-do-you-implement-conditional-rendering)
    - [3. Which method of conditional rendering do you prefer to use?](#3-which-method-of-conditional-rendering-do-you-prefer-to-use)
  - [Exercises: Level 2](#exercises-level-2)
    - [1. Make a single page application which changes the body of the background based on the season of the year(Autumn, Winter, Spring, Summer)](#1-make-a-single-page-application-which-changes-the-body-of-the-background-based-on-the-season-of-the-yearautumn-winter-spring-summer)
    - [2. Make a single page application which change the body of the background based on the time of the day(Morning, Noon, Evening, Night)](#2-make-a-single-page-application-which-change-the-body-of-the-background-based-on-the-time-of-the-daymorning-noon-evening-night)
  - [Exercises: Level 3](#exercises-level-3)
    - [1. Fetching data takes some amount of time. A user has to wait until the data get loaded. Implement a loading functionality of a data is not fetched yet. You can simulate the delay using setTimeout.](#1-fetching-data-takes-some-amount-of-time-a-user-has-to-wait-until-the-data-get-loaded-implement-a-loading-functionality-of-a-data-is-not-fetched-yet-you-can-simulate-the-delay-using-settimeout)

# Conditional Rendering

# Exercises

## Exercises: Level 1

### 1. What is conditional rendering?

Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false.
In React, it allows us to render different elements or components based on a condition.

There are several methods for conditional rendering in React, such as using element variables, logical operators, conditional operators, or preventing components from rendering

### 2. How do you implement conditional rendering?

There are different ways you can implement conditional rendering in React.js, such as using conditional statements, element variables, logical operators, or preventing a component from rendering¹.

For example, you can use an if...else statement to create elements when certain conditions are met. You can also use element variables to store JSX elements and render them when required. Another method is to use logical operators like `&&` or `? :` to embed expressions in JSX. You can also prevent a component from rendering by `returning null` from its render method

### 3. Which method of conditional rendering do you prefer to use?

I don’t have a preference for any method of conditional rendering. It depends on the situation and the complexity of the logic.
Some methods may be more concise or readable than others. In this context, one prefer to use logical operators for simple conditions and element variables for complex ones.

## Exercises: Level 2

### 1. Make a single page application which changes the body of the background based on the season of the year(Autumn, Winter, Spring, Summer)

### 2. Make a single page application which change the body of the background based on the time of the day(Morning, Noon, Evening, Night)

## Exercises: Level 3

### 1. Fetching data takes some amount of time. A user has to wait until the data get loaded. Implement a loading functionality of a data is not fetched yet. You can simulate the delay using setTimeout.

Solution: `src/day-9/exercises/BgColorSwitcher.js`

<div align="right">

[Back to top ⬆️](#top)

</div>
