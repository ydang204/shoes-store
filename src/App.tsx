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
import Chitiet from "./components/pages/orderhistory/chitiet/chitiet";
import { askForPermissionToReceiveNotifications } from "./_cores/utils/firebase-messaging";

const App: React.FC = () => {
  useEffect(() => {
    console.log("use effect");
    const savedToken = localStorage.getItem("fcmToken");
    console.log(savedToken);
    if (localStorage.getItem("token") && !savedToken) {
      askForPermissionToReceiveNotifications();
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route>
            <RouteLayout path="/login" component={Login} />
            <RouteLayout path="/search" component={Search} />
            <RouteLayout exact path="/" component={Home} />
            <RouteLayout exact path="/cart" component={Cart} />
            <RouteLayout
              exact
              path="/productdetails"
              component={ProductDetails}
            />
            <RouteLayout exact path="/history" component={History} />
            <RouteLayout exact path="/history/chitiet" component={Chitiet} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
