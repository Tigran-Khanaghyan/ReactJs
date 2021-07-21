import Input from "../Input/Input";
import Button from "../Button/Button";

let ClassNames = require("classnames");

let listClassNames = ClassNames(["mt-2"])

export default function List(props) {
  return (
    <ul className={listClassNames}>
      {props.todos.map((item , index) => {
        return (
          <li>
            <Input value={index + 1 + " " + item.text} environment="todo" />
            <Button content="Done" name="edit-todo"/>
            <Button content="Edit" name="edit-todo"/>
            <Button content="Delete" name="edit-todo"/>
          </li>
        );
      })}
    </ul>
  );
}
