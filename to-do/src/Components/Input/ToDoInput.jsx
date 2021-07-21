import PropTypes from "prop-types";
import React from "react";

let ClassNames = require("classnames");

let InputClassNames = ClassNames([
  "shadow",
  "border rounded",
  "w-2/5",
  "py-2",
  "px-3",
  "text-gray-700",
  "leading-tight",
  "focus:outline-none",
  "focus:shadow-outline",
]);
let todoClassNames = ClassNames([
  "border rounded",
  "w-2/5",
  "py-2",
  "px-3",
  "text-gray-700",
  "leading-tight",
  "focus:outline-none",
  "bg-blue-200",
  "border-transparent",
]);
export default class ToDoInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        environment={this.props.environment}
        value={this.props.value}
        className={
          this.props.environment === "input" ? InputClassNames : todoClassNames
        }
        onChange={this.handleChange}
        name={this.props.name}
      />
    );
  }
}

ToDoInput.propTypes = {
  handleChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  class: PropTypes.string,
  environment: PropTypes.string,
};
