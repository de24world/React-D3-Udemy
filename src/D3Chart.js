import * as d3 from "d3";

const url = "https://udemy-react-d3.firebaseio.com/tallest_men.json";
const MARGIN = { TOP: 10, BOTTOM: 10, LEFT: 10, RIGHT: 10 };
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

export default class D3Chart {
  constructor(element) {
    const svg = d3
      .select(element)
      .append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
      .attr("transform", "translate(${MARGIN.LEFT}, ${MARGIN.TOP})");

    d3.json(url).then((data) => {
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.height)])
        .range([0, HEIGHT]);

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.name))
        .range([0, WIDTH])
        .padding(0.4);

      const xAxisCall = d3.axisBottom(x);
      svg
        .append("g")
        .attr("transform", "translate(0, ${HEIGHT})")
        .call(xAxisCall);

      const yAxisCall = d3.axisLeft(y);
      svg.append("g").call(yAxisCall);

      const rects = svg.selectAll("rect").data(data);

      rects
        .enter()
        .append("rect")
        .attr("x", (d) => x(d.name))
        .attr("y", (d) => HEIGHT - y(d.height))
        .attr("width", x.bandwidth)
        .attr("height", (d) => d.height)
        .attr("fill", "grey");
    });
  }
}
