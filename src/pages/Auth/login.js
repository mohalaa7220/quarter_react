import "./style.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAuth } from "../../state/authSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import BreadCrumb from "../../components/Breadcrumb/Breadcrumb";
const Login = () => {
  const dispatch = useDispatch();
  const { loading, message, isAuth } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginAuth({ email, password }));
  };

  useEffect(() => {
    if (message) {
      toast.success(`${message}`);
    }
    if (isAuth) {
      window.location = "/";
    }
  }, [message, isAuth, navigate]);

  return (
    <>
      <BreadCrumb title="Login" />
      <section className="content pt-7">
        <div className="container">
          <h1 className="text-center">
            Sign In
            <br />
            To Your Account
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
                        loading ? "btn2 btn_loading " : "btn2  btn-block"
                      }
                      type="submit"
                    >
                      SIGN IN
                    </button>
                  </div>
                  <div className="forget-password">
                    <Link href="/forget-password" title="Forgot Password?">
                      <small>FORGOTTEN YOUR PASSWORD?</small>
                    </Link>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-6">
              <h6>No HAVE AN ACCOUNT?</h6>
              <div className="btn-wrapper mt-0">
                <Link to="/register" className="btn2 btn-block">
                  CREATE ACCOUNT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
