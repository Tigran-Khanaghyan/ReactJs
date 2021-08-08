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
  handleClickAdd = () => {
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
  };
  handleClickDone = (event) => {
    let target = event.target;
    this.setState(({ todos }) => ({
      showFiltered: false,
      todos: todos.map((todo) => {
        return todo.id === target.id ? { ...todo, isDone: true } : todo;
      }),
    }));
  };
  handleClickEdit = (event) => {
    let target = event.target;
    this.setState(({ todos }) => ({
      showFiltered: false,
      todos: todos.map((todo) => {
        return todo.id === target.id && !todo.isDone
          ? { ...todo, isEdited: !todo.isEdited }
          : todo;
      }),
    }));
  };
  handleClickDelete = (event) => {
    let target = event.target;
    this.setState(({ todos }) => ({
      showFiltered: false,
      todos: todos.filter((todo) => {
        return todo.id !== target.id;
      }),
    }));
  };
  handleClickShowAll = () => {
    this.setState({
      showFiltered: true,
      filteredTodos: this.state.todos,
    });
  };
  handleClickShowCompleted = () => {
    this.setState(({ todos }) => ({
      showFiltered: true,
      filteredTodos: todos.filter((todo) => {
        return todo.isDone;
      }),
    }));
  };
  handleClickShowActive = () => {
    this.setState(({ todos }) => ({
      showFiltered: true,
      filteredTodos: todos.filter((todo) => {
        return !todo.isDone;
      }),
    }));
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
          onClick={this.handleClickAdd}
          content="Add Todo"
          disabled={isAddButtonDisabled}
        />
        <div>
          <Button content="All" onClick={this.handleClickShowAll} />
          <Button content="Completed" onClick={this.handleClickShowCompleted} />
          <Button
            content="Active"
            onClick={this.handleClickShowActive}
          />
        </div>
        <List
          todos={todos}
          filteredTodos={filteredTodos}
          showFiltered={showFiltered}
          onChange={this.handleItemTextChange}
          name="list-input"
          handleClickDone={this.handleClickDone}
          handleClickEdit={this.handleClickEdit}
          handleClickDelete={this.handleClickDelete}
        />
      </div>
    );
  }
}
