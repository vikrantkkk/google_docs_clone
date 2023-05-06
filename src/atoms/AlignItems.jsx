// import { Select,MenuItem} from "@mui/material";
// import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
// import React, { useState } from "react";

// export default function AlignItems() {
//   const [selectedAlignment, setSelectedAlignment] = useState("");

//   const alignments = [
//     { name: "Left", value: "left" },
//     { name: "Center", value: "center" },
//     { name: "Right", value: "right" }
//   ];

//   const handleAlignmentChange = (event) => {
//     setSelectedAlignment(event.target.value);
//   };

//   return (
//     <Select value={selectedAlignment} onChange={handleAlignmentChange}>
//       {alignments.map((alignment) => (
//         <MenuItem key={alignment.value} value={alignment.value}>
//           <FormatAlignLeftIcon />
//         </MenuItem>
//       ))}
//     </Select>
//   );
// }



// import { Select, MenuItem } from "@mui/material";
// import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
// import React, { useState } from "react";

// export default function AlignItems() {
//   const [selectedAlignment, setSelectedAlignment] = useState("left");

//   const alignments = [
//     { name: "Left", value: "left" },
//     { name: "Center", value: "center" },
//     { name: "Right", value: "right" }
//   ];

//   const handleAlignmentChange = (event) => {
//     setSelectedAlignment(event.target.value);
//   };

//   return (
//     <Select value={selectedAlignment} onChange={handleAlignmentChange}>
      
//       {alignments.map((alignment) => (
//         <button key={alignment.value} value={alignment.value}>
//           <FormatAlignLeftIcon />
//         </button>
//       ))}
//     </Select>
//   );
// }



// import React, { useState } from 'react';
// import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
// import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
// import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';

// export default function AlignItems() {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };
//   return (
//     <div>
//       <select value={selectedOption} onChange={handleChange}>
//         <option value="option1"><FormatAlignLeftIcon/></option>
//         <option value="option2"><FormatAlignRightIcon/></option>
//         <option value="option3"><FormatAlignCenterIcon/></option>
        
//       </select>
//     </div>
//   );
// }