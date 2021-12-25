import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CarsPage from './pages/CarsPage/CarsPage';
import RecommendCarPage from './pages/RecommendCarPage/RecommendCarPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/recommend">
        <RecommendCarPage />
      </Route>
      <Route exact path="/">
        <CarsPage />
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
