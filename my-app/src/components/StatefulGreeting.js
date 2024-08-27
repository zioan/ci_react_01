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

  // Updating the state is asynchronous, the console logs will not show the updated state correctly
  //since the state is updated in the background.
  // To see the updated state, you can use the second argument of the setState method, which is a callback function.

  // The main takeaway is that you should not rely on the state being updated immediately after calling setState.
  // Instead, you should use the second argument of the setState method to run code after the state has been updated.
  handleClick() {
    if (this.state.introduction === "Hello") {
      this.setState(
        {
          introduction: "Goodbye",
          buttonText: "Enter",
        },
        () => {
          console.log("new state", this.state.introduction);
          console.log("new state", this.state.buttonText);
        }
      );
    } else {
      this.setState({
        introduction: "Hello",
        buttonText: "Exit",
      });
    }
    console.log(this.state.introduction);
    console.log(this.state.buttonText);
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
