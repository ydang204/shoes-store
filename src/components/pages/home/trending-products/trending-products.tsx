import React from "react";

import "./trending-products.scss";
import Slider, { Settings } from "react-slick";
import {
  NextArrow,
  PrevArrow
} from "../../../shared/carousel-arrow/carousel-arrow";
import GetProductsResModel from "../../../../_models/product-api/res-model/get-products-res-model";
import ProductItem from "../../../shared/product-item/product-item";

interface Props {
  products: GetProductsResModel[];
  settings: Settings;
}

const TrendingProducts: React.FC<Props> = props => {
  const { settings, products } = props;

  const productItems = products.map(p => (
    <ProductItem product={p} key={p.slugName} isHomeProduct={true} />
  ));

  return (
    <div className="trending-products">
      <p className="title">Sản phẩm nổi bật</p>
      <div className="col-md-12">
        <Slider {...settings}>{productItems}</Slider>
      </div>
    </div>
  );
};

export default TrendingProducts;
