import React from "react";
import { BsFillStopCircleFill, BsHeart, BsSave2 } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { CiSaveUp2 } from "react-icons/ci";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import firstphoto from './1.png';

function BodyFirst() {
  return (
    <div className="body-first">
      <div className="left">
        <div className="left-left">
          <BsFillStopCircleFill className="first-first" />
          <h3 className="heading">Fashion Website</h3>
          <ul>
            <li>Orix Creative</li>
            <li>Follow</li>
            <li>Hire Us</li>
          </ul>
          <img src={firstphoto} alt="Not rendering" />
        </div>
        <div className="left-right">
          <BsHeart className="icon-second" />
          <BsSave2 className="icon-third" />
        </div>
      </div>
      <div className="right">
        <BsFillStopCircleFill className="first-first" />
        <BiMessageRounded className="group-icon" />
        <CiSaveUp2 className="group-icon" />
        <AiOutlineExclamationCircle className="group-icon" />
      </div>
    </div>
  );
}

export default BodyFirst;
