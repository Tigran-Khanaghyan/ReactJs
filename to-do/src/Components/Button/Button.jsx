import PropTypes from "prop-types";
import classNames from 'classnames/bind';



export default function Button(props) {
  let buttonClassNames = classNames([
    "bg-blue-500",
    "hover:bg-blue-700",
    "text-white",
    "font-bold",
    "py-2",
    "px-4",
    "rounded",
  ]);
  let {buttonName, onClick, id, disabled, content} = props
  return (
    <button
      name={buttonName}
      onClick={onClick}
      className={buttonClassNames}
      id={id}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  content: PropTypes.string,
  id: PropTypes.string,
};
