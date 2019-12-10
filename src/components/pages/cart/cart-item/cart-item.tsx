import React from "react";
import { Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";

import "./cart-item.scss";
import { currencyFormat } from "../../../../_cores/utils/helpers";
import { OrderProduct } from "../../../../_models/order-api/create-order-req-model";
import GetProductsResModel from "../../../../_models/product-api/res-model/get-products-res-model";
import { RouteComponentProps, withRouter } from "react-router";

interface Props extends RouteComponentProps {
  products: GetProductsResModel[];
  orderProducts: OrderProduct[];
  total: number;
}

const CartItem: React.FC<Props> = props => {
  const { products, total, orderProducts, history } = props;

  const viewDetails = (p: GetProductsResModel) => {
    history.push(`product-details/${p.slugName}`);
  };

  const cartItems = products.map(p => {
    const orderItem = orderProducts.find(i => i.id === p.id);
    return (
      <td key={p.id} className="cart-item">
        <td>
          <div
            onClick={() => viewDetails(p)}
            className="image"
            // style={{
            //   background: `url(${p.productImages[0].imageUrl}) center center / cover no-repeat;`
            // }}
          >
            <img src={p.productImages[0].imageUrl} alt="" />
          </div>
        </td>
        <td onClick={() => viewDetails(p)}>{p.name}</td>
        <td>{currencyFormat(p.price)}</td>
        <td>
          <Input
            type="number"
            name="item"
            className="number1"
            defaultValue={!orderItem ? 1 : orderItem.count}
          />
        </td>
        <td>
          <button className="btn">
            <i className="fa fa-trash" />
          </button>
        </td>
      </td>
    );
  });
  return (
    <div className="total cart-items">
      <div className="row1">
        <form>
          <table>
            <tbody>{cartItems}</tbody>
          </table>
        </form>
      </div>
      <div className="row2">
        <form>
          <div className="row list-info-price col-xs-auto">
            <div className="col-md-6">
              <p className="title">Tạm tính:</p>
            </div>
            <div className="col-md-6">
              <p className="price">{currencyFormat(total)}</p>
            </div>
          </div>
          <div className="row total2 col-xs-auto">
            <div className="col-md-6">
              <p className="title">Thành tiền:</p>
            </div>
            <div className="col-md-6">
              <p className="price">{currencyFormat(total)}</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(CartItem);
