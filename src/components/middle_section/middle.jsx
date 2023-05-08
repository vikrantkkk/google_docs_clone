import React from "react";
import styles from "./Middle.module.css";
import { BiUndo } from "react-icons/bi";
import { BiRedo } from "react-icons/bi";
import { AiOutlineFormatPainter } from "react-icons/ai";
import { BiPrinter } from "react-icons/bi";
import { BiHighlight } from "react-icons/bi";
import { BiCommentAdd } from "react-icons/bi";
import { RiArrowDropUpLine } from "react-icons/ri";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";
import ChecklistIcon from "@mui/icons-material/Checklist";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import { TextColor } from "./Normaltext";
import Normaltext from "./Normaltext";
import { Fontstyle } from "./Normaltext";
import SelectLabels from "../../atoms/Selector";
import IncDecBtn from "../../atoms/IncDecCount";
import Editings from "../../atoms/Editing";
import InsertPhoto from "../textfield/InsertPhoto";

const Middle = () => {
  
  const handleBold = () => {
    document.execCommand("bold", false, null);
  };

  const handleItalic = () => {
    document.execCommand("italic", false, null);
  };

  const handleUnderline = () => {
    document.execCommand("underline", false, null);
  };

  const handleUndo = () => {
    document.execCommand("undo", false, null);
  };

  const handleRedo = () => {
    document.execCommand("redo", false, null);
  };
  const handleRight = () => {
    document.execCommand("justifyRight", false, null);
  };
  const handleLeft = () => {
    document.execCommand("justifyLeft", false, null);
  };
  const handleCenter = () => {
    document.execCommand("justifyCenter", false, null);
  };

  return (
    <div className={styles.mainu_bar}>
      <BiUndo onClick={handleUndo} />
      <BiRedo onClick={handleRedo} />
      <BiPrinter />
      <SpellcheckIcon />
      <AiOutlineFormatPainter />
      <SelectLabels />
      <Normaltext />
      <Fontstyle />
      <IncDecBtn />
      <FormatBoldIcon onClick={handleBold} />
      <FormatItalicIcon onClick={handleItalic} />
      <FormatUnderlinedIcon onClick={handleUnderline} />
      <TextColor />
      <BiHighlight />
      <InsertLinkIcon />
      <BiCommentAdd />
      <InsertPhoto />
      <FormatAlignLeftIcon onClick={handleLeft} />
      <FormatAlignRightIcon onClick={handleRight} />
      <FormatAlignCenterIcon onClick={handleCenter} />
      <FormatLineSpacingIcon />
      <ChecklistIcon />
      <FormatListBulletedIcon />
      <FormatListNumberedIcon />
      <FormatIndentDecreaseIcon />
      <FormatIndentIncreaseIcon />
      <FormatClearIcon />
      <Editings className="editings-container" />
      <RiArrowDropUpLine />
    </div>
  );
};

export default Middle;
