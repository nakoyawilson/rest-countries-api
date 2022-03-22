import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import darkModeIcon from "./assets/dark_mode.svg";
import lightModeIcon from "./assets/light_mode.svg";
import "./App.css";

function App() {
  const [darkModeOn, setDarkModeOn] = useState(false);
  // const [themeMode, setThemeMode] = useState(
  //   window.matchMedia &&
  //     window.matchMedia("(prefers-color-scheme: light)").matches
  //     ? "light-mode"
  //     : "dark-mode"
  // );
  const [themeMode, setThemeMode] = useState("light-mode");

  const appBody = document.querySelector("body");
  appBody.classList = themeMode;

  const handleModeChange = () => {
    setDarkModeOn(!darkModeOn);
    if (darkModeOn) {
      setThemeMode("dark-mode");
    } else {
      setThemeMode("light-mode");
    }
    appBody.classList = themeMode;
  };

  return (
    <>
      <Header
        // themeIcon={darkModeOn ? lightModeIcon : darkModeIcon}
        themeIcon={lightModeIcon}
        handleClick={handleModeChange}
      />
      <Outlet />
    </>
  );
}

export default App;
