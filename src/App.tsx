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
import { OrderProduct } from "./_models/order-api/req-model/create-order-req-model";

interface Props {}

interface States {}

class App extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const savedToken = localStorage.getItem("fcmToken");
    if (!savedToken) {
      askForPermissionToReceiveNotifications();
    }

    messaging.onMessage(message => console.log(message));

    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route>
              <RouteLayout path="/checkout" component={Checkout} />
              <RouteLayout path="/products" component={Products} />
              <RouteLayout path="/login" component={Login} />
              <RouteLayout path="/search" component={Search} />
              <RouteLayout path="/cart" component={Cart} />
              <RouteLayout
                path="/product-details/:slug"
                component={ProductDetails}
              />
              <RouteLayout path="/history" component={History} />
              <RouteLayout path="/history/detail" component={OrderDetails} />
              <RouteLayout exact path="/" component={Home} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
