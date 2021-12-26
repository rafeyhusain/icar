import React from 'react';

import EditCarPage from './EditCarPage';

export default {
  title: 'Component/EditCarPage',
  component: EditCarPage,
};

export const CarText = (): JSX.Element => <EditCarPage>Car</EditCarPage>;
