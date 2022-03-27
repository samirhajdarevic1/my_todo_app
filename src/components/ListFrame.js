import React from "react";
import styles from "./ListFrame.module.css";

function ListFrame(props) {
  return <div className={styles["list-frame"]}>{props.children}</div>;
}

export default ListFrame;
