import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import FilterCountries from "./components/FilterCountries";
import CountryCard from "./components/CountryCard";
import "./App.css";

function App() {
  const [darkModeOn, setDarkModeOn] = useState(false);
  const [countriesToDisplay, setCountriesToDisplay] = useState("");

  const getAllCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountriesToDisplay(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const displayCountries = (country) => {
    return (
      <CountryCard
        key={country.name}
        countryName={country.name}
        flag={country.flags.png}
        capital={country.capital}
        region={country.region}
        population={country.population}
      />
    );
  };

  return (
    <div className="App">
      <Header isDarkModeOn={darkModeOn} />
      <button onClick={getAllCountries}>Get Country Data</button>
      <SearchInput
        inputId="search"
        inputLabel="Search for a country..."
        buttonValue="Search"
      />
      <FilterCountries />
      <div className="grid">
        {countriesToDisplay !== "" && countriesToDisplay.map(displayCountries)}
      </div>
    </div>
  );
}

export default App;
