<div align="center">

<h1> <code>Day 14</code> - 30 Days Of React <br> Component Life Cycles</h1>

[<< Day 13](../day-13/README.md) | [Day 15 >>](../day-15/README.md)

</div>

- [Component Life Cycles](#component-life-cycles)
  - [✅ Life-cycle methods](#-life-cycle-methods)
  - [✅ Life-cycle methods in functional component](#-life-cycle-methods-in-functional-component)
- [Exercises](#exercises)
  - [Exercises: Level 1](#exercises-level-1)
    - [1. What is component life cycles](#1-what-is-component-life-cycles)
    - [2. What is the purpose of life cycles](#2-what-is-the-purpose-of-life-cycles)
    - [3. What are the three stages of a component life cycle](#3-what-are-the-three-stages-of-a-component-life-cycle)
    - [4. What does mounting means? | 5. What does updating means | 6. What does unmounting means?](#4-what-does-mounting-means--5-what-does-updating-means--6-what-does-unmounting-means)
    - [7. What is the most common built-in mounting life cycle method?](#7-what-is-the-most-common-built-in-mounting-life-cycle-method)
    - [8. What are the mounting life cycle methods?](#8-what-are-the-mounting-life-cycle-methods)
    - [9. What are the updating life cycle methods?](#9-what-are-the-updating-life-cycle-methods)
    - [10. What is the unmounting life cycle method?](#10-what-is-the-unmounting-life-cycle-method)

# Component Life Cycles

Lifecycle methods in React are methods that are called at different stages of a component’s life. They are used to perform actions at specific times in the component’s lifecycle, such as when the component is mounted, updated, or unmounted.

## ✅ Life-cycle methods

To use lifecycle methods in React, you can declare them in your component class. React will then call them when the component is going from one phase to another.

Here are the lifecycle methods in React:

- **componentDidMount()**: This method is called after the component is mounted and is used to fetch data from an API or to set up event listeners.

- **shouldComponentUpdate()**: This method is called before the component is updated and is used to determine if the component should be updated or not.

- **componentDidUpdate()**: This method is called after the component is updated and is used to update the DOM or to fetch new data from an API.

- **componentWillUnmount()**: This method is called before the component is unmounted and is used to clean up any resources used by the component.

## ✅ Life-cycle methods in functional component

Functional components do not have lifecycle methods. However, you can use the `useEffect()` hook to replicate lifecycle behavior in functional components.

Here are the equivalent lifecycle methods in functional components:

- **componentDidMount()**: This method can be replicated using the **useEffect()** hook with an empty dependency array.

- **shouldComponentUpdate()**: This method can be replicated using the **React.memo()** higher-order component.

- **componentDidUpdate()**: This method can be replicated using the **useEffect()** hook with a dependency array.

- **componentWillUnmount()**: This method can be replicated using the **useEffect()** hook with a cleanup function.

# Exercises

## Exercises: Level 1

### 1. What is component life cycles

Component life cycle is the process of `mounting`, `updating` and `unmounting` - destroying a component in a React application.
A component can be mounted or rendered the first time, can be updated by changing the data and also can be destroyed whenever it is not needed. Component has three main phases:

1. Mounting
2. Updating
3. Unmounting

### 2. What is the purpose of life cycles

Lifecycle methods in React are methods that are called at different stages of a component's life. They are used to perform actions at specific times in the component's lifecycle, such as when the component is mounted, updated, or unmounted.

Developers often need lifecycle events to handle various effects such as -

- _fetching data on the mount_
- _cleaning up before the component unmounts_,
- _sanitizing props when the component updates_, etc.

Lifecycle methods can be used to optimize the performance of a React application. For example, you can use the shouldComponentUpdate method to prevent unnecessary re-renders of a component.

### 3. What are the three stages of a component life cycle

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases: Mounting, Updating, and Unmounting.

- **Mounting**: This is the stage where the component is inserted into the DOM. This phase only occurs once and in this phase, a component contains the default Props and initial State.

- **Updating**: This phase occurs when a component is updated whenever there is a change in the component's state or props. React has five built-in methods that get called, in this order, when a component is updated: getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), and componentDidUpdate().

- **Unmounting**: This phase occurs when a component is removed from the DOM.

### 4. What does mounting means? | 5. What does updating means | 6. What does unmounting means?

See answer in the pervious question

### 7. What is the most common built-in mounting life cycle method?

The most common built-in mounting lifecycle method in React is the `constructor()` method. This method is called before the component is mounted and is used to initialize the component’s state and bind event handlers1

### 8. What are the mounting life cycle methods?

The mounting lifecycle methods in React are called in the following order:

1. **constructor()**: This method is called when the component is first initialized and is used to set the initial state of the component.

2. **static getDerivedStateFromProps()**: This method is called when the component is first initialized and whenever the component receives new props.

3. **render()**: This method is called when the component is first initialized and whenever the component is updated.

4. **componentDidMount()**: This method is called after the component is mounted and is used to fetch data from an API or to set up event listeners.

### 9. What are the updating life cycle methods?

The updating lifecycle methods in React are called in the following order:

1. **static getDerivedStateFromProps()**: This method is called whenever the component receives new props or state.

2. **shouldComponentUpdate()**: This method is called after the **getDerivedStateFromProps()** method and is used to determine whether the component should update or not.

3. **render()**: This method is called after the **shouldComponentUpdate()** method and is used to render the updated component.

4. **getSnapshotBeforeUpdate()**: This method is called after the **render()** method and is used to capture information from the DOM before it is updated.

5. **componentDidUpdate()**: This method is called after the component is updated and is used to perform any side effects, such as fetching data from an API or updating the DOM.

### 10. What is the unmounting life cycle method?

The unmounting lifecycle method in React is called when a component is removed from the DOM. The method is called **componentWillUnmount()** and is used to perform any cleanup operations, such as removing event listeners or clearing intervals or timeouts, before the component is removed from the DOM.

<div align="right">

[Back to top ⬆️](#top)

</div>
