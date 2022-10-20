// Que-1.What is the Difference between react and react native? Which one is library or framework?
// Ans--React is known as ReactJs, which is a JavaScript library to build single-page web applications.
// And, React Native is a React JS-based framework to design mobile apps. Moreover, with reusable components, you can develop native mobile applications.

// i.React is a JavaScript library of reusable components designed to create skeletons of the apps,
//  whereas React Native is designed to build native mobile apps with reusable components.

//  ii.React is an open-source JS library for building the UIs for web applications; besides,
//  React Native is used to build rich mobile UI from declarative components using only JavaScript.

//  iii.Both React and React Native are ruling the industry and are widely used for mobile and web applications. However, the difference between web apps vs websites will not affect your user.


//  Que-2.What is the package name you are using for routing?

//  Ans-- i.React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package.
// ii.You can install React Router from the public npm registry with either npm or yarn . Since we're building a web app, we'll use react-router-dom in this guide.
// iii. npm i react-router-dom


// Que-3.Routing Implementation:-

// import { render } from "react-dom";
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import App from "./App";
// import Expenses from "./routes/expenses";
// import Invoices from "./routes/invoices";

// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="expenses" element={<Expenses />} />
//       <Route path="invoices" element={<Invoices />} />
//     </Routes>
//   </BrowserRouter>,
// );
// Que4-
// class App extends React.Component {
//     handleClick(){
//       alert('---');
//     }

//     render() {
//         return <button onClick={this.handleClick}>hello</button>
//     }
// }

// class Second extends React.Component {
//     render() {
//         return <label>second component</label>
//     }
// }

// React.render( <App /> , document.getElementById('app'))


//  Que-5.What is lazy loading in react ?

// In essence, lazy loading means that a component or a part of code must get loaded when it is required. It is also referred to as code splitting and data fetching . Talking about React specifically, it bundles the complete code and deploys all of it at the same time.

// Example:An example of image lazy-loading can be found on the popular publishing platform Medium, which loads lightweight placeholder images at page load, and replaces them with lazily-loaded images as they're scrolled into the viewport. An example of image lazy-loading in action.

// Benefits: The benefits of lazy loading include: Reduces initial load time – Lazy loading a webpage reduces page weight, allowing for a quicker page load time. Bandwidth conservation – Lazy loading conserves bandwidth by delivering content to users only if it's requested.


// Que-6.Difference b/w Stateful and stateless Component.

// #Stateless Components:
// -If the behaviour is independent of its state then it can be a stateless component.
// -You can use either a function or a class for creating stateless components.
// -But unless we need to use a lifecycle hook in your components, we should go for function components. 
// -There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether.
// -functional componets are Stateless Components.

// #Stateful Components:
// -If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. -
// -These stateful components are always class components and have a state that gets initialized in the constructor. 
// -class componets are Stateful Components.