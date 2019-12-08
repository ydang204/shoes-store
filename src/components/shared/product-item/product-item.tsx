import React from "react";

import "./product-item.scss";
import GetProductsResModel from "../../../_models/product-api/res-model/get-products-res-model";
import { withRouter, RouteComponentProps } from "react-router";
import { currencyFormat } from "../../../_cores/utils/helpers";

interface Props extends RouteComponentProps {
  product: GetProductsResModel;
}

const ProductItem: React.FC<Props> = props => {
  const { product, history } = props;

  const viewDetails = () => {
    history.push(`product-details/${product.slugName}`);
  };

  const images = product.productImages.splice(0, 2).map((img, index) => {
    const classname = `pic-${index + 1}`;
    return <img key={index} className={classname} src={img.imageUrl} />;
  });

  return (
    <div className="col-md-3 col-sm-6">
      <div className="product-item">
        <div className="product-image">
          <a style={{ cursor: "pointer" }} onClick={viewDetails}>
            {images}
          </a>
          <ul className="social">
            <li>
              <p
                onClick={viewDetails}
                className="fa fa-eye"
                title="Xem chi tiết"
              ></p>
            </li>
            <li>
              <p className="fa fa-shopping-cart" title="Mua hàng"></p>
            </li>
          </ul>
          <span className="product-like">
            <a href="">
              <i className="fa fa-heart" title="yêu thích">
                {" "}
                1
              </i>
            </a>
          </span>
        </div>
        <div className="product-content">
          <div className="title">
            <h5>
              <p onClick={viewDetails} title={product.name} className="name">
                {product.name}
              </p>
            </h5>
          </div>
          <div>
            <button type="button" className="btn btn-outline-warning price">
              {currencyFormat(product.price)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProductItem);
