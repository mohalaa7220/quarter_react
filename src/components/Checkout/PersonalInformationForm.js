import React from "react";

const PersonalInformationForm = ({ personalInfo, setPersonalInfo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevPersonalInfo) => ({
      ...prevPersonalInfo,
      [name]: value,
    }));
  };
  return (
    <>
      <h6>Personal Information</h6>
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={personalInfo?.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={personalInfo?.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={personalInfo?.phone}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            aria-label="area"
            name="country"
            value={personalInfo?.country}
            onChange={handleChange}
          >
            <option value="Country">Country</option>
            <option value="Egypt">Egypt</option>
            <option value="ALG">ALG</option>
            <option value="USA">USA</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default React.memo(PersonalInformationForm);
