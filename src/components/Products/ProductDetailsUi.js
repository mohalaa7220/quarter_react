import styles from "./product_details.module.css";
import { MdDateRange } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { BiBed } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import Moment from "react-moment";

const ProductDetailsUi = ({ product }) => {
  return (
    <>
      <section className="gallery">
        <div className="container-fluid p-0 m-0">
          <div className="gallery-slide">
            {/* <img src="images/details.jpg" alt="Gallery" />
          <img src="images/details2.jpg" alt="Gallery" />
          <img src="images/details3.jpg" alt="Gallery" />
          <img src="images/details.jpg" alt="Gallery" />
          <img src="images/details2.jpg" alt="Gallery" />
          <img src="images/details3.jpg" alt="Gallery" />
          <img src="images/details.jpg" alt="Gallery" />
          <img src="images/details2.jpg" alt="Gallery" />
          <img src="images/details3.jpg" alt="Gallery" /> */}
          </div>
        </div>
      </section>

      <section className={`${styles["content_details"]} pt-7`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 p-0">
              <div className={styles["left_side"]}>
                <ul className={styles["top-content"]}>
                  <li
                    className={`${styles["status"]} ${
                      product.state === "rent"
                        ? `${styles["rent"]}`
                        : `${styles["sale"]}`
                    }`}
                  >
                    <span>
                      {product.state === "rent" ? "For Rent" : "For Sale"}
                    </span>
                  </li>

                  <li className={styles["date"]}>
                    <MdDateRange />
                    <span>
                      <Moment format="YYYY/MM/DD">{product.created}</Moment>
                    </span>
                  </li>

                  <li className={styles["comments"]}>
                    <FaRegCommentDots />
                    <span>35 Comments</span>
                  </li>
                </ul>

                {/* <!-- content --> */}
                <div className={styles["content"]}>
                  <h1>{product.name}</h1>
                  <div className={styles["desc"]}>
                    <h4 className={styles["content-head"]}>Description</h4>
                    <p>{product.description}</p>
                  </div>
                  <div className="property_detail_parent mb-4">
                    <h4 className={styles["content-head"]}>Property Detail</h4>
                    <div className={styles["property_detail_list"]}>
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

                  {/* <!-- Facts and Features --> */}
                  <div className={styles["facts_features"]}>
                    <h4 className={styles["content-head"]}>
                      Facts and Features
                    </h4>
                    <ul className={styles["facts_features_list"]}>
                      <li>
                        <div className={styles["feature-list-item"]}>
                          <BiBed />
                          <div className={styles["item-desc"]}>
                            <h6>Living Room</h6>
                            <small>20 x 16 sq feet</small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* <!-- Amenities --> */}
                  <div className={styles["amenities"]}>
                    <h4 className={styles["content-head"]}>Amenities</h4>
                    <ul className={styles["amenities_list"]}>
                      <li>
                        <BsCheck />
                        <span>Air Conditioning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className={styles["right_side"]}>
                <div className={styles["widget"]}>
                  <h4 className={styles["content-head"]}>
                    Drop Message For Book
                  </h4>
                  <form action="#">
                    <input type="text" name="name" placeholder="Your Name*" />
                    <input
                      type="text"
                      name="email"
                      placeholder="Your e-Mail*"
                    />
                    <textarea
                      name="message"
                      placeholder="Write Message..."
                    ></textarea>
                    <button type="submit" className="btn theme-btn-1">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsUi;
