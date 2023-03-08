# Exercises: Components and Props

## Exercises: Level 1

1. What is props in a React component ?

   Props is a special keyword in React that stands for properties and is being used to pass data from one component to another and mostly from parent component to child component. We can say props is a data carrier or a means to transport data.

   I hope you are familiar with the JavaScript function. Most of the time, functions with parameters are smart and they can take dynamic data likewise props is a way we pass data or parameter to a component. Let's see the difference between a function and a component.

   প্রপস হল রিঅ্যাক্টের একটি বিশেষ কীওয়ার্ড যা প্রপার্টি বোঝায় এবং এটি একটি কম্পোনেন্ট থেকে অন্য কম্পোনেন্টে এবং বেশিরভাগ ক্ষেত্রে প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে ডেটা পাঠাতে ব্যবহৃত হচ্ছে। আমরা বলতে পারি প্রপস একটি ডেটা ক্যারিয়ার বা ডেটা পরিবহনের একটি মাধ্যম।
   যেমন জাভাস্ক্রিপ্ট ফাংশনে প্যারামিটার থাকে তারা ডায়নামিক ডেটা নিতে পারে একইভাবে প্রপস হল একটি উপায় যার মাধ্যমে আমরা একটি কম্পোনেন্টে ডেটা বা প্যারামিটার পাস করি।

2. How do you access props in a React component ?

   React props is an object which you get instantly when you create a React component.
   We can access it by a special keyword `props`. A component can have one or many props.

   প্রপ্স হচ্ছে একটা অবজেক্ট যেটা আমরা রিয়েক্ট এ একটা কম্পোনেন্ট তৈরি করার সাথে সাথেই পেয়ে যাই। আমরা এইটা এক্সেস করতে পারি `props` কিওয়ার্ড এর মাধ্যমে। একটি কম্পোনেন্টের এক বা একাধিক প্রপ্স থাকতে পারে।

   for example,

   ```js
   // Header Component
   const Header = (props) => {
   	console.log(props); // {welcome:'Welcome to 30 Days Of React'}
   	return (
   		<header>
   			<div className="header-wrapper">
   				<h1>{props.welcome}</h1>
   			</div>
   		</header>
   	);
   };

   // The App, or the parent or the container component
   // Functional Component
   const App = () => {
   	return (
   		<div className="app">
   			<Header welcome="Welcome to 30 Days Of React" />
   		</div>
   	);
   };
   ```

3. What data types can we pass as props to components ?

   Props could be different data types. It could be a `string`, `number`, `boolean`, `array`, `object` or a `function`

4. What is a propTypes?

   The propTypes package helps us to assign the data types of the props we passed to a component.
   এইটা প্যাকেজ - যেটা প্রপস এর ডেটা টাইপ আস্যাইন করতে হেল্প করে, যেই প্রপসগুলো আমারা একটা কম্পোনেন্টে পাস করি।

5. What is a default propTypes?

   The defaultProps can be used when we want to have some default prop types for a component.

   কোন কম্পোনেন্টের যখন ডিফল্ট প্রপ্স টাইপ থাকে তখন defaultProps ব্যাবহার করা হয়।

## Exercises: Level 2

1. Create a functional component and display the following images

![Front end](../images/frontend_technologies.png)

2. Use functional component to create the following design

![News Letter](../images/news_letter_design.png)

## Exercises: Level 3

1.  Use the given hexadecimal color generator in the example to create these random colors. If you don't know how to generate the hexadecimal color you can use [dummy data generator](https://www.30daysofreact.com/dummy-data)

![Hexadecimal colors](../images/hexadecimal_color_exercise.png)

2. Use functional component to design the following user card.

![User Card](../images/user_card_design_jsx.png)
