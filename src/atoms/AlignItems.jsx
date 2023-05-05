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

import { Select, MenuItem } from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import React, { useState } from "react";

export default function AlignItems() {
  const [selectedAlignment, setSelectedAlignment] = useState("left");

  const alignments = [
    { name: "Left", value: "left" },
    { name: "Center", value: "center" },
    { name: "Right", value: "right" }
  ];

  const handleAlignmentChange = (event) => {
    setSelectedAlignment(event.target.value);
  };

  return (
    <Select value={selectedAlignment} onChange={handleAlignmentChange}>
      
      {alignments.map((alignment) => (
        <button key={alignment.value} value={alignment.value}>
          <FormatAlignLeftIcon />
        </button>
      ))}
    </Select>
  );
}