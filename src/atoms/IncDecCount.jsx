import React from "react";
import { useState } from "react";

export default function IncDecBtn() {
  const [count, setCount] = useState(1);
  const handleDec = () => {
    setCount(count-1);
    document.execCommand('fontsize', false,count)
    if(count===1){
        setCount(1)
    }
  };

  const handleInc = () => {
    setCount(count+1);
    document.execCommand('fontsize', false,count)
    if(count===7){
        setCount(7)
    }
  };


  return (
    <div>
      <button
        onClick={handleDec}
        style={{ border: "none", backgroundColor: "#edf2fa",marginRight:"0.5rem",fontSize:"1.2rem",fontWeight:"800" }}
      >
        -
      </button>
      <span
        style={{
          border: "1.5px solid black",
          height: "20px",
          width: "20px",
          display: "inline-block",
          textAlign: "center",
          borderRadius: "0.3em",
        }}
      >
        {count}
      </span>
      <button
        onClick={handleInc}
        style={{ border: "none", backgroundColor: "#edf2fa",fontSize:"1rem",fontWeight:"800" }}
      >
        +
      </button>
    </div>
  );
}
