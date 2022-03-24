import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import moonFill from "./assets/dark_mode.svg";
import moonOutline from "./assets/light_mode.svg";

function App() {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("nw-rest-countries-api")
      ? localStorage.getItem("nw-rest-countries-api")
      : window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light-mode"
      : "dark-mode"
  );
  localStorage.setItem("nw-rest-countries-api", themeMode);

  const [darkModeOn, setDarkModeOn] = useState(
    themeMode === "dark-mode" ? true : false
  );

  const appBody = document.querySelector("body");
  appBody.classList = localStorage.getItem("nw-rest-countries-api");

  const handleModeChange = () => {
    setDarkModeOn(!darkModeOn);
    if (darkModeOn) {
      setThemeMode("light-mode");
    } else {
      setThemeMode("dark-mode");
    }
    appBody.classList = themeMode;
    localStorage.setItem("nw-rest-countries-api", themeMode);
  };

  return (
    <>
      <Header
        themeIcon={darkModeOn ? moonFill : moonOutline}
        handleClick={handleModeChange}
      />
      <Outlet />
    </>
  );
}

export default App;
