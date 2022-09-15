import React, { Component } from "react";

import style from "../styles/custom.module.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      name: props.name,
    };
  }

  render() {
    return (
      <div className={style.box}>
        <h2>{this.props.name}</h2>
        <input type="text" name="firstName" style={style.myInput} />
      </div>
    );
  }
}

export { App };
