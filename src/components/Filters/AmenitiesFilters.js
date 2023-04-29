import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import "./style.css";
const AmenitiesFilters = ({ selectedOptions, setSelectedOptions }) => {
  const [amenities, setAmenities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance("product/amenities");
        const data = await response.data;
        setAmenities(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

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
      {isLoading ? (
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          {amenities.map((option) => (
            <div className="form-check" key={option.id}>
              <input
                className="form-check-input"
                type="checkbox"
                value={option.name}
                id={`option-${option.id}`}
                checked={selectedOptions.includes(option.name)}
                onChange={handleOptionChange}
              />
              <label
                className="form-check-label"
                htmlFor={`option-${option.id}`}
              >
                {option.name}
              </label>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default React.memo(AmenitiesFilters);
