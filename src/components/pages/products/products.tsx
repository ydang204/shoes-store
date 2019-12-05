import React, { Fragment } from "react";

import "./products.scss";

import BreadcrumbItem from "../../../_models/shared/breadcrumb-item";
import Breadcrumb from "../../shared/breadcrumb/breadcrumb";
import ProductItem from "../../shared/product-item/product-item";

interface Props {}

interface States {}

class Products extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const breadcrumbItems: BreadcrumbItem[] = [{ name: "Sản phẩm" }];
    return (
      <Fragment>
        <Breadcrumb items={breadcrumbItems} />
        <div className="products-container container">
          <div className="row">
            <ProductItem />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Products;
