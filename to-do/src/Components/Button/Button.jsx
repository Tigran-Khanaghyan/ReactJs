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
      name={props.buttonName}
      onClick={props.onClick}
      className={ButtonClassNames}
      id={props.id}
      disabled={props.disabled}
    >
      {props.content}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  content: PropTypes.string,
  id: PropTypes.string,
};
