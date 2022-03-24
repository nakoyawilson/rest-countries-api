import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./country.css";

const CountryInfo = () => {
  const location = useLocation();
  const shouldDisplayData = location.state === null ? false : true;
  const { data } = location.state || {};
  const [borderCountries, setBorderCountries] = useState([]);

  const getBorderCountryNames = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha?codes=${data.borders.toString()}`
      );
      setBorderCountries(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    shouldDisplayData && getBorderCountryNames();
  });

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
        {shouldDisplayData && (
          <div className="country-details-wrapper">
            <div className="flag-wrapper">
              <img
                src={data.flags.png}
                alt={`${data.name.common} flag`}
                className="flag"
              />
            </div>
            <div className="text-content">
              <h2 className="country-name">{data.name.common}</h2>
              <div className="results-wrapper">
                <div>
                  <p className="result-paragraph">
                    Native{" "}
                    {Object.keys(data.name.nativeName).length === 1
                      ? "Name: "
                      : "Names: "}
                    {Object.entries(data.name.nativeName).map(
                      ([key, val], index) => (
                        <span className="country-data" key={key}>
                          {val.common}
                          {Object.keys(data.name.nativeName).length - 1 !==
                          index
                            ? ", "
                            : ""}
                        </span>
                      )
                    )}
                  </p>
                  <p className="result-paragraph">
                    Poluation:{" "}
                    <span className="country-data">
                      {data.population
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </span>
                  </p>
                  <p className="result-paragraph">
                    Region: <span className="country-data">{data.region}</span>
                  </p>
                  <p className="result-paragraph">
                    Sub Region:{" "}
                    <span className="country-data">{data.subregion}</span>
                  </p>
                  <p className="result-paragraph">
                    Capital:{" "}
                    <span className="country-data">{data.capital}</span>
                  </p>
                </div>
                <div>
                  <p className="result-paragraph">
                    Top Level Domain:{" "}
                    <span className="country-data">{data.tld}</span>
                  </p>
                  <p className="result-paragraph">
                    {Object.keys(data.currencies).length === 1
                      ? "Currency: "
                      : "Currencies: "}
                    {Object.entries(data.currencies).map(
                      ([key, val], index) => (
                        <span className="country-data" key={key}>
                          {val.name}
                          {Object.keys(data.currencies).length - 1 !== index
                            ? ", "
                            : ""}
                        </span>
                      )
                    )}
                  </p>
                  <p className="result-paragraph">
                    {Object.keys(data.languages).length === 1
                      ? "Language: "
                      : "Languages: "}
                    {Object.entries(data.languages).map(([key, val], index) => (
                      <span className="country-data" key={key}>
                        {val}
                        {Object.keys(data.languages).length - 1 !== index
                          ? ", "
                          : ""}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              {data.borders && (
                <div className="border-countries-results-wrapper">
                  <p className="border-countries">
                    Border{" "}
                    {data.borders.length === 1 ? "Country: " : "Countries: "}
                  </p>
                  <div className="border-countries-wrapper">
                    {borderCountries.map((country, index) => (
                      <Link
                        to="/country"
                        key={country.name.common}
                        state={{ data: country }}
                        className="border-country"
                      >
                        {country.name.common}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CountryInfo;
