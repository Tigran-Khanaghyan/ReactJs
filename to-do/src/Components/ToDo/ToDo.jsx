import React from "react";
import Input from "../Input/Input";
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
    id: generateRandomId(),
  };
};

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoInputValue: "",
      todos: [],
    };
  }

  componentDidMount() {
    document.body.className = "bg-blue-200";
  }
  componentDidUpdate() {
    console.log(this.state.toDoInputValue);
  }

  handleChange = (event) => {
    let inputValue = event.target.value;
    this.setState({ toDoInputValue: inputValue });
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
        <Input
          name="todo"
          value={this.state.toDoInputValue}
          handleChange={this.handleChange}
        />
        <Button
          name="todo-add-button"
          handleClick={this.handleClick}
          content="Add Todo"
        />
        <List todos={todos} />
      </div>
    );
  }
}
