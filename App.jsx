import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.incrementCounter} style={{ marginRight: "10px" }}>
          Increment Counter
        </button>
        <button onClick={this.decrementCounter}>Decrement Counter</button>
      </div>
    );
  }
}

export default App;
