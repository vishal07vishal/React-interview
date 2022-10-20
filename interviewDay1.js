// Que-1. What is Virtual DOM ?
// Ans- The Virtual DOM (VDOM) is an in-memory representation of Real DOM. 
// The representation of a UI is kept in memory and synced with the "real" DOM. 
// It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation. (or) DOM is a document object model, created by converting HTML CSS and JS Real DOM, which is an object which gets created whenever any React application gets loaded on the screen for the first time., whenever React components gets mounted on the screen for the first time. Now when any user makes any changes on the screen like button click because of which the state variable will get updated so in this case the changes will not directly go to Real DOM , instead in react we have concept known Virtual DOM. So we are having two virtual doms, one virtual dom gets created at the time of mounting of react component so it is a copy of your real dom. Another virtual dom is the dom which contains the new changes, updated state variables values. Now these two virtual doms will get compared with each other and will check for the new changes. this complete procedure is known as diffing algorithm. Now the new changes will be updated in your Real dom. this procedure is known as Recoinciliation.

// Que-2.What is SPA?
// Ans- SPA stand for Single Page Application. It is a very common way of programming websites these days.
// When you navigate the browser will only re-render the context without refreshing the website.
// THis means that URL of your website will not change completely (page will not reload), instead it will keep getting context and rewriting the DOM with the instead of loading a new page.


// Que-3. What is difference between class and functional component
// Functional Components::
// A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element.
// There is no render method used in functional components.
// Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.
// React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
// Hooks can be easily used in functional components to make them Stateful. example: const [name,SetName]= React.useState(" ")
// Constructors are not used.

// Class Component:
// A class component requires you to extend from React. Component and create a render function which returns a React element.
// It must have the render() method returning JSX (which is syntactically similar to HTML)
// Also known as Stateful components because they implement logic and state.
// React lifecycle methods can be used inside class components (for example componentDidMount).
// It requires different syntax inside a class component to implement hooks. example: constructor(props) { super(props); this.state = {name: ‘ ‘} }
// Constructor are used as it needs to store state.


// Que-4.What does mean by state and its use in react?
// Ans-i. React components has built in state object.
// ii. The state object is where you store property values that belongs to the component.
// iii. When the state object changes the component re-renders.
// eact uses an observable object as the state that observes what changes are made to the state & help the component behave accordingly.


// Que-5.What is JSX & why do we use it instead of JS?
// JSX stands for JavaScript XML. It allows us to write HTML in React. And JSX makes it easier to write and add HTML in React.
// JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.


// Que-6.What is Package.json ?
// =This file plays a very important role in the react application development & deployment.

// Package.json = Metedata associated with project + All dependencies with version + scripts 