const Header = (props) => {
  return (
    <header>
      <h1>Where in the world?</h1>
      <button onClick={props.handleClick}>
        <img
          src={
            props.darkModeOn ? "assets/dark_mode.svg" : "assets/light_mode.svg"
          }
          alt=""
        />
        Dark Mode
      </button>
    </header>
  );
};

export default Header;
