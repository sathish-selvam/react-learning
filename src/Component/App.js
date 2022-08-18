import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.initialCount,
    };
  }

  render() {
    return (
      <section className="app-wrapper">
        <h1>App</h1>
        <p>{this.state.counter}</p>
      </section>
    );
  }
}

export default App;
