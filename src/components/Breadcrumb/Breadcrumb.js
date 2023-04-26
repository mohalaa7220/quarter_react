import React from "react";
import { Link } from "react-router-dom";
const Breadcrumb = ({ title }) => {
  const navStyle = {
    "--bs-breadcrumb-divider":
      "url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E)",
  };
  return (
    <section className="breadcrumb-parent pt-7">
      <div className="container">
        <h2>Shop</h2>
        <nav style={navStyle} aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumb;
