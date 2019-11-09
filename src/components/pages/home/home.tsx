import React, { Component } from "react";

import "./home.scss";
import MainSlider from "./main-slider/main-slider";
import TrendingProducts from "./trending-products/trending-products";
import NewProducts from "./new-products/new-products";

type Props = {};

type States = {};

class Home extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <MainSlider />
        <TrendingProducts />
        <NewProducts />
      </div>
    );
  }
}

export default Home;
