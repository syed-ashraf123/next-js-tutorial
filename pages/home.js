import React from "react";
import Home from "../components/Home";
import styles from "../styles/Home.module.css";
function home() {
  return (
    <div>
      <style jsx>{`
        .color {
          color: blue;
          font-size: 150px !important;
        }
        .color-2 {
          color: red;
        }
      `}</style>
      <div className={styles.font}>
        <Home></Home>
        <span className="color color-2"> Heyy</span>
      </div>
    </div>
  );
}

export default home;
