import React, { Component } from "react";
import Result from "./Result";
import "./Numbers.css";

class Numbers extends Component {
  state = {
    numbers: "",
    results: []
  };

  render() {
    return (
      <div className="Numbers">
        <input
          type="number"
          value={this.state.numbers}
          onChange={this.handleNumberChange}
        />
        <ul>
          {this.state.results.map((result, i) => (
            <Result key={i} result={result} />
          ))}
        </ul>
      </div>
    );
  }

  handleNumberChange = e => {
    const {
      target: { value }
    } = e;

    const numbers = Array.from(value);

    const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);

    this.setState({
      numbers: value,
      results: [...this.state.results, result]
    });
  };
}

export default Numbers;
