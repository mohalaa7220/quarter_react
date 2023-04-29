import React from "react";
import "./style.css";
const StateFilters = ({ state, setState }) => {
  return (
    <>
      <h4 className="content-head">Category</h4>
      <div className="form-check form-check-inline state">
        <input
          className="form-check-input"
          type="radio"
          name="state"
          id="sale"
          value="sale"
          checked={state === "sale"}
          onChange={(e) => setState(e.target.value)}
        />
        <label className="form-check-label" htmlFor="sale">
          Sale
        </label>
      </div>
      <div className="form-check form-check-inline state">
        <input
          className="form-check-input"
          type="radio"
          name="state"
          id="rent"
          value="rent"
          checked={state === "rent"}
          onChange={(e) => setState(e.target.value)}
        />
        <label className="form-check-label" htmlFor="rent">
          Rent
        </label>
      </div>
    </>
  );
};

export default React.memo(StateFilters);
