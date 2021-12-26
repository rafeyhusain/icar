import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Header from '../../components/Header/Header';
import { ICar, Cars as CarsModel } from '../../sdk/CarsModel';

function EditCarPage(item: ICar): JSX.Element {
  const [car, setCar] = useState(item);

  const handleSave = async() => {
    const sdkCars = new CarsModel();
    await sdkCars.save(car);
    alert('Car saved successfully.')
  };
  
  const handleChangeYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setCar({ ...car, year: +value });
  };
  
  const handleChangeMake = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setCar({ ...car, make: value });
  };
  
  const handleChangeFuel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setCar({ ...car, fuel: +value });
  };
  
  const handleChangeMaintenance = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setCar({ ...car, maintenance: +value })
  };

  return <>
    <div className="flex flex-col bg-gray-200">
      <Header />
    </div>
    <form className="pt-5 pl-5 w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-year">
            Year
          </label>
          <input value={car.year === 0 ? '' : car.year} onChange={handleChangeYear} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-year" type="text" placeholder="Year" />
          <p className="hidden text-red-500 text-xs italic">Please enter year.</p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-make">
            Make
          </label>
          <input  value={car.make} onChange={handleChangeMake} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-make" type="text" placeholder="Make" />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-fuel">
            Fuel consumption
          </label>
          <input value={car.fuel} onChange={handleChangeFuel} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-fuel" type="text" placeholder="Fuel" />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-maintenance">
            Annual maintenance cost
          </label>
          <input  value={car.maintenance} onChange={handleChangeMaintenance} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-maintenance" type="text" placeholder="Maintenance" />
        </div>
        <div className="pt-5 w-full md:w-1/2 px-3">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded font-normal" onClick={handleSave}>Save</button>
        </div>
      </div>
    </form>
  </>
}

export default EditCarPage;
