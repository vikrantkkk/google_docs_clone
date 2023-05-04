import React from 'react'
import RightSession from './RightSession'
import Textfield from './Textfield'
import styles from './Combine.module.css'
function Combine() {
  return (
    
    <div className={styles.main} >
      <RightSession/>
      <Textfield/>
      
    
    </div>
    
  )
}

export default Combine

function Div(){
  return(
    <div style={{
     width:'25%',
     backgroundColor:"red"
    }}>

    </div>
  )
}