import React from "react";
import Banner from "../components/Banner/Banner";
import ProductsHome from "../components/ProductsHome/ProductsHome";
import About from "../components/About/About";
import Testimonials from "../components/Testimonials/Testimonials";
const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <ProductsHome />
      <Testimonials />
    </>
  );
};

export default Home;
