import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./style.css";
import PersonalInformationForm from "../../components/Checkout/PersonalInformationForm";
import AddressForm from "../../components/Checkout/AddressForm";
import CartTotals from "../../components/Checkout/CartTotals";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItemCount, selectCartTotal } from "../../state/cartSlice";
import { addOrderItem } from "../../state/checkoutSlice";
import { toast } from "react-toastify";

const Checkout = () => {
  const dispatch = useDispatch();
  const { loading, message } = useSelector((state) => state.checkoutSlice);

  const cartProduct = JSON.parse(localStorage.getItem("cart"));
  const totalItem = useSelector(selectCartTotal);
  const totalQuantity = useSelector(selectCartItemCount);

  const cartProductIds = cartProduct?.map((item) => String(item.id));

  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    zip: "",
    address: "",
    address2: "",
    town: "",
    state: "",
    product: cartProductIds,
    quantity: totalQuantity,
    total_price: totalItem,
  });

  const handleOrder = (e) => {
    e.preventDefault();
    dispatch(addOrderItem(personalInfo));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
    }
  }, [message]);

  return (
    <>
      <Breadcrumb title="Checkout" />
      <section className="content pt-7">
        <div className="container">
          <h4 className="content-head">Billing Details</h4>
          <div className="checkout-container">
            <form onSubmit={handleOrder} method="POST">
              <PersonalInformationForm
                personalInfo={personalInfo}
                setPersonalInfo={setPersonalInfo}
              />
              <AddressForm
                addressInfo={personalInfo}
                setAddressInfo={setPersonalInfo}
              />

              <div className="col-12">
                <h6>Order Notes (optional)</h6>
                <textarea
                  name="message"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                ></textarea>
              </div>
              <button
                type="submit"
                className={!loading ? "btn2 btn-block" : "btn2 btn_loading"}
              >
                Order Now
              </button>
            </form>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h4 className="content-head">Payment Method</h4>
            </div>
            <div className="col-lg-6">
              <CartTotals cartProduct={cartProduct} totalItem={totalItem} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
