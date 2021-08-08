import ToDoInput from "../Input/ToDoInput";
import Button from "../Button/Button";
import React from "react";
import classNames from "classnames/bind";

let listClassNames = classNames(["mt-2"]);

export default function List(props) {
  let key = props.showFiltered
    ? props.filteredTodos
    : props.todos;
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
              onChange={props.onChange}
              isDone={item.isDone}
            />

            <Button
              id={item.id}
              content="Done"
              onClick={props.handleClickDone}
            />
            <Button
              id={item.id}
              content={!item.isEdited ? "Edit" : "Save"}
              onClick={props.handleClickEdit}
            />
            <Button
              id={item.id}
              content="Delete"
              onClick={props.handleClickDelete}
            />
          </li>
        );
      })}
    </ul>
  );
}
