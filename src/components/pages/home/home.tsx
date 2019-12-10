import React, { Component } from "react";
import ProductItem from "../../shared/product-item/product-item";

import "./home.scss";
import TrendingProducts from "./trending-products/trending-products";
import MainSlider from "./main-slider/main-slider";
import GetProductsResModel from "../../../_models/product-api/res-model/get-products-res-model";
import GetProductsReqModel from "../../../_models/product-api/req-model/get-product-req-model";
import { getProductsAsync } from "../../../_services/products-api/product-service";
import BasePagingResModel from "../../../_models/shared/base-paging-res-model";
import { OrderDirection } from "../../../_models/shared/base-paging-req-model";
import NewProducts from "./new-products/new-products";
import { Settings } from "react-slick";
import {
  NextArrow,
  PrevArrow
} from "../../shared/carousel-arrow/carousel-arrow";
import { RouteComponentProps, withRouter } from "react-router";
import qs from "qs";
import PaymentSuccessModal from "./success-payment-modal/success-payment-modal";

interface Props extends RouteComponentProps {}

interface States {
  trendingProducts: GetProductsResModel[];
  newProducts: GetProductsResModel[];
  isOpenSuccessModal: boolean;
  amount: number;
}

class Home extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      newProducts: [],
      trendingProducts: [],
      isOpenSuccessModal: false,
      amount: 0
    };
  }

  componentDidMount() {
    this.getNewProducts();
    this.getTrendingProducts();
    this.parseQueryParams();
  }

  getNewProducts = async () => {
    const model: GetProductsReqModel = {
      pageSize: 12,
      page: 5,
      sortNames: ["CreatedAt"],
      sortDirections: [OrderDirection.OrderByDescending]
    };

    const res = await getProductsAsync(model);

    const { items } = res.data as BasePagingResModel<GetProductsResModel>;
    this.setState({ newProducts: items });
  };

  getTrendingProducts = async () => {
    const model: GetProductsReqModel = {
      pageSize: 12,
      page: 2
    };

    const res = await getProductsAsync(model);

    const { items } = res.data as BasePagingResModel<GetProductsResModel>;
    this.setState({ trendingProducts: items });
  };

  parseQueryParams = () => {
    const params = qs.parse(this.props.history.location.search, {
      ignoreQueryPrefix: true
    });
    const { message, amount } = params;
    console.log(params);
    if (message === "Success") {
      this.setState({ isOpenSuccessModal: true, amount: amount });
    }
  };

  render() {
    const sliderSettings: Settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      rows: 1,
      initialSlide: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container home-container">
        <MainSlider />
        <TrendingProducts
          settings={sliderSettings}
          products={this.state.trendingProducts}
        />
        <NewProducts
          settings={sliderSettings}
          products={this.state.newProducts}
        />
        <PaymentSuccessModal
          amount={this.state.amount}
          isOpen={this.state.isOpenSuccessModal}
          toggleModal={() =>
            this.setState({
              isOpenSuccessModal: !this.state.isOpenSuccessModal
            })
          }
        />
      </div>
    );
  }
}

export default withRouter(Home);
