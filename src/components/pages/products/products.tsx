import React, { Fragment } from "react";

import "./products.scss";

import BreadcrumbItem from "../../../_models/shared/breadcrumb-item";
import Breadcrumb from "../../shared/breadcrumb/breadcrumb";
import ProductItem from "../../shared/product-item/product-item";
import GetProductsReqModel from "../../../_models/product-api/req-model/get-product-req-model";
import {
  getProductsAsync,
  parseProductsReqModel
} from "../../../_services/products-api/product-service";
import GetProductsResModel from "../../../_models/product-api/res-model/get-products-res-model";
import BasePagingResModel from "../../../_models/shared/base-paging-res-model";
import { RouteComponentProps, withRouter } from "react-router";
import Pagination from "../../shared/pagination/pagination";

interface Props extends RouteComponentProps {}

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

  componentDidUpdate(prevProps: Props, prevStates: States) {
    const currModel = parseProductsReqModel(
      this.props.history.location.search,
      this.state.getProductsModel
    );

    if (
      prevStates.getProductsModel.brandId !== currModel.brandId ||
      prevStates.getProductsModel.categoryId !== currModel.categoryId ||
      prevStates.getProductsModel.page !== currModel.page
    ) {
      this.getProducts();
    }
  }

  getProducts = async () => {
    const model = parseProductsReqModel(
      this.props.history.location.search,
      this.state.getProductsModel
    );
    this.setState({ getProductsModel: model });

    const res = await getProductsAsync(model);

    const { totalPage, items, total } = res.data as BasePagingResModel<
      GetProductsResModel
    >;
    this.setState({ products: items, total: total, totalPage });
  };

  render() {
    const breadcrumbItems: BreadcrumbItem[] = [{ name: "Sản phẩm" }];
    const products = this.state.products.map(p => (
      <ProductItem product={p} key={p.slugName} />
    ));

    return (
      <Fragment>
        <Breadcrumb items={breadcrumbItems} />
        <div className="products-container container">
          <div className="row">{products}</div>
          <Pagination
            pageIndex={1}
            totalPage={10}
            handlePageChange={() => console.log()}
          />
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Products);
