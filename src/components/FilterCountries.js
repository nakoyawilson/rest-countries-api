import SelectOption from "./SelectOption";
import "./FilterCountries.css";

const FilterCountries = (props) => {
  return (
    <div className="dropdown-wrapper">
      <select
        name="regions"
        onChange={props.handleRegionChange}
        className="dropdown"
      >
        <SelectOption optionValue="Filter by Region" defaultChecked={true} />
        <SelectOption optionValue="All Regions" defaultChecked={false} />
        <SelectOption optionValue="Africa" defaultChecked={false} />
        <SelectOption optionValue="America" defaultChecked={false} />
        <SelectOption optionValue="Asia" defaultChecked={false} />
        <SelectOption optionValue="Europe" defaultChecked={false} />
        <SelectOption optionValue="Oceania" defaultChecked={false} />
      </select>
    </div>
  );
};

export default FilterCountries;
