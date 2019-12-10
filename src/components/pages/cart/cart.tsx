import React, { Component } from "react";

import "./cart.scss";

import BreadcrumbItem from "../../../_models/shared/breadcrumb-item";
import withBreadcrumb from "../../shared/breadcrumb/with-breadcrumb";
import CartItem from "./cart-item/cart-item";
import InformationCustomer from "./information-customer/information-customer";
import { orderSubject } from "../../../_services/order-api/order-service";
import { OrderProduct } from "../../../_models/order-api/create-order-req-model";
import { getProductByIdsAsync } from "../../../_services/products-api/product-service";
import GetProductByIdsReqModel from "../../../_models/product-api/req-model/get-product-by-ids-req-model";
import GetProductsReqModel from "../../../_models/product-api/req-model/get-product-req-model";
import GetProductsResModel from "../../../_models/product-api/res-model/get-products-res-model";
import { Subscription } from "recompose";

type Props = {};

interface States {
  orderProducts: OrderProduct[];
  products: GetProductsResModel[];
  totalPrice: number;
  subscriptions: Subscription[];
}

class Cart extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      orderProducts: orderSubject.getProducts(),
      products: [],
      totalPrice: orderSubject.getTotalPrice(),
      subscriptions: []
    };
  }

  componentDidMount() {
    const subscription = orderSubject.getProduct().subscribe(p => {
      this.setState(
        {
          orderProducts: orderSubject.getProducts(),
          totalPrice: orderSubject.getTotalPrice()
        },
        () => this.getProducts()
      );
    });

    this.setState({ subscriptions: [subscription] });

    this.getProducts();
  }

  componentWillUnmount() {
    this.state.subscriptions.forEach(s => s.unsubscribe());
  }

  getProducts = async () => {
    const ids = this.state.orderProducts.map(p => p.id);
    if (ids.length > 0) {
      const model: GetProductByIdsReqModel = {
        ids
      };
      const res = await getProductByIdsAsync(model);
      this.setState({ products: res.data });
    }
  };

  render() {
    return (
      <div className="container cart-container">
        <div className="row">
          <CartItem
            products={this.state.products}
            orderProducts={this.state.orderProducts}
            total={this.state.totalPrice}
          />
          <InformationCustomer />
        </div>
      </div>
    );
  }
}

const breadcrumbItems: BreadcrumbItem[] = [{ name: "Giỏ hàng" }];

export default withBreadcrumb(breadcrumbItems)(Cart);
