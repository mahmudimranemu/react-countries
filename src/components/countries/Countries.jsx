import { useEffect, useState } from "react";
import Country from "./Country";

import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log(country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <div className='visited-country-container'>
        <p>
          I have visited {visitedCountries.length}{" "}
          {visitedCountries.length <= 1 ? "country" : "countries"}{" "}
        </p>
        <ul className='visited-countries'>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>
              {" "}
              {country.name.common}{" "}
              <img
                src={country.flags.png}
                alt=''
              />{" "}
            </li>
          ))}
        </ul>
      </div>
      <div className='countries'>
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountriesProps={handleVisitedCountries}
            props={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
