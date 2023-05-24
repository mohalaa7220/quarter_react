import React from "react";

const AddressForm = ({ addressInfo, setAddressInfo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <h6>Address</h6>
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            name="address"
            placeholder="House number and street name"
            value={addressInfo?.address}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            name="address2"
            placeholder="Apartment, suite, unit etc. (optional)"
            value={addressInfo?.address2}
            onChange={handleChange}
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <h6>Town/City</h6>
          <input
            type="text"
            name="town"
            placeholder="Town/City"
            value={addressInfo?.town}
            onChange={handleChange}
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <h6>state</h6>
          <input
            type="text"
            name="state"
            placeholder="state"
            value={addressInfo?.state}
            onChange={handleChange}
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <h6>zip</h6>
          <input
            type="text"
            name="zip"
            placeholder="zip"
            value={addressInfo?.zip}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default React.memo(AddressForm);
