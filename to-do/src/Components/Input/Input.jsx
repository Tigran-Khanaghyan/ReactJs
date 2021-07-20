let ClassNames = require("classnames");

let InputClassNames = ClassNames([
  "shadow",
  "border rounded",
  "w-2/5",
  "py-2",
  "px-3",
  "text-gray-700",
  "leading-tight",
  "focus:outline-none",
  "focus:shadow-outline",
]);

export default function Input() {
  return (
      <input className={InputClassNames} type="text" />
  )
}
