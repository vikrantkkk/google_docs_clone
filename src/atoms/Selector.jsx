import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLabels() {
  const [age, setAge] = useState("100");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 50 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ height: "2rem", border: 'none!important'  }}
        >
          <MenuItem value={"Fit"} sx={{ borderBottom: "1px solid black" }}>
            Fit
          </MenuItem>
          <MenuItem value={25}>25%</MenuItem>
          <MenuItem value={50}>50%</MenuItem>
          <MenuItem value={75}>75%</MenuItem>
          <MenuItem value={100}>100%</MenuItem>
          <MenuItem value={125}>125%</MenuItem>
          <MenuItem value={150}>150%</MenuItem>
          <MenuItem value={200}>200%</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
