import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import './App.scss';
import RouteLayout from './components/shared/layout/route-layout';
import Home from './components/pages/home/home';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route>
            <RouteLayout exact path="/" component={Home} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
