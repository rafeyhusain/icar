import { Cars } from './CarsModel';

test('Search car', async () => {
  const sdkCar = new Cars();

  const cars = await sdkCar.filter(Cars.default());

  expect(cars.length).toBe(3);
});
