import React from "react";
import "./information-customer.scss";
import { Button } from "reactstrap";

const InformationCustomer: React.FC = () => {
  return (
    <div className="information">
      <div className="row">
        <div className="col-lg-12">
          <p className="title">Thông tin giao hàng</p>
          <div className="form-group">
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Họ tên"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Số điện thoại"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control mt-2"
              placeholder="Địa chỉ email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Địa chỉ (ví dụ: 123 Nguyễn Trãi, Phường 1, Quận 1, Tp HCM)"
            />
          </div>
          <div className="form-group">
            <textarea
              rows={3}
              className="form-control mt-2"
              placeholder="Ghi chú thêm (Ví dụ: Giờ hành chính)"
            />
          </div>
          <div className="checkout_payment">
            <h4>Chọn hình thức thanh toán</h4>
            <div className="payment-method_option">
              <div className="payment-method_item">
                <label className="radiobox">
                  <input type="radio" name="payment_select" value="COD" />
                  <span className="checkmark"></span>
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
                  <input type="radio" name="payment_select" value="momo" />
                  <span className="checkmark"></span>
                  <span className="payment-method_icon">
                    <img
                      width="35"
                      src="https://coolmate.cdn.vccloud.vn/images/momo-icon.png"
                    />
                  </span>
                  <div>
                    <h6>Ví dụ MOMO</h6>
                  </div>
                </label>
              </div>
              <Button className="btn btn-danger btn-checkout">Đặt hàng</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InformationCustomer;
