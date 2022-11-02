import {countries, Country} from "countries-list";
import {CSSProperties, useState} from "react";
import Search from "../components/search";

export default () => {
  const allCountries: Country[] = Object.values(countries)
  const [ filteredResult, setFilteredResult ] = useState(allCountries);

  const searchItems = (searchValue: string) => {
    const normalizedSearchValue = searchValue.trim().toLowerCase();
    if (!normalizedSearchValue) {
      setFilteredResult(allCountries);
      return;
    }

    const filteredData: Country[] = allCountries.filter(
      country => [country.name, country.capital, country.emoji].join('').toLowerCase().includes(normalizedSearchValue)
    );
    setFilteredResult(filteredData);
  }

  const bigColumn: CSSProperties = { width: '40%' };
  const middleColumn: CSSProperties = { width: '15%' };
  const smallColumn: CSSProperties = { width: '5%' };

  return (
    <>
      <Search searchItems={searchItems}/>
      <div className="container">
        <table className="table is-striped">
          <thead>
          <tr>
            <th style={bigColumn}>Name</th>
            <th style={bigColumn}>Capital</th>
            <th style={smallColumn}>Flag</th>
            <th style={middleColumn}/>
          </tr>
          </thead>
          <tbody>
          { filteredResult.map(country => (
            <tr>
              <th>{country.name}</th>
              <th>{country.capital}</th>
              <th>{country.emoji}</th>
              <th>
                <a href={`https://en.wikipedia.org/wiki/${country.name}`} target="_blank" rel="noreferrer">
                  <button className="button is-link">More Info</button>
                </a>
              </th>
            </tr>
          )) }
          </tbody>
        </table>
      </div>
    </>
  )
}