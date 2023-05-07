import React from "react";
import "./Normaltext.module.css";

export default function Normaltext() {
  const handleChange = (event) => {
    document.execCommand("fontSize", false, event.target.value);
  };

  return (
    <>
      <div>
        <select onChange={handleChange}>
          <option value="3">Normal Text</option>
          <option value="6">Heading 1</option>
          <option value="5">Heading 2</option>
          <option value="4">Heading 3</option>
          <option value="2">Title</option>
          <option value="1">Subtitle</option>
        </select>
      </div>
    </>
  );
}

function Fontstyle() {
  // const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    // setSelectedOption(event.target.value);
    document.execCommand("fontName", "", e.target.value);
  };
  return (
    <div>
      <select onChange={handleChange}>
        <option style={{ fontFamily: "Arial" }}>Arial</option>
        <option style={{ fontFamily: "Helvetica" }}>Helvetica</option>
        <option style={{ fontFamily: "Times New Roman" }}>
          Times New Roman
        </option>
        <option style={{ fontFamily: "Courier New" }}>Courier New</option>
        <option style={{ fontFamily: "Verdana" }}>Verdana</option>
        <option style={{ fontFamily: "Georgia" }}>Georgia</option>
        <option style={{ fontFamily: "Comic Sans MS" }}>Comic Sans MS</option>
        <option style={{ fontFamily: "Impact" }}>Impact</option>
        <option style={{ fontFamily: "Tahoma" }}>Tahoma</option>
        <option style={{ fontFamily: "Palatino" }}>Palatino</option>
      </select>
    </div>
  );
}
export { Fontstyle };

// const fontFamilyList = [
//   "serif",
//   "arial",
//   "sans-serif",
//   "monospace",
//   "cursive",
//   "fantasy",
//   "system-ui",
//   "ui-serif",
//   "ui-sans-serif",
//   "ui-monospace",
//   "ui-rounded",
//   "emoji",
//   "math",
//   "fangsong",
//   "Georgia",
//   "Times New Roman",
//   "Impact",
// ];
// function handlefamily(e){
//   document.execCommand("fontName", "", e.target.value);
// }

// <div >
//               <select onChange={(e) => handlefamily(e)}>
//               <option>san-sherif</option>
//               {fontFamilyList.map((element) => (
//                   <option >{element}</option>

//               ))}
//               </select>
//             </div>
