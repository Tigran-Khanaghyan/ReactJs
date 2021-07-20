let Classnames = require("classnames");

export default function Button(props) {
  let ButtonClassNames = Classnames([
    "bg-blue-500",
    "hover:bg-blue-700",
    "text-white",
    "font-bold",
    "py-2",
    "px-4",
    "rounded",
  ]);
  return <button className={ButtonClassNames}>{props.name}</button>;
}
