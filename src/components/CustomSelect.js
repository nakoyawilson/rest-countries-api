import { useState } from "react";
import "./CustomSelect.css";

const CustomSelect = ({ handleRegionChange, getAllCountries }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClicked = (value) => {
    setIsOpen(false);
    setSelectedOption(value);
    if (value === "") {
      getAllCountries();
    } else {
      handleRegionChange(value);
    }
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-header-wrapper" onClick={toggleOpen}>
        <span className="dropdown-header">Filter by Region</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow-svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.45 0.450001L5 3.9L1.55 0.450001L0.5 1.5L5 6L9.5 1.5L8.45 0.450001Z"
            fill="white"
            className="arrow-icon"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="dropdown-list-wrapper">
          <ul className="dropdown-list">
            {selectedOption !== "" && (
              <li
                className="list-item"
                onClick={() => {
                  handleOptionClicked("");
                }}
              >
                All Regions
              </li>
            )}
            <li
              className="list-item"
              onClick={() => {
                handleOptionClicked("Africa");
              }}
            >
              Africa
            </li>
            <li
              className="list-item"
              onClick={() => {
                handleOptionClicked("America");
              }}
            >
              America
            </li>
            <li
              className="list-item"
              onClick={() => {
                handleOptionClicked("Asia");
              }}
            >
              Asia
            </li>
            <li
              className="list-item"
              onClick={() => {
                handleOptionClicked("Europe");
              }}
            >
              Europe
            </li>
            <li
              className="list-item"
              onClick={() => {
                handleOptionClicked("Oceania");
              }}
            >
              Oceania
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
