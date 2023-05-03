import React,{useState} from 'react'
import styles from './RightSession.module.css'
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx"; 

function RightSession() {
    const[first,second]=useState("true")
    const[bar,setbar]=useState(<BiMenu  />)
  const handelClick=()=>{}
  return (
    <div className={styles.main}>
      {
        bar
      }
    </div>
  )
}

export default RightSession
