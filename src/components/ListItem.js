import React from "react";
import styles from "./ListItem.module.css";

function ListItem(props) {
  return (
    <ul>
      <li className={styles["list-item"]}>{props.task}</li>
      <button
        className={styles["cancel-button"]}
        onClick={props.onRemoveHandler}
      >
        X
      </button>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      ></input>
    </ul>
  );
}

export default ListItem;
