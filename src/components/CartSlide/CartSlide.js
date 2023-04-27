import React from "react";
import "./style.css";
import img1 from "../../assets/news_1.webp";
import { Link } from "react-router-dom";

const CartSlide = ({ right, setRight }) => {
  return (
    <div className={!right ? "cart-slide" : "cart-slide right "}>
      <div className="heading">
        <h6>Cart</h6>
        <span className="close-cart" onClick={() => setRight(!right)}>
          X
        </span>
      </div>
      <div className="content">
        <div className="card-cart">
          <img src={img1} alt="Cart Img" />
          <div className="info">
            <a href="product_details.html">Wheel Bearing Retainer</a>
            <span className="total">1 x $65.00 </span>
          </div>
        </div>
      </div>
      <div className="sub-total">
        <h5>SubTotal:</h5>
        <span>$310.00 </span>
      </div>

      <div className="bottom-cart">
        <Link className="btn2" to="/cart">
          View Cart
        </Link>
        <Link className="btn2" to="/cart">
          CheckOut
        </Link>
      </div>
    </div>
  );
};

export default CartSlide;
