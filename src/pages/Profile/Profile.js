import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { LazyLoadImage } from "react-lazy-load-image-component";
import me from "../../assets/me.png";
import "./style.css";
const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Breadcrumb title="Profile" />
      <section className="profile mb-5 pt-7">
        <div className="container">
          <div class="card text-center">
            <LazyLoadImage src={me} alt={user.name} effect="blur" />
            <div class="card-body">
              <h5 class="card-title">{user.name}</h5>
              <p class="card-text">{user.email}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
