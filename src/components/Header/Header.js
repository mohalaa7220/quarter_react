/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import logo from "../..//assets/logo.png";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-block">
        <div className="row">
          <div className="col">
            <a className="navbar-brand" href="index.html">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          <div className="col menu">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="sub-logo">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/products">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Checkout
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      My Account
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <div className="header-right">
              <div className="profile">
                <div className="nav-item dropdown">
                  <a
                    className="nav-link user dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <AiOutlineUser />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/">
                        Signing
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Register
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Profile
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="cart" id="btn-cart">
                <AiOutlineShoppingCart />
              </div>
              <div className="menu-icon" id="menu-icon">
                <BiMenuAltRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
