import { Cars, ICar } from './CarsModel';

test('Search USD should return 1 currency', () => {
  const ratesData: ICar[] = JSON.parse(`[{
      "currency":"USD",
      "precision":2,
      "nameI18N":"US Dollar",
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

  const sdkCar = new Cars();

  const rates = sdkCar.filter(ratesData, 'USD');

  expect(rates.length).toBe(1);
});
