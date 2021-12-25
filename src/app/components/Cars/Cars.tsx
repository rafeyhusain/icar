import React from 'react';
import { ICar } from '../../sdk/CarsModel';
import Car from '../Car/Car';
import classes from './Cars.module.css';

type CarsProps = {
  item: ICar[];
};

function Cars({item}: CarsProps): JSX.Element {
  if (!item) {
    return <div>Not found</div>
  }
  return <div className={classes.rates}>
    {item.map((item: ICar) => <Car key={item.currency} {...item}></Car>)}
  </div>;
}

export default Cars;
