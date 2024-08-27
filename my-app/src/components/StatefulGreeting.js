import React from "react";

class StatefulGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ioan",
      introduction: "Hello",
      buttonText: "Exit",
    };
  }

  handleClick() {
    if (this.state.introduction === "Hello") {
      this.setState({
        introduction: "Goodbye",
        buttonText: "Enter",
      });
    } else {
      this.setState({
        introduction: "Hello",
        buttonText: "Exit",
      });
    }
  }

  render() {
    return (
      <h1>
        {this.state.introduction} {this.state.name}, {this.props.greeting}
        <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
      </h1>
    );
  }
}

export default StatefulGreeting;
