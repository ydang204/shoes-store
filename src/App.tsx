import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';


import './App.scss';
import RouteLayout from './components/shared/layout/route-layout';
import Home from './components/pages/home/home';
import Login from './components/pages/auth/login/login';
import Search from './components/pages/search/search';
import Cart from './components/pages/cart/cart';
import ProductDetails from './components/pages/product-details/product-details';

const App: React.FC = () => { 
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route>
            <RouteLayout path="/login" component={Login} />
            <RouteLayout path="/search" component={Search} />
            <RouteLayout exact path="/" component={Home} />
            <RouteLayout exact path="/cart" component={Cart} />
            <RouteLayout exact path="/productdetails" component={ProductDetails} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
