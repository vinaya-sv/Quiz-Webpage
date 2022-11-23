import React from "react";
function HomePage() {
  return (
    <>
      <div class="header">
        <h2>React JS</h2>
      </div>
      <div class="contents">
        <h1 class="subtopic">React - Introduction</h1>
        <ul>
          <li>JS library created by Facebook</li>
          <li>User Interface (UI) library</li>
          <li>Tool for building UI components </li>
          <li>Never refreshes the page entirely</li>
          <li>Light weighted app</li>
          <li>Virtual DOM</li>
        </ul>
        <h1 class="subtopic">How does React work?</h1>
        <ul>
          <li>React creates a virtual DOM in memory</li>
          <li>
            Instead of manipulating the browser's DOM directly, React creates a
            virtual DOM in memory, where it does all the necessary manipulating,
            before making the changes in the browser DOM
          </li>
          <li>
            React finds out what changes have been made, and changes only what
            needs to be changed.
          </li>
        </ul>
        <h1 class="subtopic">React - Components</h1>
        <ul>
          <li>Components are like functions that return HTML elements</li>
          <li>Components are independent and reusable bits of code</li>
          <li>Works in isolation and returns HTML</li>
        </ul>
        <h1 class="subtopic">React - JSX</h1>
        <ul>
          <li>JSX stands for JavaScript XML</li>
          <li>JSX makes it easier to write and add HTML in React</li>
          <li> JSX converts HTML tags into react elements</li>
          <li>JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods</li>
        </ul>
        <h1 class="subtopic">React - ES6</h1>
          <li>ES6 stands for ECMAScript 6</li>
          <li>ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015</li>
          <li>React uses ES6</li>


      </div>
    </>
  );
}
export default HomePage;
