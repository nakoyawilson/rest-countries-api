import { Link, useLocation } from "react-router-dom";

const CountryInfo = () => {
  const location = useLocation();
  const { data } = location.state;

  console.log(data);
  return (
    <main>
      <Link to="/">Back</Link>
      <img src={data.flags.png} alt={`${data.name.official} flag`} />
      <h2>{data.name.official}</h2>
      {/* <p>
        Native Name: <span>{data.name.nativeName}</span>
      </p> */}
      <p>
        Poluation: <span>{data.population}</span>
      </p>
      <p>
        Region: <span>{data.region}</span>
      </p>
      <p>
        Sub Region: <span>{data.subregion}</span>
      </p>
      <p>
        Capital: <span>{data.capital}</span>
      </p>
      <p>
        Top Level Domain: <span>{data.tld}</span>
      </p>
      {/* <p>
        Currencies: <span>{data.currencies}</span>
      </p> */}
      {/* <p>
        Languages: <span>{data.languages}</span>
      </p> */}
      {/* <p>
        Border Countries: <span>{data.borders}</span>
      </p> */}
    </main>
  );
};

export default CountryInfo;
