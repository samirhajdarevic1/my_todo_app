import React from "react";
import styles from "./OverallFrame.module.css";

function OverallFrame(props) {
  return <div className={styles["big-frame"]}>{props.children}</div>;
}

export default OverallFrame;
