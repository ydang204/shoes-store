import React from "react";

import "./product-item.scss";

interface Props {}

const ProductItem: React.FC<Props> = props => {
  return (
    <div className="product-item">
      <div className="product-grid7">
        <div className="product-image7">
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
              <a href="" className="fa fa-search"></a>
            </li>
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
          <span className="product-new-label">
            <a href="">
              <i className="fa fa-heart-o"> 1</i>
            </a>
          </span>
        </div>
        <div className="product-content">
          <div className="title">
            <h5>
              <a href="#"> KINH MAT NU AH13</a>
            </h5>
            <p>100,000đ</p>
          </div>
          <div>
            <button type="button" className="btn btn-outline-warning">
              LIÊN HỆ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
