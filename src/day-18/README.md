<div align="center">

<h1> <code>Day 18</code> - 30 Days Of React <br>Fetch and Axios</h1>

[<< Day 16](../day-16/README.md) | [Day 18 >>](../day-18/README.md)

</div>

- [Fetch and Axios](#fetch-and-axios)
- [Exercises](#exercises)
  - [Exercises: Level 1](#exercises-level-1)
    - [1. What is HTTP request?](#1-what-is-http-request)
    - [2. What are the most common HTTP requests?](#2-what-are-the-most-common-http-requests)
    - [3. What is fetch?](#3-what-is-fetch)
    - [5. What is axios?](#5-what-is-axios)
    - [5. What is the difference between fetch and axios?](#5-what-is-the-difference-between-fetch-and-axios)
    - [6. Do you prefer fetch to axios for make HTTP requests?](#6-do-you-prefer-fetch-to-axios-for-make-http-requests)
  - [Exercises: Level 2](#exercises-level-2)
    - [1. Find the average metric weight and life span of cats in the following API. There are 67 breeds of cats in the API.](#1-find-the-average-metric-weight-and-life-span-of-cats-in-the-following-api-there-are-67-breeds-of-cats-in-the-api)
  - [Exercises: Level 3](#exercises-level-3)
    - [1. How many countries do have cat breeds?](#1-how-many-countries-do-have-cat-breeds)
    - [2. Which country has the highest number of cat breeds?](#2-which-country-has-the-highest-number-of-cat-breeds)
    - [3. Arrange countries in ascending order based on the number of cat breeds they have?](#3-arrange-countries-in-ascending-order-based-on-the-number-of-cat-breeds-they-have)

# Fetch and Axios

# Exercises

## Exercises: Level 1

### 1. What is HTTP request?

An HTTP request is a message sent by a client to a server to initiate an action on the server. It works as a request-response protocol between a client and server. For example, a client (browser) sends an HTTP request to the server, and then the server returns a response to the client. The response contains status information about the request and may also contain the requested content.

The first line of the message includes the request message from the client to the server, the method which is applied to the resource, identifier of the resource, and the protocol version.

### 2. What are the most common HTTP requests?

The most commonly used HTTP request methods are `GET, POST, PUT, PATCH, and DELETE`. These are equivalent to the CRUD operations (create, read, update, and delete).

- `GET`: GET request is used to read/retrieve data from a web server.
- `POST`: POST request is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
- `PUT`: PUT request is used to update a resource on the server.
- `PATCH`: PATCH request is used to partially update a resource on the server.
- `DELETE`: DELETE request is used to delete a resource on the server.

### 3. What is fetch?

`Fetch API` is a built-in browser API to make HTTP requests.
It provides an interface for fetching resources (including across the network). It provides a JavaScript interface for accessing and manipulating parts of the protocol, such as requests and responses. It also provides a global `fetch()` method that provides an easy, logical way to fetch resources asynchronously across the network.

### 5. What is axios?

`Axios` is a JavaScript library that is used to make HTTP requests from node.js or XMLHttpRequests from the browser. It provides a more powerful and flexible feature set than XMLHttpRequest and provides a JavaScript interface for accessing and manipulating parts of the protocol, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network. This kind of functionality was previously achieved using XMLHttpRequest

### 5. What is the difference between fetch and axios?

| Feature               | Fetch                                                                     | Axios                                                         |
| --------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Browser Support       | Fetch is supported by the latest browser only and IE does not support it. | Axios supports all browsers including IE.                     |
| Request Function      | Fetch request function includes the url as parameter.                     | Axios request function does not include the url as parameter. |
| URL in Request Object | Fetch has no url in request object.                                       | Axios has url in request object.                              |
| Data                  | Fetch's body has to be stringified.                                       | Axios' data contains the object.                              |

### 6. Do you prefer fetch to axios for make HTTP requests?

Both Fetch and Axios are great for making HTTP requests. Here are some of the differences between the two:

- Fetch is built into modern browsers, so it doesn't require any additional libraries to use. Axios, on the other hand, is a third-party library that you need to install separately.
- Fetch is a bit more verbose than Axios, so it can be harder to use for beginners. Axios provides a simpler, more intuitive API.
- Fetch is a bit more limited than Axios in terms of functionality. For example, Fetch doesn't provide a way to cancel requests, while Axios does.
- Fetch is a bit faster than Axios, but the difference is usually negligible.

In general, if you're working on a small project or just need to make a few simple HTTP requests, Fetch is a good choice. If you're working on a larger project or need more advanced functionality, Axios is probably the better choice.

## Exercises: Level 2

### 1. Find the average metric weight and life span of cats in the following [API](https://api.thecatapi.com/v1/breeds). There are 67 breeds of cats in the API.

![Average cat weight and age](https://raw.githubusercontent.com/Asabeneh/30-Days-Of-React/master/images/average_cat_weight_and_age.png)

## Exercises: Level 3

### 1. How many countries do have cat breeds?

### 2. Which country has the highest number of cat breeds?

### 3. Arrange countries in ascending order based on the number of cat breeds they have?

Solution: [check `CatsParadise.js`](src/day-18/exercise/CatsParadise.js)

<div align="right">

[Back to top ⬆️](#top)

</div>
