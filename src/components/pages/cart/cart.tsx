import React, { Component } from "react";

import "./cart.scss";

import BreadcrumbItem from "../../../_models/shared/breadcrumb-item";
import withBreadcrumb from "../../shared/breadcrumb/with-breadcrumb";
import CartItem from "./cart-item/cart-item";
import InformationCustomer from "./information-customer/information-customer";

type Props = {};

type States = {};

class Cart extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="container cart-container">
        <div className="row">
            <CartItem />
            <InformationCustomer />  
        </div>
      </div>
    );
  }
}

const breadcrumbItems: BreadcrumbItem[] = [{ name: "Giỏ hàng" }];

export default withBreadcrumb(breadcrumbItems)(Cart);
