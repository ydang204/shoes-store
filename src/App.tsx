import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";

import "./App.scss";
import RouteLayout from "./components/shared/layout/route-layout";
import Home from "./components/pages/home/home";
import Login from "./components/pages/auth/login/login";
import Search from "./components/pages/search/search";
import Cart from "./components/pages/cart/cart";
import ProductDetails from "./components/pages/product-details/product-details";
import History from "./components/pages/orderhistory/history";
import OrderDetails from "./components/pages/orderhistory/detail-history/detail-history";
import {
  askForPermissionToReceiveNotifications,
  messaging
} from "./_cores/utils/firebase-messaging";
import Checkout from "./components/pages/check-out/check-out";
import Products from "./components/pages/products/products";

const App: React.FC = () => {
  useEffect(() => {
    const savedToken = localStorage.getItem("fcmToken");
    if (!savedToken) {
      askForPermissionToReceiveNotifications();
    }

    messaging.onMessage(message => console.log(message));

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route>
            <RouteLayout path="/checkout" component={Checkout} />
            <RouteLayout path="/products" component={Products} />
            <RouteLayout path="/login" component={Login} />
            <RouteLayout path="/search" component={Search} />
            <RouteLayout exact path="/" component={Home} />
            <RouteLayout exact path="/cart" component={Cart} />
            <RouteLayout
              exact
              path="/product-details"
              component={ProductDetails}
            />
            <RouteLayout exact path="/history" component={History} />
            <RouteLayout
              exact
              path="/history/detail"
              component={OrderDetails}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
