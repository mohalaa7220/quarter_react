import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, selectCartItemCount } from "../../state/cartSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartProduct = JSON.parse(localStorage.getItem("cart"));
  const totalItem = useSelector(selectCartItemCount);
  const dispatch = useDispatch();

  const deleteProduct = (product) => {
    dispatch(removeItem(product));
  };

  return (
    <>
      <Breadcrumb title="Cart" />
      <section className="pt-7">
        <div className="container">
          <div className="totalItem">
            <h3>Shopping Cart</h3>
            <span>{totalItem} Items</span>
          </div>
          {cartProduct?.length === 0 ? (
            <>
              <h1 className="text-center text-danger fw-bold">
                Your Cart Is Empty
              </h1>
            </>
          ) : (
            <>
              <div className="cart_parent">
                {cartProduct?.map((item) => (
                  <div className="cart_item" key={item.id}>
                    <div className="img_cart">
                      <LazyLoadImage
                        src={item.img}
                        alt={item.name}
                        effect="blur"
                      />
                    </div>
                    <Link to={`/products/${item.id}`}>{item.name}</Link>
                    <div className="price">
                      <h6>{item.price}</h6>
                      <small>x{item.quantity}</small>
                    </div>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteProduct(item)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
