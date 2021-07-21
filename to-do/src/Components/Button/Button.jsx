import PropTypes from "prop-types";

let Classnames = require("classnames");

export default function Button(props) {
  let ButtonClassNames = Classnames([
    "bg-blue-500",
    "hover:bg-blue-700",
    "text-white",
    "font-bold",
    "py-2",
    "px-4",
    "rounded",
  ]);
  return (
    <button
      name={props.name}
      onClick={props.handleClick}
      className={ButtonClassNames}
    >
      {props.content}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
  content: PropTypes.string,
};
