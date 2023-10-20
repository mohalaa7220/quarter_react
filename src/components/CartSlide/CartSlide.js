import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../state/cartSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CartSlide = ({ right, setRight }) => {
  const cartProduct = JSON.parse(localStorage.getItem("cart"));
  const totalItem = useSelector(selectCartTotal);
  return (
    <div className={!right ? "cart-slide" : "cart-slide right "}>
      <div className="heading">
        <h6>Cart</h6>
        <span className="close-cart" onClick={() => setRight(!right)}>
          X
        </span>
      </div>
      <div className="content">
        {cartProduct?.map((product) => (
          <div className="card-cart" key={product.id}>
            <LazyLoadImage src={product.img} alt={product.name} effect="blur" />
            <div className="info">
              <Link to={`/products/${product.id}`}>{product.name}</Link>
              <span className="total">
                {product.quantity} x ${product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="sub-total">
        <h5>SubTotal:</h5>
        <span>${totalItem}</span>
      </div>

      <div className="bottom-cart">
        <Link className="btn2" to="/cart">
          View Cart
        </Link>
        <Link className="btn2" to="/checkout">
          CheckOut
        </Link>
      </div>
    </div>
  );
};

export default CartSlide;
