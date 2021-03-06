import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import FilterCountries from "../components/FilterCountries";
import CountryCard from "../components/CountryCard";
import "./home.css";

const Home = () => {
  const [countriesToDisplay, setCountriesToDisplay] = useState("");
  const [errorDisplayed, setErrorDisplayed] = useState(false);

  const getAllCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountriesToDisplay(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCountriesByRegion = async (region) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`
      );
      setCountriesToDisplay(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCountryByName = async (countryName) => {
    if (countryName !== "") {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        setCountriesToDisplay(response.data);
        if (errorDisplayed) {
          setErrorDisplayed(false);
        }
      } catch (err) {
        setErrorDisplayed(true);
        console.log(err);
      }
    } else {
      getAllCountries();
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    getCountryByName(value);
  };

  const handleRegionChange = (e) => {
    const { value } = e.target;
    if (value === "All Regions") {
      getAllCountries();
    } else {
      getCountriesByRegion(value);
    }
  };

  useEffect(() => {
    if (countriesToDisplay === "") {
      getAllCountries();
    }
  });

  const displayCountries = (country) => {
    return (
      <Link
        to="/country"
        onClick={() => {
          getCountryByName(country.name.common);
        }}
        key={country.name.common}
        state={{ data: country }}
      >
        <CountryCard
          countryName={country.name.common}
          flag={country.flags.svg}
          capital={country.capital}
          region={country.region}
          population={country.population
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        />
      </Link>
    );
  };
  return (
    <main className="main home">
      <div className="container">
        <div className="search-wrapper">
          <SearchInput
            inputId="search"
            inputLabel={`Search for a country\u2026`}
            buttonValue="Search"
            handleInputChange={handleInputChange}
          />
          <FilterCountries handleRegionChange={handleRegionChange} />
        </div>
        {errorDisplayed ? (
          <p className="error-msg">No results found</p>
        ) : (
          <div className="grid">
            {countriesToDisplay !== "" &&
              countriesToDisplay.map(displayCountries)}
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
