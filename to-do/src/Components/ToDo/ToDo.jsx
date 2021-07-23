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
    isEdited: false,
    isDone: false,
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
  handleItemTextChange = (value, id) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) => {
        return todo.id === id ? { ...todo, text: value } : todo;
      }),
    }));
  };
  handleClick = (event) => {
    console.log(event.target.name);
    if (event.target.name === "todo-add-button") {
      this.setState((previousState) => {
        return {
          todos: [...previousState.todos, createNewToDo(this.state)],
          toDoInputValue: "",
        };
      });
    }
    if (event.target.name === "done-todo") {
      let target = event.target;
      this.setState(({ todos }) => ({
        todos: todos.map((todo) => {
          return todo.id === target.id ? { ...todo, isDone: true } : todo;
        }),
      }));
    }
    if (event.target.name === "edit-todo") {
      let target = event.target;
      this.setState(({ todos }) => ({
        todos: todos.map((todo) => {
          return todo.id === target.id && !todo.isDone
            ? { ...todo, isEdited: !todo.isEdited }
            : todo;
        }),
      }));
    }
    if (event.target.name === "delete-todo") {
      console.log(1);
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
          buttonName="todo-add-button"
          onClick={this.handleClick}
          content="Add Todo"
        />
        <List
          todos={todos}
          onChange={this.handleItemTextChange}
          name="list-input"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
