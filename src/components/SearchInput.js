import "./SearchInput.css";

const SearchInput = (props) => {
  return (
    <form>
      <label htmlFor={props.inputId} className="visually-hidden">
        {props.inputLabel}
      </label>
      <input
        type="text"
        id={props.inputId}
        placeholder={props.inputLabel}
        className="text-input"
        onChange={props.handleInputChange}
      />
      <button className="visually-hidden">{props.buttonValue}</button>
    </form>
  );
};

export default SearchInput;
