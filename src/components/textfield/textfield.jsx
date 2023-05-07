import React from "react";

import styles from "./Textfield.module.css";

function Textfield() {
  return (
    <div className={styles.main}>
      <div
        className={styles.inputarea}
        contentEditable="true"
        style={{
          outline: "none",
          border: "1px solid #ddd",
          padding: "80px",
          minHeight: "100vh",
          lineHeight: "1.5",
          fontSize: "16px",
          fontFamily: "Arial, sans-serif",
          fontWeight: "400",
          color: "#333",
          marginTop: "1rem",
        }}
      ></div>
    </div>
  );
}

export default Textfield;
