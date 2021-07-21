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

// let listClassNames = ClassNames([

// ])

export default function Input(props) {
  return (
    <input
      type="text"
      value={props.value}
      className={InputClassNames}
      onChange={props.handleChange}
      name={props.name}
    />
  );
}

Input.propTypes = {
  handleChange: PropTypes.func,
  name: PropTypes.string,
};
