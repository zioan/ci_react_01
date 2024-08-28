import React from "react";

class StatefulGreetingWithPrevState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ioan",
      introduction: "Hello",
      buttonText: "Exit",
      count: 0,
    };
  }

  handleClick() {
    this.setState((prevState, prevProps) => {
      console.log("Previous state", prevState);
      console.log("Previous props", prevProps);

      return {
        introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
        buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
      };
    });

    console.log(this.state.introduction);
    console.log(this.state.buttonText);
  }

  handleCount() {
    this.setState((prevState, prevProps) => {
      console.log("Previous state", prevState);
      console.log("Previous props", prevProps);
      return { count: prevState.count + 1 };
    });
  }

  render() {
    return (
      <>
        <h1>
          {this.state.introduction} {this.state.name}, {this.props.greeting}
          <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
        </h1>
        <p>Counter: {this.state.count}</p>
        <button onClick={() => this.handleCount()}>Increment</button>
      </>
    );
  }
}

export default StatefulGreetingWithPrevState;
