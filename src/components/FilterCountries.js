import SelectOption from "./SelectOption";

const FilterCountries = (props) => {
  return (
    <select name="regions" onChange={props.handleRegionChange}>
      <SelectOption optionValue="Filter by Region" defaultChecked={true} />
      <SelectOption optionValue="Africa" defaultChecked={false} />
      <SelectOption optionValue="America" defaultChecked={false} />
      <SelectOption optionValue="Asia" defaultChecked={false} />
      <SelectOption optionValue="Europe" defaultChecked={false} />
      <SelectOption optionValue="Oceania" defaultChecked={false} />
    </select>
  );
};

export default FilterCountries;
