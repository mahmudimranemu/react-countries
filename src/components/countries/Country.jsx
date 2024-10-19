import { useState } from "react";
import "./Country.css";

const Country = ({ props, handleVisitedCountriesProps }) => {
  const { name, flags, capital, population, continents } = props;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(true);
  };

  return (
    <div className='country'>
      <div className='heading'>
        <h2>{name.common}</h2>
        <p className={visited ? "visited-ribbon" : " hidden"}>Visited</p>
      </div>
      <div className='card-body'>
        <img
          src={flags.png}
          alt={name.official}
        />
        <div className='details'>
          <p> Capital: {capital} </p>
          <p> Population: {population} </p>
          <p> Continents: {continents} </p>
          <button onClick={() => handleVisitedCountriesProps(props)}>
            Mark visited
          </button>
          <button
            onClick={handleVisited}
            className={visited ? "btn-visited" : " btn-visit"}>
            {visited ? "Visited" : " Visit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Country;
