import React from "react";
import styles from "../styles/About.module.css";
function about() {
  return (
    <div>
      <h1 className={styles.yellow}>about</h1>
      <h2 className={styles.blue}>This is simple text</h2>
      <h1 className={`${styles.blue} ${styles["font-size-50"]}`}>
        Two Classes
      </h1>
      <h1 className={`${styles.blue} ${styles.font}`}>Font of two classes</h1>
      <h1 style={{ fontSize: "50px", color: "black", backgroundColor: "pink" }}>
        This a random text
      </h1>
    </div>
  );
}

export default about;
