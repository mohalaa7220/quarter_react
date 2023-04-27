import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products/products";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import ProductDetails from "./pages/Products/productDetails";
import CartSlide from "./components/CartSlide/CartSlide";
import { useState } from "react";
import HeaderTop from "./components/Header/HeaderTop";
import Cart from "./pages/Cart/cart";

const App = () => {
  const [right, setRight] = useState(false);
  return (
    <Router>
      <HeaderTop />
      <Header right={right} setRight={setRight} />
      <CartSlide right={right} setRight={setRight} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
