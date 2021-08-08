import "./Weather.css";

export function Weather({ weekDey, icon, temp }) {
  return (
    <div className="wrapper">
      <h3>{weekDey}</h3>
      <div>{icon}</div>
      <p>{temp}</p>
    </div>
  );
}
