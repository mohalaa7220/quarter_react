import React from "react";

const CartTotals = ({ cartProduct, totalItem }) => {
  return (
    <>
      <h4 className="content-head">Cart Totals</h4>
      <ul className="list-group">
        {cartProduct?.map((item) => (
          <li className="list-group-item" key={item.id}>
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>{item.price}</span>
          </li>
        ))}
        <li className="list-group-item">
          <h6>Order Total</h6>
          <strong>${totalItem}</strong>
        </li>
      </ul>
    </>
  );
};

export default CartTotals;
