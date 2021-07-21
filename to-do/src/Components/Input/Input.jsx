import PropTypes from "prop-types";

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
  "border-transparent"
]);
export default function Input(props) {
  return (
    <input
      type="text"
      environment={props.environment}
      value={props.value}
      className={
        props.environment === "input" ? InputClassNames : todoClassNames
      }
      onChange={props.handleChange}
      name={props.name}
    />
  );
}

Input.propTypes = {
  handleChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  class: PropTypes.string,
  environment: PropTypes.string,
};
