import React, { useRef } from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

export default function InsertPhoto({ contentEditableRef }) {
  const fileInputRef = useRef(null);

  function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      const dataURL = event.target.result;
      const img = document.createElement("img");
      img.src = dataURL;
      img.style.width = "20%";
      img.style.height = "20%";
      contentEditableRef.current.appendChild(img);
    };
    reader.readAsDataURL(file);
  }

  function handleButtonClick() {
    fileInputRef.current.click();
  }

  // add this line
// console.log("contentEditableRef:", contentEditableRef); 
  return (
    <>
      <InsertPhotoIcon onClick={handleButtonClick} />

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        style={{ display: "none" }}
      />
    </>
  );
}


// import React, { useRef } from "react";
// import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

// export default function InsertPhoto(){
//   const inputRef = useRef(null);

//   function handleImageOpen() {
//     inputRef.current.click()
//   }
//   function captureImage(event) {
//     if (event.target.files[0] ) {
//       console.log(event.target.files[0])
//       document.execCommand("insertImage","",URL.createObjectURL(event.target.files[0]));
//     }
//   }
//   return (
//     <>
//     <div>
//           <AddPhotoAlternateIcon
//           onClick={handleImageOpen}
//             style={{ fontSize: "20", marginLeft: "7px",marginTop:'-0.5rem',fontWeight:'lighter' }}
//           />
//           <input
//           onChange={captureImage}
//           hidden
//           ref={inputRef}
//           type="file"
//           />
//         </div>
//         </>

//   )
// }

