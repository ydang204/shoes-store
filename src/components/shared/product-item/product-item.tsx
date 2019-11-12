import React from "react";

import "./product-item.scss";

interface Props {}

const ProductItem: React.FC<Props> = props => {
  return (
    <div className="product-item">
        <div className="product-image">
          <a href="#">
            <img
              className="pic-1"
              src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-1.jpg"
            />
            <img
              className="pic-2"
              src="http://bestjquery.com/tutorial/product-grid/demo8/images/img-2.jpg"
            />
          </a>
          <ul className="social">
            <li>
              <a
                href=""
                className="fa fa-shopping-bag"
                title="Xem chi tiết"
              ></a>
            </li>
            <li>
              <a href="" className="fa fa-shopping-cart" title="Mua hàng"></a>
            </li>
          </ul>
          <span className="product-like">
            <a href="">
              <i className="fa fa-heart" title="yêu thích"> 1</i>
            </a>
          </span>
        </div>
        <div className="product-content">
          <div className="title">
            <h5>
              <a href="#"> KINH MAT NU AH13</a>
            </h5>
          </div>
          <div>
            <button type="button" className="btn btn-outline-warning">
              100K
            </button>
          </div>
        </div>
    </div>
  );
};

export default ProductItem;
