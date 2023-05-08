import React, { useState } from "react";
import styles from "./LeftSession.module.css";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

function LeftSession() {
  const [isOn, setIsOn] = useState(true);

  const handelClick = () => {
    setIsOn(!isOn);
  };
  const icon = isOn ? <BiMenu /> : <RxCross2 />;
  return (
    <div className={styles.parent}>
      <div className={styles.main}>
        <button onClick={handelClick} className={styles.toggle_icon}>
          {icon}
        </button>
        <br />     
      </div>
    </div>
  );
}

export default LeftSession;
