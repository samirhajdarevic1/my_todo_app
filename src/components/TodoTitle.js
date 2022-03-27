import React from "react";
import styles from "./TodoTitle.module.css";

function TodoTitle(props) {
  return (
    <div className={styles["title-container"]}>
      <h2>{props.title}</h2>
    </div>
  );
}

export default TodoTitle;
