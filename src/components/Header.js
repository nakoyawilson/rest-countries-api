import "./Header.css";

const Header = ({ handleClick, themeIcon }) => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="main-heading">Where in the world?</h1>
        <button onClick={handleClick} className="btn-theme" type="button">
          <img src={themeIcon} alt="" className="theme-icon" />
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
