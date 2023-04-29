import React from "react";
import "./style.css";
const AmenitiesFilters = ({ selectedOptions, setSelectedOptions }) => {
  const options = [
    { value: "gym", label: "Gym" },
    { value: "wifi", label: "WIFI" },
  ];

  const handleOptionChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };
  return (
    <div>
      <h4 className="content-head">Amenities</h4>
      {options.map((option) => (
        <div className="form-check" key={option.value}>
          <input
            className="form-check-input"
            type="checkbox"
            value={option.value}
            id={`option-${option.value}`}
            checked={selectedOptions.includes(option.value)}
            onChange={handleOptionChange}
          />
          <label
            className="form-check-label"
            htmlFor={`option-${option.value}`}
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default React.memo(AmenitiesFilters);
