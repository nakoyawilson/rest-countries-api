import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import FilterCountries from "../components/FilterCountries";
import CountryCard from "../components/CountryCard";

const Home = () => {
  const [countriesToDisplay, setCountriesToDisplay] = useState("");

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
      } catch (err) {
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
    getCountriesByRegion(value);
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
        key={country.name.official}
      >
        <CountryCard
          countryName={country.name.official}
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
    <main>
      <SearchInput
        inputId="search"
        inputLabel="Search for a country..."
        buttonValue="Search"
        handleInputChange={handleInputChange}
      />
      <FilterCountries handleRegionChange={handleRegionChange} />
      <div className="grid">
        {countriesToDisplay !== "" && countriesToDisplay.map(displayCountries)}
      </div>
    </main>
  );
};

export default Home;
