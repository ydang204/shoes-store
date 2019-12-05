import React from "react";
import { Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";

import "./cart-item.scss";

interface Props { }

const CartItem: React.FC<Props> = props => {
  return (
    <div className="total">
      <div className="row1">
        <form>
          <table>
            <tbody>
              <tr>
                <td>
                    <p className="image">
                      <img
                        className="img-responsive"
                        src="https://salt.tikicdn.com/cache/175x175/ts/product/3a/be/30/63989ba52dce745cc9d32f725b7d21f3.jpg"
                      />
                    </p>
                </td>
                <td>
                    Giày nam, giày sneaker nam SP-283 - 40col-md-auto
                </td>
                <td>
                   100000
                </td>
                <td>
                    <Input
                      type="number"
                      name="item"
                      className="number1"
                      defaultValue="1"
                    />
                </td>
                <td>
                    <button className="btn">
                      <i className="fa fa-trash" />
                    </button>  
                </td>
              </tr>
            </tbody>
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
              <p className="price">8000000</p>
            </div>
          </div>
          <div className="row total2 col-xs-auto">
            <div className="col-md-6">
              <p className="title">Thành tiền:</p>
            </div>
            <div className="col-md-6">
              <p className="price">150.000.000đ</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CartItem;
