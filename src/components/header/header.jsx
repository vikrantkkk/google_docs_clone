import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Styles from "./header.module.css";
import { AiOutlineStar } from "react-icons/ai";
import { MdDriveFileMoveOutline } from "react-icons/md";
import { BsCloudCheck } from "react-icons/bs";
import { RxCountdownTimer } from "react-icons/rx";
import { MdOutlineMessage } from "react-icons/md";
import { BiVideoPlus } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { HiOutlineDownload } from "react-icons/hi";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdPrint } from "react-icons/md";
import { MdOutlineContentPaste } from "react-icons/md";
import { MdSelectAll } from "react-icons/md";
import { BiImageAlt } from "react-icons/bi";
import { MdOutlineTableChart } from "react-icons/md";
import { BiBarChartSquare } from "react-icons/bi";
import ArticleIcon from '@mui/icons-material/Article';
import CopyAllIcon from '@mui/icons-material/CopyAll';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorE2, setAnchorE2] = useState(null);
  const open2 = Boolean(anchorE2);
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };


  const [anchorE3, setAnchorE3] = useState(null);
  const open3 = Boolean(anchorE3);
  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorE3(null);
  };

 

  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.childDiv}>
        <div className={Styles.firstDiv}>
          <span>Untitled document</span>
        </div>

        <div className={Styles.icon}>
          <AiOutlineStar/>
          <MdDriveFileMoveOutline />
          <BsCloudCheck />
        </div>

        <div className={Styles.lastDiv}>
          <RxCountdownTimer />
          <MdOutlineMessage />
          <BiVideoPlus />
          <div className={Styles.lock}>
            <button>
              <span>
                <AiOutlineLock />
                <span>Share</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className={Styles.bottomDiv}>
        <button className={Styles.fileButton}>
          <BsFillFileEarmarkTextFill />
        </button>

        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
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
            "aria-labelledby": "basic-button",
          }}
          className={Styles.menuOne}
        >
          <div className={Styles.headerTwoDiv}>
          <MenuItem onClick={handleClose}><ArticleIcon/><span>New</span></MenuItem>
         <MenuItem onClick={handleClose}><HiOutlineDownload/><span>Download</span></MenuItem>
          <MenuItem onClick={handleClose}><MdOutlineDriveFileRenameOutline/><span>Rename</span></MenuItem>
          <MenuItem onClick={handleClose}><MdPrint/><span>Print</span></MenuItem>
          </div>
        </Menu>

        <Button
          id="basic-button2"
          aria-controls={open2 ? "basic-menu2" : undefined}
          aria-haspopup="true"
          aria-expanded={open2 ? "true" : undefined}
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
            "aria-labelledby": "basic-button2",
          }}
          className={Styles.menuTwo}
        >
          <div className={Styles.headerTwoDiv}>
          <MenuItem onClick={handleClose2}><CopyAllIcon/><span>Copy</span></MenuItem>
          <MenuItem onClick={handleClose2}><MdOutlineContentPaste/><span>Paste</span></MenuItem>
          <MenuItem onClick={handleClose2}><MdSelectAll/><span>Select All</span></MenuItem>
          </div>
        </Menu>

        <Button
          id="basic-button3"
          aria-controls={open3 ? "basic-menu3" : undefined}
          aria-haspopup="true"
          aria-expanded={open3 ? "true" : undefined}
          onClick={handleClick3}
        >
          Insert
        </Button>
        <Menu
          id="basic-menu3"
          anchorE3={anchorE3}
          open={open3}
          onClose={handleClose3}
          MenuListProps={{
            "aria-labelledby": "basic-button3",
          }}
          className={Styles.menuThree}
        >
          <div className={Styles.headerTwoDiv}>
          <MenuItem onClick={handleClose3}><BiImageAlt/><span>Image</span></MenuItem>
          <MenuItem onClick={handleClose3}><MdOutlineTableChart/><span>Table</span></MenuItem>
          <MenuItem onClick={handleClose3}><BiBarChartSquare/><span>Chart</span></MenuItem>
          </div>
        </Menu>
      </div>
    </div>
  );
}
