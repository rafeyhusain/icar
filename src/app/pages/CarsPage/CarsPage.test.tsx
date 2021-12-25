import React from 'react';
import CarsPage from './CarsPage';
import { Route, MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

test('renders without crash', () => {
  () =>
    render(
      <MemoryRouter>
        <Route path="/:currency?" children={<CarsPage />} />
      </MemoryRouter>
    );
});
