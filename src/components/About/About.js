import React from "react";
import "./style.css";
import aboutImg from "../../assets/about.png";
import { BiHomeAlt } from "react-icons/bi";
const About = () => {
  return (
    <section id="about" className="about pt-7">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="image" data-aos="zoom-in">
              <img src={aboutImg} alt="About" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-sec" data-aos="fade-left">
              <span className="sec-heading">About US</span>
              <h1>The Leading Real Estate Rental Marketplace</h1>
              <p className="about-desc">
                Over 39,000 people work for us in more than 70 countries all
                over the This breadth of global coverage, combined with
                specialist services
              </p>
              <ul className="about-list p-0 d-flex">
                <li>
                  <BiHomeAlt />
                  <h6>Smart Home Design</h6>
                </li>
                <li>
                  <BiHomeAlt />
                  <h6>Smart Home Design</h6>
                </li>
                <li>
                  <BiHomeAlt />
                  <h6>Smart Home Design</h6>
                </li>
                <li>
                  <BiHomeAlt />
                  <h6>Smart Home Design</h6>
                </li>
              </ul>
              <div className="summery-about">
                <p>
                  Enimad minim veniam quis nostrud exercitation llamco laboris.
                </p>
              </div>
              <a href="/" className="btn2">
                OUR SERVICES
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
