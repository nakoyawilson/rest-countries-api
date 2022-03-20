import { Link, useLocation } from "react-router-dom";
import "./country.css";

const CountryInfo = () => {
  const location = useLocation();
  const { data } = location.state;

  console.log(data);
  return (
    <main className="main details-country">
      <div className="container">
        <Link to="/" className="btn-back">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z"
              fill="#111517"
              className="back-icon"
            />
          </svg>
          <span>Back</span>
        </Link>
        <div className="flag-wrapper">
          <img
            src={data.flags.png}
            alt={`${data.name.common} flag`}
            className="flag"
          />
        </div>
        <h2 className="country-name">{data.name.common}</h2>
        <div className="results-wrapper">
          <div>
            {/* <p className="result-paragraph">
              Native Name:{" "}
              <span className="country-data">{data.name.nativeName}</span>
            </p> */}
            <p className="result-paragraph">
              Poluation: <span className="country-data">{data.population}</span>
            </p>
            <p className="result-paragraph">
              Region: <span className="country-data">{data.region}</span>
            </p>
            <p className="result-paragraph">
              Sub Region: <span className="country-data">{data.subregion}</span>
            </p>
            <p className="result-paragraph">
              Capital: <span className="country-data">{data.capital}</span>
            </p>
          </div>
          <div>
            <p className="result-paragraph">
              Top Level Domain: <span className="country-data">{data.tld}</span>
            </p>
            {/* <p className="result-paragraph">
        Currencies: <span className="country-data">{data.currencies}</span>
      </p> */}
            {/* <p className="result-paragraph">
        Languages: <span className="country-data">{data.languages}</span>
      </p> */}
          </div>
          <p className="border-countries">Border Countries:</p>
          <div className="border-countries-wrapper">
            {data.borders.map((country, index) => (
              <span key={index} className="border-country">
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryInfo;
