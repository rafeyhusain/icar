import React, { useState } from 'react';
import { Cars } from '../../sdk/CarsModel';
import classes from './Search.module.css';

type OnSearch = (query: any) => void;

type SearchProps = {
  onSearch: OnSearch;
  recommend: boolean;
};

function Search({ onSearch, recommend }: SearchProps): JSX.Element {
  const [car, setCar] = useState(Cars.query());

  const handleChangeYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearch({ ...car, year: +value })
  };

  const handleChangeMake = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearch({ ...car, make: value })
  };

  const handleChangeFuelPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearch({ ...car, fuelPrice: value })
  };

  const handleChangeDistance = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearch({ ...car, distance: value })
  };

  const setSearch = (query: any) => {
    setCar(query);
  };

  const handleGo = () => {
    onSearch(car);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(car);
    }
  };

  const simple =
    <>
      <span className='pl-5'>
        <input value={car.year === 0 ? '' : car.year} onChange={handleChangeYear} onKeyPress={handleKeyPress} placeholder=" Enter Year e.g. 2021" />
      </span>
      <span className='pl-5'>
        <input value={car.make} onChange={handleChangeMake} onKeyPress={handleKeyPress} placeholder=" Enter Make e.g. Honda" />
      </span>
      <span className='pl-5'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded font-normal" onClick={handleGo}>Go</button>
      </span>
    </>;

  const recommended =
    <>
      <span className='pl-5'>
        <input value={car.fuelPrice} onChange={handleChangeFuelPrice} onKeyPress={handleKeyPress} placeholder=" Enter fuel price (€/L)" />
      </span>
      <span className='pl-5'>
        <input value={car.distance} onChange={handleChangeDistance} onKeyPress={handleKeyPress} placeholder=" Enter travel/month (km/month)" />
      </span>
      <span className='pl-5'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded font-normal" onClick={handleGo}>Go</button>
      </span>
    </>;

  return <div className={classes.search}>
    <span>Search
    </span>
    {recommend ? recommended : simple}
  </div>;
}

export default Search;
