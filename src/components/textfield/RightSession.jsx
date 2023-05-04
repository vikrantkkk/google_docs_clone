import React,{useState} from 'react'
import styles from './RightSession.module.css'
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx"; 
import { icons } from 'react-icons/lib';

function RightSession() {
    const [isOn, setIsOn] = useState(true);

  const handelClick=()=>{
    setIsOn(!isOn);
  }
  const icon = isOn ? <BiMenu /> : <RxCross2 />;
  return (
    <div className={styles.parent}>
    <div className={styles.main}>
     <button onClick={handelClick} className={styles.toggle_icon}>
        {icon}
     </button>
     <br/>
     {
      icon==<RxCross2/>?<input/> : ""
     }

     </div>
     
    </div>
  )
}

export default RightSession
