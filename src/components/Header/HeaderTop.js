import React from "react";
import "./style.css";
import { HiOutlineMail } from "react-icons/hi";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlineAddLocation } from "react-icons/md";
const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <ul>
              <li>
                <HiOutlineMail />
                <a href="/">ma7220@gmail.com</a>
              </li>
              <li>
                <MdOutlineAddLocation />
                <a href="/">ma7220@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="col-md-5 social-parent">
            <div className="social">
              <FaFacebookF />
              <GrLinkedinOption />
              <AiFillGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
