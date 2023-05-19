/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.css";
import { BiExpand, BiBed, BiLocationPlus } from "react-icons/bi";
import { RiHeart3Line } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";
import { TbVector } from "react-icons/tb";
import { BsFillCameraFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addItem } from "../../state/cartSlice";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import defaultImage from "../../assets/default-placeholder.png";
import productImg from "../../assets/slide_1.jpg";

const ProductCard = ({ product, grid }) => {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.original_image,
      })
    );
    Swal.fire(`${product.name} to cart`);
  }

  return (
    <div
      className={
        grid ? `col-lg-4 col-md-6 col-sm-12` : `col-lg-6 col-md-6 col-sm-12`
      }
    >
      <div className="card card-product">
        <Link className="top-card" to={`/products/${product.id}`}>
          <LazyLoadImage
            alt="Logo"
            src={productImg ? productImg : defaultImage}
            effect="opacity"
          />
          <ul className="product-detail">
            <li>
              <BiLocationPlus />
              <h6>{product.location}</h6>
            </li>
            <li>
              <div className="camera">
                <BsFillCameraFill />
                <span>4</span>
              </div>
            </li>
          </ul>
          <div
            className={`status ${product.state === "rent" ? `rent` : `sale`}`}
          >
            <span>{product.state === "rent" ? "For Rent" : "For Sale"}</span>
          </div>
        </Link>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <ul className="desc-flat">
            <li>
              <span>
                3 <BiBed />
              </span>
              Bedrooms
            </li>
            <li>
              <span>
                3 <BiBed />
              </span>
              Bedrooms
            </li>
            <li>
              <span>
                500 <TbVector />
              </span>
              Square
            </li>
          </ul>

          <ul className="product-action">
            <li>
              <Link to={`/products/${product.id}`} title="Quick View">
                <BiExpand />
              </Link>
            </li>
            <li>
              <a
                title="Wishlist"
                data-bs-toggle="modal"
                data-bs-target="#liton_wishlist_modal"
              >
                <RiHeart3Line />
              </a>
            </li>
            <li>
              <a title="Product Details" onClick={handleAddToCart}>
                <FiPlusCircle />
              </a>
            </li>
          </ul>
        </div>
        <div className="card-footer">
          <h5 className="price">
            {product.price}
            <span>/Month</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
