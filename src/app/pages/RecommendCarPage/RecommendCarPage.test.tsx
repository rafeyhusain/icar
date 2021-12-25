import React from 'react';
import RecommendCarPage from './RecommendCarPage';
import { Route, MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

test('renders without crash', () => {
  () =>
    render(
      <MemoryRouter>
        <Route path="/" children={<RecommendCarPage />} />
      </MemoryRouter>
    );
});
