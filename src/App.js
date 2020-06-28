import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import ChartWrapper from "./ChartWrapper";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="light">
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Navbar>
        <Container>
          <ChartWrapper />
        </Container>
      </div>
    );
  }
}
