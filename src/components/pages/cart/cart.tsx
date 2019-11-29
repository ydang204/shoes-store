import React, { Component } from "react";

import "./cart.scss";
import { Button, Input } from "reactstrap";
import BreadcrumbItem from "../../../_models/shared/breadcrumb-item";
import withBreadcrumb from "../../shared/breadcrumb/with-breadcrumb";
import CartItem from "./cart-item/cart-item";

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
          <div className="cart-item col-auto">
            <form>
              <CartItem />
            </form>
          </div>
          <div className="total col-auto">
            <form>
              <div className="row list-info-price col-xs-auto">
                <div className="col">
                  <p className="title">Tạm tính:</p>
                </div>
                <div className="col">
                  <p className="price">8000000</p>
                </div>
              </div>
              <div className="row total2 col-xs-auto">
                <div className="col">
                  <p className="title">Thành tiền:</p>
                </div>
                <div className="col">
                  <p className="price">150.000.000đ</p>
                </div>
              </div>

              <div className='row col-xs-auto'>
                <Button className="btn btn-danger btn-checkout">Đặt hàng</Button>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

const breadcrumbItems: BreadcrumbItem[] = [{ name: "Giỏ hàng" }];

export default withBreadcrumb(breadcrumbItems)(Cart);
