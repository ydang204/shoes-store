import React from "react";

import "./product-item.scss";
import GetProductsResModel from "../../../_models/product-api/res-model/get-products-res-model";
import { withRouter, RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {
  product: GetProductsResModel;
}

const ProductItem: React.FC<Props> = props => {
  const { product, history } = props;

  const viewDetails = () => {
    history.push(`product-details/${product.slugName}`);
  };

  return (
    <div className="col-md-3 col-sm-6">
      <div className="product-item">
        <div className="product-image">
          <a href="#">
            <img className="pic-1" src={product.productImages[0].imageUrl} />
            <img className="pic-2" src={product.productImages[1].imageUrl} />
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
              <a href="#">{product.name}</a>
            </h5>
          </div>
          <div>
            <button type="button" className="btn btn-outline-warning">
              {product.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProductItem);
