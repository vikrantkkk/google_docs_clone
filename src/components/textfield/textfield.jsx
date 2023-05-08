import React, { useRef,useState } from "react";
// import InsertPhoto from "./InsertPhoto";
import styles from "./Textfield.module.css";
import { HiDownload } from "react-icons/hi";
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
function Textfield() {
  // const contentEditableRef = useRef(null);
  const[value,setvalue]=useState("Untitled document")
  const printDiv=useRef("")

  async function downloadFile() {
    const sheetContent = document.getElementById(`edit`);
    const canvas = await html2canvas(sheetContent, { dpi: 300 });
    const imageData = canvas.toDataURL("image/png", 1.0);
    const pdfDoc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: false,
    });
    pdfDoc.addImage(imageData, "PNG", 0, 0, 210, 297, "", "FAST");
    pdfDoc.save(`${value}.pdf`);
  }

  return (
    <div className={styles.main}>
      
      <div
        className={styles.inputarea}
        contentEditable={true}
        ref={printDiv}
        id="edit"
        
        style={{
          outline: "none",
          border: "1px solid #ddd",
          padding: "80px",
          minHeight: "100vh",
          lineHeight: "1.5",
          fontSize: "16px",
          fontFamily: "Arial, sans-serif",
          fontWeight: "400",
          color: "#333",
          marginTop: "1rem",
        }}
      >
      <button className={styles.button}onClick={downloadFile}>
            <HiDownload />

      </button>
    
      </div>
      
      
    </div>
  );
}

export default Textfield;
