import React from "react";
import "./Counter.css";

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minimum: 5,
      maximum: 10,
      currentValue: "",
      isSubmitted: false,
      isIncreased: false,
      isDecreased: false,
      step: 1,
    };
  }

  componentDidUpdate() {
    if (this.state.isSubmitted) {
      localStorage.setItem("minimum", this.state.minimum);
      localStorage.setItem("maximum", this.state.maximum);
      localStorage.setItem("step", this.state.step);
    }
  }
  componentDidMount() {
    if (localStorage.getItem("minimum")) {
      this.state.minimum = localStorage.getItem("minimum");
      this.state.maximum = localStorage.getItem("maximum");
      this.state.step = localStorage.getItem("step");
    }
  }

  handleChange = (event) => {
    if (event.target.name === "minimum") {
      this.setState({ minimum: event.target.value });
      return;
    }
    if (event.target.name === "maximum") {
      this.setState({ maximum: event.target.value });
      return;
    }
    if (event.target.name === "step") {
      this.setState({ step: event.target.value });
      return;
    }
  };

  handleClick = (event) => {
    if (event.target.name === "submit") {
      this.setState((previousState) => {
        return {
          isSubmitted: true,
          currentValue: previousState.minimum,
          minimum: previousState.minimum,
          maximum: previousState.maximum,
          step: previousState.step,
        };
      });
    }
    if (event.target.name === "increase") {
      this.setState((previousState) => {
        if (previousState.currentValue >= this.state.maximum) {
          return {
            isIncreased: true,
            isDecreased: false,
          };
        }
        return {
          currentValue:
            Number(previousState.currentValue) + Number(previousState.step),
        };
      });
    }
    if (event.target.name === "decrease") {
      this.setState((previousState) => {
        if (previousState.currentValue <= this.state.minimum) {
          return {
            isDecreased: true,
            isIncreased: false,
          };
        }
        return {
          currentValue:
            Number(previousState.currentValue) - Number(previousState.step),
        };
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="input-wrapper">
          <label>
            Minimum value
            <input
              name="minimum"
              type="number"
              onChange={this.handleChange}
              value={this.state.minimum}
            />
          </label>
          <label>
            Maximum value
            <input
              name="maximum"
              type="number"
              onChange={this.handleChange}
              value={this.state.maximum}
            />
          </label>
          <label>
            Step
            <input
              name="step"
              type="number"
              onChange={this.handleChange}
              value={this.state.step}
            />
          </label>
          <button
            disabled={this.state.isSubmitted}
            name="submit"
            onClick={this.handleClick}
          >
            Submit
          </button>
        </div>
        <hr />
        <div>
          <p>{this.state.currentValue}</p>
          <button
            disabled={this.state.isIncreased}
            name="increase"
            onClick={this.handleClick}
          >
            Increase
          </button>
          <button
            disabled={this.state.isDecreased}
            name="decrease"
            onClick={this.handleClick}
          >
            Decrease
          </button>
        </div>
      </div>
    );
  }
}
