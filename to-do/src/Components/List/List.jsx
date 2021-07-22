import ToDoInput from "../Input/ToDoInput";
import Button from "../Button/Button";
import React from "react";

let ClassNames = require("classnames");

let listClassNames = ClassNames(["mt-2"]);

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // handleInputChange = (value) => {
  //   this.setState({ value: value });
  // };

  render() {
    return (
      <ul className={listClassNames}>
        {this.props.todos.map((item, index) => {
          return (
            <li key={item.id}>
              {index + 1}
              <ToDoInput
                name={item.name}
                value={item.text}
                id={item.id}
                environment="todo"
                onChange={this.props.onChange}
                isDone={item.isDone}
              />

              <Button
                id={item.id}
                content="Done"
                buttonName={this.props.buttonName}
                onClick={this.props.onClick}
              />
              <Button content="Edit" name="edit-todo" />
              <Button content="Delete" name="delete-todo" />
            </li>
          );
        })}
      </ul>
    );
  }
}
