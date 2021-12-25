import React from 'react';

import Cars from './Cars';

export default {
  title: 'Component/Cars',
  component: Cars,
};

const rates = {
  "institute":198,
  "lastUpdated":"2018-11-09T15:07:00Z",
  "comparisonDate":"2018-11-09T12:45:00Z",
  "baseCurrency":"EUR",
  "fx":[
     {
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
     }
  ]
};

export const CarsText = (): JSX.Element => <Cars {...rates.fx}>Cars</Cars>;
