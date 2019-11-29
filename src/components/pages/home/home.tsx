import React, { Component } from "react";
import ProductItem from "../../shared/product-item/product-item";

import "./home.scss";
import TrendingProducts from "./trending-products/trending-products";
import MainSlider from "./main-slider/main-slider";

type Props = {};

type States = {};

class Home extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="container home-container">
        <MainSlider />
        <TrendingProducts />
      </div>
    );
  }
}

export default Home;
