import React, { Component } from "react";

import "./cart.scss";
import { Button, Input } from "reactstrap";
import BreadcrumbItem from "../../../_models/shared/breadcrumb-item";
import withBreadcrumb from "../../shared/breadcrumb/with-breadcrumb";

type Props = {};

type States = {};

class Cart extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <form>
              <div className="row shopping-cart-item">
                <div className="col-md-2">
                  <p className="image">
                    <img
                      className="img-responsive"
                      src="https://salt.tikicdn.com/cache/175x175/ts/product/3a/be/30/63989ba52dce745cc9d32f725b7d21f3.jpg"
                    />
                  </p>
                </div>
                <div className="col-md-5">
                  <p className="name">Giày nam, giày sneaker nam SP-283 - 40</p>
                </div>
                <div className="col-md-2">
                  <p className="name">100000</p>
                </div>
                <div className="name col-md-1">
                  <Input
                    type="number"
                    name="number"
                    id="exampleNumber"
                    defaultValue="1"
                  />
                </div>
                <div className="col-md-1">
                  <Button color="link">Xoa</Button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-3">
            <form>
              <div className="row list-info-price">
                <div className="col-md-6">
                  <p className="title">Tạm tính:</p>
                </div>
                <div className="col-md-6">
                  <p className="price">8000000</p>
                </div>
              </div>
              <div className="row total2">
                <div className="col-md-6">
                  <p className="title">Thành tiền:</p>
                </div>
                <div className="col-md-6">
                  <p className="price">150.000.000đ</p>
                </div>
              </div>
              <Button className="btn btn-danger btn-checkout">Đặt hàng</Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const breadcrumbItems: BreadcrumbItem[] = [{ name: "Giỏ hàng" }];

export default withBreadcrumb(breadcrumbItems)(Cart);
