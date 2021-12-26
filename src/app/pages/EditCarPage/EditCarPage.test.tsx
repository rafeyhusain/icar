import React from 'react';
import ReactDOM from 'react-dom';
import { ICar } from '../../sdk/CarsModel';
import EditCarPage from './EditCarPage';

test("renders without crash", ()=> {
  const div = document.createElement("div");
  let car:ICar = JSON.parse(`{
        "year":2021,
        "make":"Honda",
        "fuel":9.5,
        "maintenance":55.6,
    }`);

  ReactDOM.render(<EditCarPage {...car}/>, div);
  ReactDOM.unmountComponentAtNode(div)
})