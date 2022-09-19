import React, { Component } from "react";
import Header from "./Header";

import "../styles/custom.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(
      (state, props) => {
        return { [e.target.name]: e.target.value };
      },
      () => {
        console.log("State Update is completed");
      }
    );
  }

  render() {
    return (
      <>
        <Header />
        <fieldset>
          <legend>{this.props.appTitle}</legend>
          <label htmlFor="firstName" id="firstNameLabel">
            First Name
          </label>
          <input type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
        </fieldset>
      </>
    );
  }
}

App.defaultProps = {
  appTitle: "Personal Details",
};

export default App;
