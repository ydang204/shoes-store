import React from "react";
import "./information-customer.scss";
import { Button } from "reactstrap";
import { CreateOrderReqModel } from "../../../../_models/order-api/create-order-req-model";
import classnames from "classnames";

interface Props {
  handleInputChange: (event: any) => void;
  createOrderModel: CreateOrderReqModel;
  submitOrder: () => void;
}

const InformationCustomer: React.FC<Props> = props => {
  const { handleInputChange, createOrderModel, submitOrder } = props;

  return (
    <div className="information">
      <div className="row">
        <div className="col-lg-12">
          <p className="title">Thông tin giao hàng</p>
          <div className="form-group">
            <input
              type="text"
              className="form-control mt-2"
              defaultValue={createOrderModel.note}
              placeholder="Họ tên"
              name="receiver"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Số điện thoại"
              name="phoneNumber"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control mt-2"
              defaultValue={createOrderModel.email}
              placeholder="Địa chỉ email"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control mt-2"
              name="deliveryAddress"
              placeholder="Địa chỉ (ví dụ: 123 Nguyễn Trãi, Phường 1, Quận 1, Tp HCM)"
            />
          </div>
          <div className="form-group">
            <textarea
              rows={3}
              name="note"
              className="form-control mt-2"
              placeholder="Ghi chú thêm (Ví dụ: Giờ hành chính)"
              onChange={handleInputChange}
            />
          </div>
          <div className="checkout_payment">
            <h4>Chọn hình thức thanh toán</h4>
            <div className="payment-method_option">
              <div className="payment-method_item">
                <label className="radiobox">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="COD"
                    onChange={handleInputChange}
                  />
                  <span
                    className={classnames("checkmark", {
                      checked: createOrderModel.paymentMethod === "COD"
                    })}
                    style={{ marginTop: "20px" }}
                  ></span>
                  <span className="payment-method__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38.325"
                      height="24.317"
                    />
                  </span>
                  <div>
                    <h6>Thanh toán khi nhận hàng (COD)</h6>
                    <p>Miễn phí vận chuyển</p>
                  </div>
                </label>
              </div>
              <div className="content"></div>
              <div className="payment-method_item">
                <label className="radiobox">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="MoMo"
                    onChange={handleInputChange}
                  />
                  <span
                    className={classnames("checkmark", {
                      checked: createOrderModel.paymentMethod === "MoMo"
                    })}
                  ></span>
                  <span className="payment-method_icon">
                    <img
                      width="35"
                      src="https://coolmate.cdn.vccloud.vn/images/momo-icon.png"
                    />
                  </span>
                  <div>
                    <h6>Ví MoMo</h6>
                  </div>
                </label>
              </div>
              <Button
                className="btn btn-danger btn-checkout"
                onClick={submitOrder}
              >
                Đặt hàng
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InformationCustomer;
