const SearchInput = (props) => {
  return (
    <form>
      <label htmlFor={props.inputId}>{props.inputLabel}</label>
      <input
        type="text"
        id={props.inputId}
        placeholder={props.inputLabel}
        onChange={props.handleInputChange}
      />
      <button>{props.buttonValue}</button>
    </form>
  );
};

export default SearchInput;
