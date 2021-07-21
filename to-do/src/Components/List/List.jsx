export default function List(props) {
  return (
    <ul>
      {props.todos.map((item) => {
        return (
          <li>{item.text}</li>
        )
      })}
    </ul>
  );
}
