import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MdOutlineModeEditOutline } from "react-icons/md"
import {GrView} from "react-icons/gr"
import {BiCommentEdit} from "react-icons/bi"
import './Editing.css'


export default function Editings() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
     
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select 
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        
        >
          
          <MenuItem value="">
            <span><MdOutlineModeEditOutline/></span>Editing
          </MenuItem>
          
          <MenuItem value={10}><span><BiCommentEdit/></span>Suggesting</MenuItem>
          
          <MenuItem value={20}><span><GrView/></span>Viewing</MenuItem>
          
        </Select>
       
      </FormControl>
    </div>
  );
}
