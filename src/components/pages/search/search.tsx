import React, { Component, Fragment } from "react";
import qs from "qs";
import {
  withRouter,
  RouteComponentProps,
  RouteChildrenProps
} from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";

import ProductItem from "../../shared/product-item/product-item";
import { compose } from "recompose";

import BreadcrumbItem from "../../../_models/shared/breadcrumb-item";
import "./search.scss";
import withBreadcrumb from "../../shared/breadcrumb/with-breadcrumb";
import GetProductsReqModel from "../../../_models/product-api/req-model/get-product-req-model";
import GetProductsResModel from "../../../_models/product-api/res-model/get-products-res-model";
import {
  parseProductsReqModel,
  getProductsAsync
} from "../../../_services/products-api/product-service";
import BasePagingResModel from "../../../_models/shared/base-paging-res-model";
import Pagination from "../../shared/pagination/pagination";

interface Props extends RouteComponentProps {}

type States = {
  queryTag: string;
  getProductsModel: GetProductsReqModel;
  products: GetProductsResModel[];
  total: number;
  totalPage: number;
  page: number;
};

class Search extends Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      queryTag: "",
      getProductsModel: {
        page: 1,
        pageSize: 12,
        name: ""
      },
      products: [],
      total: 0,
      totalPage: 0,
      page: 0
    };
  }

  componentDidMount() {
    const params = qs.parse(this.props.history.location.search, {
      ignoreQueryPrefix: true
    });
    this.setState({ queryTag: params.query });

    this.getProducts();
  }

  componentDidUpdate(prevProps: Props, prevStates: States) {
    const params = qs.parse(this.props.history.location.search, {
      ignoreQueryPrefix: true
    });

    if (params.query != prevStates.queryTag) {
      this.setState({ queryTag: params.query });
    }

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
      window.scrollTo(0, 0);
    }
  }

  getProducts = async () => {
    const model = parseProductsReqModel(
      this.props.history.location.search,
      this.state.getProductsModel
    );
    this.setState({ getProductsModel: model });

    const res = await getProductsAsync(model);

    const { totalPage, items, total, page } = res.data as BasePagingResModel<
      GetProductsResModel
    >;
    this.setState({ products: items, total: total, totalPage, page });
  };

  handlePageChange = (page: number) => {
    let currentUrlParams = new URLSearchParams(this.props.location.search);
    currentUrlParams.set("page", page.toString());
    this.props.history.push(
      this.props.location.pathname + "?" + currentUrlParams.toString()
    );
  };

  render() {
    const products = this.state.products.map(p => (
      <ProductItem product={p} key={p.slugName} isHomeProduct={false} />
    ));

    const displayResult =
      this.state.products.length === 0 ? (
        <div className="text-center p-3 pb-5">
          Xin lỗi, chúng tôi không thể tìm thấy sản phẩm
        </div>
      ) : (
        <div className="grid-container">
          <div className="row">{products}</div>
          <Pagination
            page={this.state.page}
            totalPage={this.state.totalPage}
            handlePageChange={this.handlePageChange}
          />
        </div>
      );

    return (
      <div className="container breadcrumb-container">
        <div className="wrapper">
          <div className="content">{displayResult}</div>
        </div>
      </div>
    );
  }
}

const breadcrumbItems: BreadcrumbItem[] = [{ name: "Tìm kiếm" }];

export default compose<Props, {}>(
  withRouter,
  withBreadcrumb(breadcrumbItems)
)(Search);
