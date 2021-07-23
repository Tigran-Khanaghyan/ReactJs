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
      isAddButtonDisabled: false,
      toDoInputValue: "",
      todos: [],
      filteredTodos: [],
      showFiltered: false,
    };
  }

  componentDidMount() {
    document.body.className = "bg-blue-200";
    let previousState = localStorage.getItem("previousState");
    let state = JSON.parse(previousState);
    this.setState({ ...state });
  }
  componentDidUpdate() {
    localStorage.setItem("previousState", JSON.stringify(this.state));
  }

  handleChange = (value) => {
    this.setState({ toDoInputValue: value, isAddButtonDisabled: false });
  };
  handleItemTextChange = (value, id) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) => {
        return todo.id === id ? { ...todo, text: value } : todo;
      }),
    }));
  };
  handleClick = (event) => {
    if (event.target.name === "todo-add-button") {
      if (!this.state.toDoInputValue.trim()) {
        this.setState({ isAddButtonDisabled: true });
        return;
      }
      this.setState((previousState) => {
        return {
          showFiltered: false,
          todos: [...previousState.todos, createNewToDo(this.state)],
          toDoInputValue: "",
        };
      });
    }
    if (event.target.name === "done-todo") {
      let target = event.target;
      this.setState(({ todos }) => ({
        showFiltered: false,
        todos: todos.map((todo) => {
          return todo.id === target.id ? { ...todo, isDone: true } : todo;
        }),
      }));
    }
    if (event.target.name === "edit-todo") {
      let target = event.target;
      this.setState(({ todos }) => ({
        showFiltered: false,
        todos: todos.map((todo) => {
          return todo.id === target.id && !todo.isDone
            ? { ...todo, isEdited: !todo.isEdited }
            : todo;
        }),
      }));
    }
    if (event.target.name === "delete-todo") {
      let target = event.target;
      this.setState(({ todos }) => ({
        showFiltered: false,
        todos: todos.filter((todo) => {
          return todo.id !== target.id;
        }),
      }));
    }
    if (event.target.name === "show-all") {
      this.setState({
        showFiltered: true,
        filteredTodos: this.state.todos,
      });
    }
    if (event.target.name === "show-completed") {
      this.setState(({ todos }) => ({
        showFiltered: true,
        filteredTodos: todos.filter((todo) => {
          return todo.isDone;
        }),
      }));
    }

    if (event.target.name === "show-active") {
      this.setState(({ todos }) => ({
        showFiltered: true,
        filteredTodos: todos.filter((todo) => {
          return !todo.isDone;
        }),
      }));
    }
  };

  render() {
    let { todos, filteredTodos, isAddButtonDisabled, showFiltered } =
      this.state;
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
          disabled={isAddButtonDisabled}
        />
        <div>
          <Button
            content="All"
            buttonName="show-all"
            onClick={this.handleClick}
          />
          <Button
            content="Completed"
            buttonName="show-completed"
            onClick={this.handleClick}
          />
          <Button
            content="Active"
            buttonName="show-active"
            onClick={this.handleClick}
          />
        </div>
        <List
          todos={todos}
          filteredTodos={filteredTodos}
          showFiltered={showFiltered}
          onChange={this.handleItemTextChange}
          name="list-input"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
