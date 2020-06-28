import React, { Component } from "react";
import D3Chart from "./D3Chart";

export default class ChartWrapper extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    new D3Chart(this.chartRef.current);
  }
  render() {
    return <div ref={this.chartRef}></div>;
  }
}
