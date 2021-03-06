import React from 'react';
import { ICar } from '../../sdk/CarsModel';

function Car(item: ICar): JSX.Element {

  return <>
      <div className="grid grid-cols-2 mb-2 align-middle bg-gray-100 rounded-xl hover:bg-gray-200">
        <div className="flex flex-cols-3 gap-5">
          <div className="text-gray-700 font-semibold">
            {item.year ? item.year : '-'}
          </div>
          <div className="flex-initial">
            {item.fuel ? item.fuel + ' km/l' : '-'}
          </div>
          <div className="flex-initial">
            {item.maintenance ? item.maintenance + ' €/year' : '-'}
          </div>
          <div className="flex-initial">
            {item.make ? item.make : '-'}
          </div>
        </div>
      </div>
    </>
  }
export default Car;
