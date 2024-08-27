import React from "react";

// function FunctionalGreeting(props) {
//   return <h1>Hello from {props.name}!</h1>;
// }

const FunctionalGreetingWithProps = (props) => (
  <h1>
    Hello, {props.name}, {props.greeting}, you are {props.age}.
  </h1>
);

export default FunctionalGreetingWithProps;
