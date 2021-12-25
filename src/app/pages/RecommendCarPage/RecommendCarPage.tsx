import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Cars from '../../components/Cars/Cars';
import Scroller from '../../components/Scroller/Scroller';
import Search from '../../components/Search/Search';
import { ICar, Cars as CarsModel } from '../../sdk/CarsModel';

function RecommendCarPage(): JSX.Element {
  const [cars, setCars] = useState<ICar[]>([]);
  const [hidden, setHidden] = useState(false);

  const filterData = (query: ICar) => {
    const sdkCars = new CarsModel();
    const result = sdkCars.filter(query) as ICar[];

    setCars(result);
  };

  const onSearch = async (query: ICar) => {
    await filterData(query);
  };

  Scroller((isHidden: boolean) => {
    setHidden(isHidden);
  });

  let content;
  if (cars.length > 0) {
    content = <Cars item={cars} />;
  } else {
    content = <h1>No matching car found</h1>;
  }

  return (
    <div className="flex flex-col bg-gray-200">
      <div className={hidden ? 'fixed' : ''}>
        <div className={hidden ? 'hidden' : 'block'}>
          <Header />
        </div>
        <Search onSearch={onSearch} recommend={true} />
      </div>
      {content}
    </div>
  );
}

export default RecommendCarPage;
