import React,{useState} from "react";
import style from "./Normaltext.module.css";
import { TbTextColor } from "react-icons/tb";

import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@mui/material";

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
  const handleChange = (e) => {
    
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

function TextColor() {
  const [open, setOpen] = useState(false);

  function setColor(color) {
    document.execCommand("forecolor", false, color);
  }

  return (
    <>
      <TbTextColor onClick={() => setOpen(true)} />
      
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>pick color</DialogTitle>
        <DialogContent>
          <button className={style.red} onClick={() => setColor("red")}>r</button>
          <button className={style.blue} onClick={() => setColor("blue")}>b</button>
          <button className={style.green} onClick={() => setColor("green")}>g</button>
          
        </DialogContent>
        <DialogActions>
          <button onClick={() => setOpen(false)}>cancel</button>
          <button onClick={() => setOpen(false)}>agree</button>
        </DialogActions>
      </Dialog>
  
    </>
  );
}

export { TextColor };

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
