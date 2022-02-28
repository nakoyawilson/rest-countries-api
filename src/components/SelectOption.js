const SelectOption = (props) => {
  return (
    <option value={props.optionValue} defaultChecked={props.defaultChecked}>
      {props.optionValue}
    </option>
  );
};

export default SelectOption;
