import React, { Component } from "react";
import Test from "./Test";

export default class App extends Component {
  state = {
    personClicks: 0,
  };

  personClicked = () => {
    this.setState({ personClicks: this.state.personClicks + 1 });
  };

  render() {
    return (
      <div className="App">
        <Test person="A" personClicked={this.personClicked} />
        <Test person="B" personClicked={this.personClicked} />
        <Test person="C" personClicked={this.personClicked} />
        Person Clicks: {this.state.personClicks}
      </div>
    );
  }
}
