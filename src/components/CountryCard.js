const CountryCard = (props) => {
  return (
    <section>
      <div className="flag-wrapper">
        <img src={props.flag} alt={`${props.countryName} flag`} />
      </div>
      <h2>{props.countryName}</h2>
      <p>Population: {props.population}</p>
      <p>Region: {props.region}</p>
      <p>Capital: {props.capital}</p>
    </section>
  );
};

export default CountryCard;
