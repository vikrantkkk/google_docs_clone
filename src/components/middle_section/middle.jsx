import React from "react";
import styles from "./Middle.module.css";
import { BiUndo } from "react-icons/bi";
import { BiRedo } from "react-icons/bi";
import { AiOutlineFormatPainter } from "react-icons/ai";
import { BiPrinter } from "react-icons/bi";
import { TbTextColor } from "react-icons/tb";
import { BiHighlight } from "react-icons/bi";
import { BiCommentAdd } from "react-icons/bi";
import { RiArrowDropUpLine } from "react-icons/ri";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
// import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import AlignItems from "../../atoms/AlignItems";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";
import ChecklistIcon from "@mui/icons-material/Checklist";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import SelectLabels from "../../atoms/Selector";
import IncDecBtn from "../../atoms/IncDecCount";
import Editings from "../../atoms/Editing";
const Middle = () => {

  return (
    <div className={styles.mainu_bar}>
      <BiUndo />
      <BiRedo />
      <BiPrinter />
      <SpellcheckIcon />
      <AiOutlineFormatPainter />
     <SelectLabels/>
      
      <IncDecBtn/>
      {/* fontsize */}
      <FormatBoldIcon />
      <FormatItalicIcon/>
      <FormatUnderlinedIcon />
      <TbTextColor />
      <BiHighlight />
      <InsertLinkIcon />
      <BiCommentAdd />
      <InsertPhotoIcon />
      {/* <FormatAlignLeftIcon /> */}
      <AlignItems/>
      {/* not cmplt */}
      <FormatLineSpacingIcon />
      <ChecklistIcon />
      <FormatListBulletedIcon />
      <FormatListNumberedIcon />
      <FormatIndentDecreaseIcon />
      <FormatIndentIncreaseIcon />
      <FormatClearIcon />
      <Editings className="editings-container"/>
      <RiArrowDropUpLine />
    </div>
  );
};

export default Middle;
