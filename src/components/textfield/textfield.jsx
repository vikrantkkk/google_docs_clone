import React from 'react'

import styles from './Textfield.module.css'
import RightSession from './RightSession'

function Textfield() {
  return (
    <div className={styles.main}>
     <div className={styles.inputarea} 
     contentEditable
     style={{
        
        outline: 'none',
        border: '1px solid #ddd',
        padding: '80px',
        minHeight: '100vh',
        lineHeight: '1.5',
        fontSize: '16px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: '400',
        color: '#333',
      }}
     ></div>
    </div>
  )
}

export default Textfield
