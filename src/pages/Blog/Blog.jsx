import React from "react";

const Blog = () => {
  return (
    <div className="px-20 py-14">
      <div>
        <h1 className="text-3xl py-6 font-bold">
          Tell us the differences between uncontrolled and controlled
          components.
        </h1>
        <p className="text-xl font-semiboldbold"><span>Ans: Are you tired of managing the state of your React components on your own? Look no further than controlled components. Controlled components in React allow you to easily manage the state and behavior of your components by having the parent component take control. This not only makes your code more predictable and easy to debug, but also allows for efficient management of state in larger projects. In contrast, uncontrolled components rely on managing their own state internally, which can lead to confusion and difficulty in tracking changes. Dive deeper into the world of controlled components and learn how to harness the power of React's state management capabilities in your next project.</span></p>
      </div>

      <div>
        <h1 className="text-3xl py-6 font-bold">How to validate React props using PropTypes</h1>
        <p className="text-xl font-semiboldbold"><span>Ans: React provides a built-in utility called PropTypes that allows developers to define the expected types for each prop passed to a component. PropTypes can be used to validate that the correct props are being passed to a component, and can help to catch errors early in the development process.</span></p>
      </div>

      <div>
        <h1 className="text-3xl py-6 font-bold">Tell us the difference between nodejs and express js.</h1>
        <p className="text-xl font-semiboldbold"><span>Ans: Node.js:

Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. Most of the people are confused and understand it’s a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on.

Express.js:

Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.

Difference between Node.js and Express.js:

- Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.
- Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.</span></p>
      </div>

      <div>
        <h1 className="text-3xl py-6 font-bold">What is a custom hook, and why will you create a custom hook?</h1>
        <p className="text-xl font-semiboldbold"><span>Ans: Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.
          <br />
          why will you create a custom hook:
           <br />
        Custom hooks allow developers to encapsulate reusable logic and stateful behavior in a way that is easy to share between components. By abstracting this logic into a custom hook, developers can reduce code duplication and make their code more modular and easier to maintain.

Custom hooks can also help to separate concerns and keep components focused on their primary responsibilities. For example, if a component needs to make an API request, rather than handling the API request logic directly in the component, a custom hook could be created to handle the request and return the response data to the component. This would allow the component to focus on rendering the data returned by the hook, rather than managing the API request itself.

Overall, custom hooks can be a powerful tool for organizing and sharing reusable logic in a React application, and can help to improve code quality, maintainability, and developer productivity.          
          </span></p>
      </div>
    </div>
  );
};

export default Blog;
