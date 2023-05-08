import React from "react";
import LeftSession from "./LeftSession";
import Textfield from "./Textfield";
import styles from "./Combine.module.css";

function Combine() {
  return (
    <div className={styles.main}>
      <LeftSession />
      <Textfield />
    </div>
  );
}

export default Combine;
