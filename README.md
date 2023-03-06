<div align="center">
  <h1> Day 6 - 30 Days Of React: Mapping Arrays </h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
</div>

- [Mapping arrays](#mapping-arrays)
- [Exercises](#exercises)
  - [Exercises: Level 1](#exercises-level-1)
  - [Exercises: Level 2](#exercises-level-2)
  - [Exercises: Level 3](#exercises-level-3)

# Mapping arrays

# Exercises

## Exercises: Level 1

1. Why you need to map an array ?

   The `Array.map()` method allows us to iterate over an array and modify its elements using a callback function. The callback function will then be executed on each of the array's elements, returning a new array as the result.

   In React, we use map to modify an array to list of JSX by adding a certain HTML elements to each element of an array.
   Generally, data is in the form of an array/an array of objects. To render this array/array of objects most of the time we modify the data using `map`.

2. Why we need keys during mapping an array ?

   `Keys` help React to identify items which have changed, added, or removed. It should be given to the elements inside the array to give the elements a stable unique identity.

   In React, during mapping if we do not pass key it raises a warning on the browser.
   If the data does not have an id, which is unusual, we have to find a way to create a unique identifier for each element when we map it.

3. What is the importance of destructuring your code ?

   Destructuring is a feature of JavaScript that allows you to extract values from arrays or objects and assign them to variables in a concise and convenient way. It can help you organize your code and make it simpler, modular, more readable, and reusable.

   for examples,

- Array destructuring: You can use square brackets [] to assign values from an array to variables. For example:

```javascript
const foo = ['one', 'two', 'three'];
const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

- Object destructuring: You can use curly braces {} to assign values from an object to variables. For example:

```javascript
let person = { firstName: 'John', lastName: 'Doe' };
let { firstName, lastName } = person;
console.log(firstName); // "John"
console.log(lastName); // "Doe"
```

1. Does destructuring make your code clean and easy to read ?

   Yes, destructuring can make your code clean and easy to read by reducing the amount of code you need to write and making it clear what values you are using from arrays or objects. For example, instead of writing:

```javascript
let person = { firstName: 'John', lastName: 'Doe' };
let firstName = person.firstName;
let lastName = person.lastName;
```

You can write:

```javascript
let person = { firstName: 'John', lastName: 'Doe' };
let { firstName, lastName } = person;
```

This way, you can avoid repeating yourself and make your code more concise.

## Exercises: Level 2

1. In the following design, evens are green, odds are yellow and prime numbers are red. Build the following colors using React component

![Number Generator](../images/day_6_number_generater_exercise.png)

2. Create the following hexadecimal colors using React component

![Number Generator](../images/day_6_hexadecimal_colors_exercise.png)

## Exercises: Level 3

1.Make the following bar group using the given [data](../06_Day_Map_List_Keys/06_map_list_keys_boilerplate/src/data/ten_most_highest_populations.js)

![Ten most highest populations](../images/day_6_ten_highest_populations_exercise.png)
