import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Styles from './header.module.css'
import {AiOutlineStar} from "react-icons/ai"
import {MdDriveFileMoveOutline} from "react-icons/md"
import {BsCloudCheck} from "react-icons/bs"
import {RxCountdownTimer} from "react-icons/rx"
import {MdOutlineMessage} from "react-icons/md"
import {BiVideoPlus} from "react-icons/bi"

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorE2, setAnchorE2] = React.useState(null);
  const open2 = Boolean(anchorE2);
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };


  return (
    <div className={Styles.mainDiv}>

        <div className={Styles.childDiv}>
          <div className={Styles.firstDiv}>
        <span>Untitled document</span>
        </div>

        <div className={Styles.icon}>
        <AiOutlineStar/>
        <MdDriveFileMoveOutline/>
        <BsCloudCheck/>
        </div>

        <div className={Styles.lastDiv}>
          <RxCountdownTimer/>
          <MdOutlineMessage/>
          <BiVideoPlus/>
         
        </div>
        </div>


        <div className={Styles.bottomDiv}>
      <Button 
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={Styles.firstBtn}
      >
        File
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        className={Styles.menuOne}
      >
        <MenuItem onClick={handleClose}>New</MenuItem>
        <MenuItem onClick={handleClose}>Download</MenuItem>
        <MenuItem onClick={handleClose}>Rename</MenuItem>
        <MenuItem onClick={handleClose}>Print</MenuItem>
        
      </Menu>



      <Button
        id="basic-button2"
        aria-controls={open2 ? 'basic-menu2' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        onClick={handleClick2}
      >
        Edit
      </Button>
      <Menu
        id="basic-menu2"
        anchorE2={anchorE2}
        open={open2}
        onClose={handleClose2}
        MenuListProps={{
          'aria-labelledby': 'basic-button2',
        }}
        className={Styles.menuTwo}
      >
        <MenuItem onClick={handleClose2}>Copy</MenuItem>
        <MenuItem onClick={handleClose2}>Paste</MenuItem>
        <MenuItem onClick={handleClose2}>Select All</MenuItem>
        
      </Menu>
      </div>
    </div>
  );
}
