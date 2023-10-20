import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./style.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { RegisterAuth } from "../../state/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const { loadingRegister, messageRegister, isRegister } = useSelector(
    (state) => state.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(RegisterAuth({ email, password, name }));
  };

  if (isRegister) {
    navigate("/login");
  }

  return (
    <>
      <Breadcrumb title="Register" />
      <section className="content pt-7">
        <div className="container">
          <h1 className="text-center">
            Sign Up
            <br />
            Create Your Account
          </h1>
          <div className="row">
            <div className="col-md-6">
              <div className="left_side">
                <form
                  onSubmit={handleSubmit}
                  method="POST"
                  className="contact-form-box"
                >
                  <input
                    type="name"
                    name="name"
                    placeholder="Name*"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password*"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <div className="btn-wrapper mt-0">
                    <button
                      className={
                        loadingRegister
                          ? "btn2 btn_loading "
                          : "btn2  btn-block"
                      }
                      type="submit"
                    >
                      SIGNUP
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-6">
              <h6>HAVE AN ACCOUNT?</h6>
              <div className="btn-wrapper mt-0">
                <Link to="/Login" className="btn2 btn-block">
                  LOGIN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
