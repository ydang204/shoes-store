import React from "react";
import { Input, Button } from "reactstrap";

import "./cart-item.scss";

interface Props {}

const CartItem: React.FC<Props> = props => {
  return (
    <div className="row shopping-cart-item">
      <div className="col-md-2">
        <p className="image">
          <img
            className="img-responsive"
            src="https://salt.tikicdn.com/cache/175x175/ts/product/3a/be/30/63989ba52dce745cc9d32f725b7d21f3.jpg"
          />
        </p>
      </div>
      <div className="col-md-5">
        <p className="name">Giày nam, giày sneaker nam SP-283 - 40</p>
      </div>
      <div className="col-md-2">
        <p className="name">100000</p>
      </div>
      <div className="name col-md-1">
        <Input
          type="number"
          name="number"
          id="exampleNumber"
          defaultValue="1"
        />
      </div>
      <div className="col-md-1">
        <Button color="link">Xoa</Button>
      </div>
    </div>
  );
};

export default CartItem;
