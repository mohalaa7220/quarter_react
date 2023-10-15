import React, { useState, useEffect } from "react";
import testCustomer from "../../assets/test_customer.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import "./style.css";
import axiosInstance from "../../utils/axiosInstance";
import SkeletonLoading from "../LazyLoaing/SkeletonLoading";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance("/testimonials/");
        const data = await response.data;
        setTestimonial(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="testimonial pt-7">
      <div className="services-heading text-center">
        <h6 className="sec-heading">Our Testimonial</h6>
        <h1>Clients Feedback</h1>
      </div>

      <div className="container">
        <div className="row">
          {isLoading ? (
            <SkeletonLoading />
          ) : (
            testimonial?.map((item) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
                <div className="card">
                  <div className="info_testimonial">
                    <FaQuoteLeft />
                    <p>{item.text}</p>
                  </div>
                  <div className="card-footer">
                    <img src={testCustomer} alt="Customer" />
                    <div className="customer">
                      <h6>{item.user.name}</h6>
                      <span>Selling Agents</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Testimonials);
