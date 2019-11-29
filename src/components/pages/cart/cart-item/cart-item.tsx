import React from "react";
import { Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";

import "./cart-item.scss";

interface Props { }

const CartItem: React.FC<Props> = props => {
  return (
    <div className="row shopping-cart-item">
      <div className="col-md-3">
        <p className="image">
          <img
            className="img-responsive"
            src="https://salt.tikicdn.com/cache/175x175/ts/product/3a/be/30/63989ba52dce745cc9d32f725b7d21f3.jpg"
          />
        </p>
      </div>
      <div className="col-md-5">
        <p className="name">Giày nam, giày sneaker nam SP-283 - 40col-md-auto</p>
      </div>
      <div className="col-md-auto">
        <p className="name">100000</p>
      </div>
      <div className="name col-md-1">
        <Input
          type="number"
          name="item"
          id="exampleNumber"
          defaultValue="1"
        />
      </div>
      <div className="col-md-1">
        <button className="btn">
          <i className="fa fa-trash" />
        </button>
      </div>

    </div>



  );
};

export default CartItem;
