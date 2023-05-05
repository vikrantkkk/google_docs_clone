import React, { useState } from 'react';
import styles from './Normaltext.module.css'

export default function Normaltext() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="option1">Normal Text</option>
        <option value="option2">Title</option>
        <option value="option3">subtitle</option>
        <option value="option4">Heading 1</option>
        <option value="option5">Heading 2</option>
        <option value="option6">Heading 3</option>
        <option value="option5">options</option>
      </select>
    </div>
  );
}

function Fontstyle(){
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    }
    return(
        <div>
             <select value={selectedOption} onChange={handleChange}>
             <option style={{ fontFamily: "Arial" }}>Arial</option>
<option style={{ fontFamily: "Helvetica" }}>Helvetica</option>
<option style={{ fontFamily: "Times New Roman" }}>Times New Roman</option>
<option style={{ fontFamily: "Courier New" }}>Courier New</option>
<option style={{ fontFamily: "Verdana" }}>Verdana</option>
<option style={{ fontFamily: "Georgia" }}>Georgia</option>
<option style={{ fontFamily: "Comic Sans MS" }}>Comic Sans MS</option>
<option style={{ fontFamily: "Impact" }}>Impact</option>
<option style={{ fontFamily: "Tahoma" }}>Tahoma</option>
<option style={{ fontFamily: "Palatino" }}>Palatino</option>
             </select>
          
        </div>
    )
}
export {Fontstyle}

function Editing(){
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }
  return(
      <div>
           <select value={selectedOption} onChange={handleChange}>
           <option style={{ fontFamily: "Arial" }}>Arial</option>
<option style={{ fontFamily: "Helvetica" }}>Helvetica</option>
<option style={{ fontFamily: "Times New Roman" }}>Times New Roman</option>
<option style={{ fontFamily: "Courier New" }}>Courier New</option>
<option style={{ fontFamily: "Verdana" }}>Verdana</option>
<option style={{ fontFamily: "Georgia" }}>Georgia</option>
<option style={{ fontFamily: "Comic Sans MS" }}>Comic Sans MS</option>
<option style={{ fontFamily: "Impact" }}>Impact</option>
<option style={{ fontFamily: "Tahoma" }}>Tahoma</option>
<option style={{ fontFamily: "Palatino" }}>Palatino</option>
           </select>
        
      </div>
  )
}
