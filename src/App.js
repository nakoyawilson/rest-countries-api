import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [darkModeOn, setDarkModeOn] = useState(false);

  const handleModeChange = () => {
    setDarkModeOn(!darkModeOn);
  };

  return (
    <div className="App">
      <Header isDarkModeOn={darkModeOn} handleClick={handleModeChange} />
      <Outlet />
    </div>
  );
}

export default App;
