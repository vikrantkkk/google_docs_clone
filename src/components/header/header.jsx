import React from "react";

import Styles from "./Header.module.css";
import { AiOutlineStar } from "react-icons/ai";
import { MdDriveFileMoveOutline } from "react-icons/md";
import { BsCloudCheck } from "react-icons/bs";
import { RxCountdownTimer } from "react-icons/rx";
import { MdOutlineMessage } from "react-icons/md";
import { BiVideoPlus } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import Buttons from "./Button";

export default function Header() {
  return (
    <div className={Styles.mainDiv}>
      <div className={Styles.childDiv}>
        <div className={Styles.firstDiv}>
          <span contentEditable="true">Untitled document</span>
        </div>

        <div className={Styles.icon}>
          <AiOutlineStar />
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
                Share
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className={Styles.bottomDiv}>
        <button className={Styles.fileButton}>
          <BsFillFileEarmarkTextFill />
        </button>
        <div className={Styles.buttonDiv}>
          <Buttons />
        </div>
      </div>
    </div>
  );
}
