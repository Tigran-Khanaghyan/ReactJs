import styles from "./Card.modules.css";

export function Card({weekDey, icon, temp}) {
  return (
    <div className={styles.wrapper}>
      <h3>{weekDey}</h3>
      <div>{icon}</div>
      <p>{temp}</p>
    </div>
  );
}
