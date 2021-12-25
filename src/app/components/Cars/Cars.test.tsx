import React from 'react';
import ReactDOM from 'react-dom';
import { ICar } from '../../sdk/CarsModel';
import Cars from './Cars';

test("renders without crash", ()=> {
  const div = document.createElement("div");
  let rates:ICar[] = JSON.parse(`[{
        "currency":"FJD",
        "precision":2,
        "nameI18N":"Fiji Dollar",
        "exchangeCar":{
          "buy":2.0000000,
          "middle":2.2500000,
          "sell":2.5000000,
          "indicator":0,
          "lastModified":"2012-02-14T23:00:00Z"
        },
        "banknoteCar":{
          "buy":2.2000000,
          "middle":2.4000000,
          "sell":2.6000000,
          "indicator":0,
          "lastModified":"2018-11-06T23:00:00Z"
        },
        "flags":[
          "provided"
        ]
    }]`);

  ReactDOM.render(<Cars item={rates}/>, div);
  ReactDOM.unmountComponentAtNode(div)
})