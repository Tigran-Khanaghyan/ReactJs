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

  render() {
    let key = this.props.showFiltered
      ? this.props.filteredTodos
      : this.props.todos;
    return (
      <ul className={listClassNames}>
        {key.map((item, index) => {
          return (
            <li key={item.id}>
              {index + 1}
              <ToDoInput
                name={item.name}
                value={item.text}
                isEdited={!item.isEdited}
                id={item.id}
                environment="todo"
                onChange={this.props.onChange}
                isDone={item.isDone}
              />

              <Button
                id={item.id}
                content="Done"
                buttonName="done-todo"
                onClick={this.props.onClick}
              />
              <Button
                id={item.id}
                content={!item.isEdited ? "Edit" : "Save"}
                buttonName="edit-todo"
                onClick={this.props.onClick}
              />
              <Button
                id={item.id}
                content="Delete"
                buttonName="delete-todo"
                onClick={this.props.onClick}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
