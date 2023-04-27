import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";
import slide1 from "../../assets/slide_1.jpg";
import slide2 from "../../assets/slide_2.jpg";
import slide3 from "../../assets/slide_3.jpg";

const Banner = () => {
  return (
    <section className="banner">
      <Carousel>
        <Carousel.Item>
          <div className="container-filud">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="content-slide" data-aos="fade-right">
                  <h1>
                    Find Your Dream <br />
                    House By Us
                  </h1>
                  <div className="desc_banner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore.
                    </p>
                  </div>
                  <a href="/" className="btn2">
                    Make An Enquiry
                  </a>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <img src={slide1} alt="Slide1" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-filud">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="content-slide" data-aos="fade-right">
                  <h1>
                    Find Your Dream <br />
                    House By Us
                  </h1>
                  <div className="desc_banner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore.
                    </p>
                  </div>
                  <a href="/" className="btn2">
                    Make An Enquiry
                  </a>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <img src={slide2} alt="Slide1" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-filud">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="content-slide" data-aos="fade-right">
                  <h1>
                    Find Your Dream <br />
                    House By Us
                  </h1>
                  <div className="desc_banner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore.
                    </p>
                  </div>
                  <a href="/" className="btn2">
                    Make An Enquiry
                  </a>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <img src={slide3} alt="Slide1" />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Banner;
