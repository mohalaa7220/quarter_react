import React from "react";

const PriceFilters = ({ price, setPrice }) => {
  const options = [
    { value: "1000", label: "Low" },
    { value: "3000", label: "High" },
  ];

  const onChangePrice = (e) => {
    const value = e.target.value;
    // setPrice(value);
    if (e.target.checked) {
      setPrice(value);
    }
  };
  console.log(price);
  return (
    <div>
      <h4 className="content-head">Price</h4>
      {options.map((option) => (
        <div className="form-check" key={option.value}>
          <input
            className="form-check-input"
            type="checkbox"
            value={option.value}
            id={`option-${option.value}`}
            // checked={price.includes(option.value)}
            onChange={onChangePrice}
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

export default React.memo(PriceFilters);
