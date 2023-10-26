import { useState } from "react";
import "./product_details.css";
import { MdDateRange } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import Moment from "react-moment";
import BookProduct from "../BookProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookProduct, clearMessage } from "../../state/productSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Comments from "../Comments/Comments";
import AddComments from "../Comments/AddComments";

const ProductDetailsUi = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const messageUpload = useSelector((state) => state.products.message);
  const { loadingBook } = useSelector((state) => state.products);
  const { isAuth, user } = useSelector((state) => state.auth);

  // Handle Book
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      toast.error("Enter All data");
      return;
    }
    if (isAuth || user?.length === 0) {
      toast.error("You must be logged in");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
      return;
    }
    dispatch(
      fetchBookProduct({
        id: product.id,
        formData: { product: product.id, name, email, message },
      })
    );
  };

  useEffect(() => {
    if (messageUpload) {
      toast.success(messageUpload);

      const timer = setTimeout(() => {
        dispatch(clearMessage());
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
    console.log(messageUpload);
  }, [messageUpload]);

  return (
    <>
      <section className="gallery">
        <div className="container-fluid p-0 m-0">
          <div className="gallery-slide"></div>
        </div>
      </section>

      <section className="content_details pt-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 p-0">
              <div className="left_side">
                <ul className="top-content">
                  <li
                    className={`status ${
                      product.state === "rent" ? `rent` : `sale`
                    }`}
                  >
                    <span>
                      {product.state === "rent" ? "For Rent" : "For Sale"}
                    </span>
                  </li>

                  <li className="date">
                    <MdDateRange />
                    <span>
                      <Moment format="YYYY/MM/DD">{product.created}</Moment>
                    </span>
                  </li>

                  <li className="comments">
                    <FaRegCommentDots />
                    <span>35 Comments</span>
                  </li>
                </ul>

                {/* <!-- content --> */}
                <div className="content">
                  <h1>{product.name}</h1>
                  <div className="desc">
                    <h4 className="content-head">Description</h4>
                    <p>{product.description}</p>
                  </div>
                  <div className="property_detail_parent mb-4">
                    <h4 className="content-head">Property Detail</h4>
                    <div className="property_detail_list">
                      <ul>
                        <li>
                          <label>Property ID:</label> <span>HZ29</span>
                        </li>
                        <li>
                          <label>Home Area: </label> <span>120 sqft</span>
                        </li>
                        <li>
                          <label>Rooms:</label> <span>7</span>
                        </li>
                        <li>
                          <label>Baths:</label> <span>2</span>
                        </li>
                        <li>
                          <label>Year built:</label> <span>1992</span>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <label>Lot Area:</label> <span>HZ29 </span>
                        </li>
                        <li>
                          <label>Lot dimensions:</label> <span>120 sqft</span>
                        </li>
                        <li>
                          <label>Beds:</label> <span>7</span>
                        </li>
                        <li>
                          <label>Price:</label> <span>2</span>
                        </li>
                        <li>
                          <label>Property Status:</label> <span>For Sale</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* <!-- Amenities --> */}
                  <div className="amenities">
                    <h4 className="content-head">Amenities</h4>
                    <ul className="amenities_list">
                      {product?.amenities.map((item) => (
                        <li key={item.id}>
                          <BsCheck />
                          <span>{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Comments id={product.id} />
                  <AddComments id={product.id} />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <BookProduct
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                message={message}
                setMessage={setMessage}
                handleSubmit={handleSubmit}
                loadingBook={loadingBook}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsUi;
