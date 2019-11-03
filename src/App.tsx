import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';


import './App.scss';
import RouteLayout from './components/shared/layout/route-layout';
import Home from './components/pages/home/home';
import Login from './components/pages/auth/login/login';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route>
            <RouteLayout  path="/login" component={Login} />
            <RouteLayout exact path="/" component={Home} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
