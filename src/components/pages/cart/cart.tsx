import React, { Component } from "react";

import "./cart.scss";

import BreadcrumbItem from "../../../_models/shared/breadcrumb-item";
import withBreadcrumb from "../../shared/breadcrumb/with-breadcrumb";
import CartItem from "./cart-item/cart-item";
import InformationCustomer from "./information-customer/information-customer";
import {
  orderSubject,
  createOrderAsync
} from "../../../_services/order-api/order-service";
import {
  OrderProduct,
  CreateOrderReqModel
} from "../../../_models/order-api/create-order-req-model";
import { getProductByIdsAsync } from "../../../_services/products-api/product-service";
import GetProductByIdsReqModel from "../../../_models/product-api/req-model/get-product-by-ids-req-model";
import GetProductsReqModel from "../../../_models/product-api/req-model/get-product-req-model";
import GetProductsResModel from "../../../_models/product-api/res-model/get-products-res-model";
import { Subscription } from "rxjs";
import { AccountLoginResModel } from "../../../_models/user-api/res-model/login-res-model";
import CreateOrderResModel from "../../../_models/order-api/res-model/create-order-res-model";
import { OrderStatusResModel } from "../../../_models/order-api/res-model/order-res-model";

type Props = {};

interface States {
  orderProducts: OrderProduct[];
  products: GetProductsResModel[];
  totalPrice: number;
  subscriptions: Subscription[];
  createOrderModel: CreateOrderReqModel;
}

class Cart extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    const user = this.getCurrentUser();
    this.state = {
      orderProducts: orderSubject.getProducts(),
      products: [],
      totalPrice: orderSubject.getTotalPrice(),
      subscriptions: [],
      createOrderModel: {
        deliveryAddress: "",
        email: (user && user.email) || "",
        note: "",
        receiver: "",
        paymentMethod: "MoMo",
        phoneNumber: "",
        products: orderSubject.getProducts(),
        total: orderSubject.getTotalPrice()
      }
    };
  }

  componentDidMount() {
    const subscription = orderSubject.getProduct().subscribe(p => {
      this.setState(
        {
          orderProducts: orderSubject.getProducts(),
          totalPrice: orderSubject.getTotalPrice(),
          createOrderModel: {
            ...this.state.createOrderModel,
            products: orderSubject.getProducts()
          }
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

  getCurrentUser = (): AccountLoginResModel | null => {
    const user = localStorage.getItem("user");
    return user ? (JSON.parse(user) as AccountLoginResModel) : null;
  };

  handleInputChange = (event: any) => {
    const { value, name } = event.target;
    let newModel = {} as any;
    newModel[name] = value;

    this.setState({
      createOrderModel: { ...this.state.createOrderModel, ...newModel }
    });
  };

  submitOrder = async () => {
    const res = await createOrderAsync(this.state.createOrderModel);
    const data = res.data as CreateOrderResModel;
    if (data.status === OrderStatusResModel.WaitingPayment) {
      window.location.href = data.paymentUrl;
    }
  };

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
          <InformationCustomer
            handleInputChange={this.handleInputChange}
            createOrderModel={this.state.createOrderModel}
            submitOrder={this.submitOrder}
          />
        </div>
      </div>
    );
  }
}

const breadcrumbItems: BreadcrumbItem[] = [{ name: "Giỏ hàng" }];

export default withBreadcrumb(breadcrumbItems)(Cart);
