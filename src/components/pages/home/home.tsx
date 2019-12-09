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

interface Props {}

interface States {
  trendingProducts: GetProductsResModel[];
  newProducts: GetProductsResModel[];
}

class Home extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      newProducts: [],
      trendingProducts: []
    };
  }

  componentDidMount() {
    this.getNewProducts();
    this.getTrendingProducts();
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
      </div>
    );
  }
}

export default Home;
