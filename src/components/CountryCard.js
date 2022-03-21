import "./CountryCard.css";

const CountryCard = (props) => {
  return (
    <section className="card">
      <div className="flag-wrapper">
        <img
          src={props.flag}
          alt={`${props.countryName} flag`}
          className="flag"
        />
      </div>
      <div className="text-content">
        <h2 className="country-name">{props.countryName}</h2>
        <p className="card-data">
          Population:{" "}
          <span className="card-data-results">{props.population}</span>
        </p>
        <p className="card-data">
          Region: <span className="card-data-results">{props.region}</span>
        </p>
        <p className="card-data">
          Capital: <span className="card-data-results">{props.capital}</span>
        </p>
      </div>
    </section>
  );
};

export default CountryCard;
