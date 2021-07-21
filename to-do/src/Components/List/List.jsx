import ToDoInput from "../Input/ToDoInput";
import Button from "../Button/Button";
import React from "react";

let ClassNames = require("classnames");

let listClassNames = ClassNames(["mt-2"]);

export default class List extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      todos: props.todos 
    }
  }

  handleInputChange = (value) => {
    this.setState({value: value})
  }

  
  render() {
    let editedText = this.state.value
    return (
      <ul className={listClassNames}>
        {this.props.todos.map((item, index) => {
          return (
            <li key={item.id}>{index + 1}
              <ToDoInput
                name={item.name}
                value={(editedText ? editedText : item.text)}
                environment="todo"
                onChange={this.handleInputChange}
              />
              <Button content="Done" name="edit-todo" />
              <Button content="Edit" name="edit-todo" />
              <Button content="Delete" name="edit-todo" />
            </li>
          );
        })}
      </ul>
    );
  }
}
