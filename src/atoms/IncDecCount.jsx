import React from "react";
import { useState } from "react";

export default function IncDecBtn() {
  const [count, setCount] = useState(1);
  const handleDec = () => {
    setCount(count-1);
    if(count===1){
        setCount(1)
    }
  };

  return (
    <div>
      <button
        onClick={handleDec}
        style={{ border: "none", backgroundColor: "#edf2fa" }}
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
        onClick={() => setCount(count + 1)}
        style={{ border: "none", backgroundColor: "#edf2fa" }}
      >
        +
      </button>
    </div>
  );
}
