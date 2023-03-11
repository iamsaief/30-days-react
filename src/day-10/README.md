<div align="center">

<h1> <code>Day 10</code> 30 Days Of React: React Project Folder Structure</h1>

[<< Day 9](../day-9/README.md) | [Day 11 >>](../day-11/README.md)

</div>

- [React Project Folder Structure](#react-project-folder-structure)
- [Exercises](#exercises)
  - [Exercises Level 1](#exercises-level-1)
    - [1. What is the importance of React Folder Structure and File Naming](#1-what-is-the-importance-of-react-folder-structure-and-file-naming)
    - [2. How do you export file](#2-how-do-you-export-file)
    - [3. How do you import file](#3-how-do-you-import-file)
    - [4. Make a component of module and export it as named or default export](#4-make-a-component-of-module-and-export-it-as-named-or-default-export)
    - [5. Make a component or module and import it](#5-make-a-component-or-module-and-import-it)
    - [6. Change all the components you have to different folder structure](#6-change-all-the-components-you-have-to-different-folder-structure)
  - [Exercises Level 2](#exercises-level-2)
    - [1. Make a simple portfolio using the components we have created so far. Implement a dark mode by using the function we wrote on day 8 challenge.](#1-make-a-simple-portfolio-using-the-components-we-have-created-so-far-implement-a-dark-mode-by-using-the-function-we-wrote-on-day-8-challenge)
  - [Exercises Level 3](#exercises-level-3)

# React Project Folder Structure

# Exercises

## Exercises Level 1

### 1. What is the importance of React Folder Structure and File Naming

React Folder Structure and File Naming are important for **organizing** your React project and **making it easy to maintain and scale**. There is no official convention for naming folders and files in React, but there are some common approaches that you can follow.

One approach is to **group files by features or routes**, so that each folder contains all the related components, styles, tests, and utilities for a specific feature or route.
Another approach is to **group files by type**, so that each folder contains all the components, styles, tests, or utilities of the same type.
A third approach is to **use a hybrid of both methods**, where you group files by features or routes at the top level, and then by type at the lower levels.

The **naming** of individual files can also vary depending on your preference. Some people use `TitleCase.js` for component files and `camelCase.js` for other files. Some people use `smallcase.js or small-case.js` for all files. Some people use index.js as the entry point for each folder and name other files accordingly.

The best way to choose a folder structure and file naming convention is to consider your **project's size, complexity, and requirements**. You should also follow a consistent style throughout your project and document it clearly for other developers who might work on it.

### 2. How do you export file

### 3. How do you import file

### 4. Make a component of module and export it as named or default export

### 5. Make a component or module and import it

Using the `export` keyword. There are two types of exports: **name** and **default**.

```js
// Named export
export function Button() {}

// Default export
export default function Button() {}

// Default export (recommended approach)
function Button() {}
export default Button
```

Using the `import` keyword

```js
// Named export
import { Button } from './components/Button';

// Default export
import Btn from './components/Button';
```

Module import export in React is a way of making your components more **modular and reusable** in other files. You can use either **ES6 syntax** or **CommonJS syntax** for importing and exporting modules.

**ES6 syntax** uses `import` and `export` keywords to import and export modules. You can use either **named exports** or **default exports**. Named exports allow you to export **multiple values** from a module, but you have to use **curly braces** and the **exact name** when importing them. Default exports allow you to export **only one value** from a module, but you can use **any name** when importing it.

**CommonJS syntax** uses `require` and `module.exports` keywords to import and export modules. You can use either named exports or default exports. Named exports allow you to export **multiple values** from a module, but you have to use **dot notation** and the **exact name** when importing them. Default exports allow you to export only **one value** from a module, but you can use **any name** when importing it.

The best way to choose a module import export syntax is to consider your project's compatibility, consistency, and preference. You should also follow a consistent style throughout your project and document it clearly for other developers who might work on it.

Here is an example of ES6 syntax for module import export:

Let's say you have a file called `math.js` that exports two functions: `add` and `multiply`.

```js
// math.js

// Named export
export function add(a, b) {
	return a + b;
}

// Default export
export default function multiply(a, b) {
	return a * b;
}
```

To use these functions in another file, you can import them using either named imports or default imports.

```js
// app.js

// Named import
import { add } from './math.js';

console.log(add(2, 3)); // 5

// Default import
import multiply from './math.js';

console.log(multiply(2, 3)); // 6

// You can also use both types of imports together
import multiply, { add } from './math.js';

console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6
```

### 6. Change all the components you have to different folder structure

## Exercises Level 2

### 1. Make a simple portfolio using the components we have created so far. Implement a dark mode by using the function we wrote on day 8 challenge.

## Exercises Level 3

Coming ...

<div align="right">

[Back to top ⬆️](#top)

</div>
