import "./CustomSelect.css";

const CustomSelect = () => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-header-wrapper">
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
      </div>
      <div className="dropdown-list-wrapper">
        <ul className="dropdown-list">
          <li className="list-item">Africa</li>
          <li className="list-item">America</li>
          <li className="list-item">Asia</li>
          <li className="list-item">Europe</li>
          <li className="list-item">Oceania</li>
        </ul>
      </div>
    </div>
  );
};

export default CustomSelect;
