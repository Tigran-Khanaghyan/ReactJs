import Input from "../Input/Input";
import Button from "../Button/Button";
import React from "react";

let ClassNames = require("classnames");
let ToDoTailWindStylesList = ClassNames(["mx-10", "my-8"]);

export default class ToDo extends React.Component {
  componentDidMount() {
    document.body.className = "bg-blue-200";
  }

  render() {
    return (
      <div className={ToDoTailWindStylesList}>
        <Input />
        <Button name="Add ToDo" />
      </div>
    );
  }
}
