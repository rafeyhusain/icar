import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CarsPage from './pages/CarsPage/CarsPage';
import EditCarPage from './pages/EditCarPage/EditCarPage';
import RecommendCarPage from './pages/RecommendCarPage/RecommendCarPage';
import { Cars as CarsSdk } from './sdk/CarsModel';

function App(): JSX.Element {
  return (<>
    <BrowserRouter>
      <Switch>
        <Route path="/recommend">
          <RecommendCarPage />
        </Route>
        <Route path="/edit-car">
          <EditCarPage {...CarsSdk.default()} />
        </Route>
        <Route exact path="/">
          <CarsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;
