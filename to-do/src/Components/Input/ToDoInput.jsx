import PropTypes from "prop-types";
import React from "react";
import classNames from 'classnames/bind';


let inputClassNames = classNames([
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
let todoClassNames = classNames([
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
let lineThrough = classNames([
  "border rounded",
  "w-2/5",
  "py-2",
  "px-3",
  "text-gray-700",
  "leading-tight",
  "focus:outline-none",
  "bg-blue-200",
  "border-transparent",
  "line-through",
]);

export default function ToDoInput(props) {
 let  handleChange = (event) => {
    props.onChange(event.target.value, props.id);
  };

  return (
    <input
      type="text"
      environment={props.environment}
      disabled={props.isEdited}
      value={props.value}
      className={
        props.environment === "input"
          ? inputClassNames
          : props.isDone
          ? lineThrough
          : todoClassNames
      }
      onChange={handleChange}
      name={props.name}
      onClick={props.onClick}
      // isEdited={props.isEdited}
    />
  );
}

ToDoInput.propTypes = {
  handleChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  class: PropTypes.string,
  environment: PropTypes.string,
};
