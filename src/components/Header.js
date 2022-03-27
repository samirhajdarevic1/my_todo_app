import React from "react";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <div className={styles["header-frame"]}>
      <h1 className={styles["App-header"]}>{props.title}</h1>
    </div>
  );
}

export default Header;
