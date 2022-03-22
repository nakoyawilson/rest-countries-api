const SelectOption = (props) => {
  return (
    <option
      value={props.optionValue}
      defaultChecked={props.defaultChecked}
      className="filter-option"
    >
      {props.optionValue}
    </option>
  );
};

export default SelectOption;
