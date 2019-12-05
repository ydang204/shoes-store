import React, { Fragment } from "react";

import "./products.scss";

import BreadcrumbItem from "../../../_models/shared/breadcrumb-item";
import Breadcrumb from "../../shared/breadcrumb/breadcrumb";
import ProductItem from "../../shared/product-item/product-item";
import GetProductsReqModel from "../../../_models/product-api/req-model/get-product-req-model";
import { getProductsAsync } from "../../../_services/products-api/product-service";
import GetProductsResModel from "../../../_models/product-api/res-model/get-products-res-model";
import BasePagingResModel from "../../../_models/shared/base-paging-res-model";

interface Props {}

interface States {
  getProductsModel: GetProductsReqModel;
  products: GetProductsResModel[];
  total: number;
  totalPage: number;
}

class Products extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      getProductsModel: {
        page: 1,
        pageSize: 12
      },
      products: [],
      total: 0,
      totalPage: 0
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const res = await getProductsAsync(this.state.getProductsModel);

    const { totalPage, items, total } = res.data as BasePagingResModel<
      GetProductsResModel
    >;
    this.setState({ products: items, total: total, totalPage });
  };

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
