import React from "react";
import ToDoInput from "../Input/ToDoInput";
import Button from "../Button/Button";
import List from "../List/List";

let ClassNames = require("classnames");
let ToDoTailWindStylesList = ClassNames(["mx-10", "my-8"]);

function generateRandomId() {
  let randomNumber = Math.random();
  return "todo" + randomNumber;
}

let createNewToDo = (state) => {
  return {
    text: state.toDoInputValue,
    name: "list-input",
    id: generateRandomId(),
  };
};

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoInputValue: "",
      listInputValue: "",
      todos: [],
    };
  }

  componentDidMount() {
    document.body.className = "bg-blue-200";
  }
  // componentDidUpdate() {
  //   console.log(this.state.toDoInputValue);
  // }

  handleChange = (value) => {
    this.setState({ toDoInputValue: value });
  };
  handleClick = (event) => {
    if (event.target.name === "todo-add-button") {
      this.setState((previousState) => {
        return {
          todos: [...previousState.todos, createNewToDo(this.state)],
          toDoInputValue: "",
        };
      });
    }
  };

  render() {
    let todos = this.state.todos;
    return (
      <div className={ToDoTailWindStylesList}>
        <ToDoInput
          name="todo"
          environment="input"
          value={this.state.toDoInputValue}
          onChange={this.handleChange}
        />
        <Button
          name="todo-add-button"
          handleClick={this.handleClick}
          content="Add Todo"
        />
        <List
          todos={todos}
          name="list-input"
        />
      </div>
    );
  }
}
