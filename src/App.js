import React, { Component } from "react";
import Test from "./Test";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Test person="A" />
        <Test person="B" />
        <Test person="C" />
      </div>
    );
  }
}
